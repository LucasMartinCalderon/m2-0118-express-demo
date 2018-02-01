const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');
const morgan     = require('morgan');

// We create our own server named app
// Express server handling requests and responses
const app = express();


app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('layout', 'layouts/main');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressLayouts);
app.use(express.static('public'));


let data = {
    staff: [
        { name: 'Papu', color: "red" },
        { name: "Lluis", color: "pink" },
        { name: "Claudia", color: "orange" },
        { name: "Sonia", color: "green" }
    ],
    ta: [
        { name: 'Manu del Pino', color: "red" },
        { name: "Manu Avello", color: "pink" },
        { name: "Victor", color: "orange" },
        { name: "Yaiza", color: "green" }
    ]
};


app.post('/equipo', (req, res) => {
    let type = req.body.type;
    if (type == "google"){
        res.redirect(`http://www.google.com`);
    }else{
        res.redirect(`/equipo?type=${type}`);
    }
});

// our first Route
app.get('/equipo', (req, res) => {
    let type = req.query.type;
    let data_obj = {
        type: (type || "")  + " es GET GUAY",
        people: data[type] || []
    }
    res.render('ironhack_people', data_obj);
});



app.listen(3000, () => {
    console.log('My first app listening on port 3000!')
});