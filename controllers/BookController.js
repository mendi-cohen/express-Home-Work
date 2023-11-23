const BooksFunction = require('../services/BooksService');




class UseBooks {


  getAll(req, res) {
   const getAll =  BooksFunction.getAllBooks()
   res.json(getAll);
  }

  //GET

  getBook(req, res) {
    const bId = req.params.id;
    const findBook = BooksFunction.findID(bId);
    res.json(findBook);
  }

  //POST

  PostBook(req, res) {
    const params = req.params;
    const PostBook = req.body;
  const POST = BooksFunction.postOnBook(params,PostBook)
    res.json(POST);
  }

  //DELETE

  deleteBook(req, res) {
    const id = req.params.id;
    const  Del= BooksFunction.deleteBook(id)
   res.json(Del);
    }

    //PUT
  
  putBook(req, res) {
    const PutBook = req.params.id;
    const NewBook = req.body;
    const result = BooksFunction.PutBook(PutBook, NewBook )
   res.json(result);
  }

 //PATCH


  patchBook(req, res) {
    const patchBook = req.params.id;
    const fineBookIndex = BooksArr.findIndex((book) => book.id == patchBook);
    if (req.body.id) {
      BooksArr[fineBookIndex].id = req.body.id;
    }
    if (req.body.name) {
      BooksArr[fineBookIndex].name = req.body.name;
    }
    res.send(BooksArr[fineBookIndex]);
  }
  
  queryBook(req, res) {
    const id = req.query.id;
    const bookName = req.query.bookName;
    res.json({
      message: "I'm a book!",
      id: id,
      bookName: bookName,
    });
  }
}

module.exports = new UseBooks();
