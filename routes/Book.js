const express = require('express');
const BookPage = express.Router();
const Controllers = require("../controllers/BookController")


//getAll
BookPage.get('/',Controllers.getAll);
//get
BookPage.get("/:bookId",Controllers.getBook)
//post
BookPage.post('/:Id',Controllers.setBook)
//delete
BookPage.delete('/:bookId',Controllers.deleteBook)
//put
BookPage.put('/:bookId',Controllers.putBook);
//patch
BookPage.patch('/:bookId',Controllers.patchBook)
//query
BookPage.get('/', Controllers.queryBook)

module.exports = BookPage;