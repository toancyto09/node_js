const path = require('path');
const express = require('express')
const { engine } = require("express-handlebars");
const app = express()
const morgan = require('morgan');
const port = 3000

const route = require('./routes');

//use static
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

// Http logger
// app.use(morgan('combined'))


//template engine
app.engine("hbs", engine({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources//views'));

//route init
route(app);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})