const path = require('path');
const express = require('express')
const { engine } = require("express-handlebars");
const app = express()
const morgan = require('morgan');
const port = 3000
const methodOverride = require('method-override');

const route = require('./routes');
const db = require('./config/db');

const sortMiddleware = require('./app/middlewares/SortMiddlewares');

//connec db
db.connect();

//use static
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));

// Http logger
// app.use(morgan('combined'))


//app user Middleware

app.use(sortMiddleware);
//template engine
app.engine("hbs", engine({
    extname: '.hbs',
    helpers: {
        sum: (a, b) => a + b,
        sortable: (field, sort) => {
            const sortType = field === sort.column ? sort.type : 'default';

            const icons = {
                default: 'fa-solid fa-sort',
                asc: 'fa-solid fa-arrow-up-wide-short',
                desc: 'fa-solid fa-arrow-up-short-wide',
            }

            const types = {
                default: 'desc',
                asc: 'desc',
                desc: 'asc',
            }

            const icon = icons[sortType];
            const type = types[sortType]

            return `<a href="?_sort&column=${field}&type=${type}">
            <i class="${icon}"></i>
          </a>`;
        },
    }
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources//views'));

//route init
route(app);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})