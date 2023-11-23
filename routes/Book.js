const express = require('express');
const BookPage = express.Router();
const Controllers = require("../controllers/BookController")


//getAll
BookPage.get('/',Controllers.getAll);
//get
BookPage.get("/:id",Controllers.getBook)
//post
BookPage.post('/:id',Controllers.PostBook)
//delete
BookPage.delete('/:id',Controllers.deleteBook)
//put
BookPage.put('/:id',Controllers.putBook);
//patch
BookPage.patch('/:id',Controllers.patchBook)
//query
BookPage.get('/', Controllers.queryBook)

module.exports = BookPage;