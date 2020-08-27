const express = require('express');
const app = express();

const { quotes } = require('./data');
const { getRandomElement, buscarValor } = require('./utils');


const PORT = process.env.PORT || 4001;

app.use(express.static('public'));
app.use(express.json());

//GET DEL BOTÓN RANDOM
app.get('/api/quotes/random', (req, res, next) => {
console.log(quotes);
console.log(typeof quotes);

const randomQuote = getRandomElement(quotes);
console.log(`acá la salida de randomQuote: ${JSON.stringify(randomQuote)}`);
console.log(randomQuote);
res.send(randomQuote);
});

//GET DEL BOTÓN PARA BUSCAR POR AUTOR, Y EL DE FETCH ALL QUOTES (--> NO LOGRO IDENTIFICAR LOS ELEMENTOS DEL OBJETO PARA PODER MOSTRARLOS)

app.get('/api/quotes/', (req, res, next) => {
    const author = req.query.author;
    if(author){
        console.log(author);

//        const citaAutor = quotes.find( cita => cita.person === author );
//        console.log(citaAutor);
        
        const encontrar = buscarValor(quotes, author);
        console.log(encontrar);
        
        res.send(encontrar); 
    } else {
        console.log(quotes);
        res.send(quotes);
    }
    });


//POST PARA AGREGAR CITAS

app.post('/api/quotes', (req, res, next) =>
{
  var nuevaCita = {
    quote: '',
    person: ''
  }
  const nuevaQuote = req.query.quote;
  const nuevoAuthor = req.query.person;
  nuevaCita.quote = nuevaQuote;
  nuevaCita.person = nuevoAuthor;

  quotes.push(nuevaCita);
  
  res.status(201).send(nuevaCita);
  console.log(nuevaCita);
  console.log(quotes);
  console.log(nuevaCita.quote);
  console.log(nuevaCita.person);
})


app.listen(PORT, () => {
    console.log(`AGREGADO Server is listening on port ${PORT}`);
  });
  

