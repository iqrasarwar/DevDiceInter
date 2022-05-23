var express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
let books = [];

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


const port = 3000;
app.get('/', (req, res) => {
   res.send('Hello World, from express');
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))

//add a new book
app.post('/book', (req, res) => {
   const book = req.body;
   console.log(book);
   books.push(book);
   res.send('Book is added to the database');
});
//get all books
app.get('/books', (req, res) => {
   res.json(books);
});

app.get('/book/:id', (req, res) => {
   const id = req.params.id;
   for (let book of books) {
      if (book.id === id) {
          res.json(book);
          return;
      }
  }
  res.status(404).send('Book not found');
});

app.delete('/book/:id', (req, res) => {
   const id = req.params.id;
   books = books.filter(i => {
      if (i.id !== id) {
          return true;
      }
      return false;
  });
  res.send('Book is deleted');
});

app.post('/book/:id', (req, res) => {
   const id = req.params.id;
   const newBook = req.body;

   for (let i = 0; i < books.length; i++) {
       let book = books[i]
       if (book.id === id) {
           books[i] = newBook;
       }
   }
   res.send('Book is edited');
});
