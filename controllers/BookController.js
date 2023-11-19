
const BooksArr = [
    {id:1,name:"name-1"},{id:2,name:"name-2"}
    ,{id:3,name:"name-3"},{id:4,name:"name-4"}
    ,{id:5,name:"name-5"},{id:6,name:"name-6"}
    ,{id:7,name:"name-7"},{id:8,name:"name-8"}
    ,{id:9,name:"name-9"},{id:10,name: "name-10"}
    ,{id:11,name:"name-11"},{id:12,name:"name-12"}
    ,{id:13,name:"name-13"},{id:14,name:"name-14"},
    {id:15,name:"name-15"},{id:16,name:"name-16"},
]



class UseBooks {


  getAll(req, res) {
    res.json(BooksArr);
  }

  getBook(req, res) {
    const bId = req.params.bookId;
    const findBook = BooksArr.find((BookID) => BookID.id === Number(bId))
    res.json(findBook);
  }
  setBook(req, res) {
    const PostBook = req.body;
    const params = req.params;
    const newBook = {...PostBook , ...params}; 
    BooksArr.push(newBook);
    res.json(newBook);
  }

  deleteBook(req, res) {
    const Del = req.params.bookId;
    const Index = BooksArr.findIndex((book) => book.id == Del);
    if (Index !== -1) {
      const deletedBook = BooksArr.splice(Index, 1);
      res.send(deletedBook);
    }
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
