const BooksFunction = require('../services/BooksService');




class UseBooks {


  getAll(req, res) {
   const getAll =  BooksFunction.getAllBooks()
   res.json(getAll);
  }

  getBook(req, res) {
    const bId = req.params.bookId;
    const findBook = BooksFunction.getOnBook(bId);
    res.json(findBook);
  }

  setBook(req, res) {
    const PostBook = req.body;
    const params = req.params;
    const POST = BooksFunction.postOnBook(params,PostBook)
    res.json(POST);
  }

  deleteBook(req, res) {
    const id = req.params.bookId;
    const  Del= BooksFunction.deleteBook(id)
   res.json(Del);
    }
  
  putBook(req, res) {
    const PutBook = req.params.bookId;
    const NewBook = req.body;
    const FineBook = BooksArr.findIndex((book) => book.id == PutBook);
    if (FineBook !== -1) {
      BooksArr[FineBook] = NewBook;

      res.send(BooksArr[FineBook]);
    }
  }
  patchBook(req, res) {
    const patchBook = req.params.bookId;
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
