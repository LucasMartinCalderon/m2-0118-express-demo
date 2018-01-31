const express = require('express');
const expressLayouts = require('express-ejs-layouts');

// We create our own server named app
// Express server handling requests and responses
const app = express();


app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('layout', 'layouts/main');

app.use(expressLayouts);
app.use(express.static('public'));


let data = {
    staff: [
        { name: 'Papu', color: "red" },
        { name: "Lluis", color: "pink" },
        { name: "Claudia", color: "orange" },
        { name: "Sonia", color: "green" }
    ],
    ta:[
        { name: 'Manu del Pino', color: "red" },
        { name: "Manu Avello", color: "pink" },
        { name: "Victor", color: "orange" },
        { name: "Yaiza", color: "green" }
    ]
};

// our first Route
app.get('/ta', (request, response, next) => {
    let type = 'ta';
    response.render('ironhack_people', {type:type, people: data[type]});
});

app.get('/staff', (request, response, next) => {
    let type = 'staff';
    response.render('ironhack_people', {type:type,people: data[type]});
});



app.listen(3000, () => {
    console.log('My first app listening on port 3000!')
});