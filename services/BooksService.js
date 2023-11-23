const BooksArr = [
  { id: 1, name: "name-1" },
  { id: 2, name: "name-2" },
  { id: 3, name: "name-3" },
  { id: 4, name: "name-4" },
  { id: 5, name: "name-5" },
  { id: 6, name: "name-6" },
  { id: 7, name: "name-7" },
  { id: 8, name: "name-8" },
  { id: 9, name: "name-9" },
  { id: 10, name: "name-10" },
  { id: 11, name: "name-11" },
  { id: 12, name: "name-12" },
  { id: 13, name: "name-13" },
  { id: 14, name: "name-14" },
  { id: 15, name: "name-15" },
  { id: 16, name: "name-16" },
];

class BooksFunction {
  findINDEX(id) {
    BooksArr.findIndex((Book) => Book.id === Number(id));
  }
  findID(id) {
    BooksArr.find((Book) => Book.id === Number(id));
    return BooksArr[--id];
  }

  //GET

  getAllBooks() {
    return BooksArr;
  }

  //POST

  postOnBook(params, PostBook) {
    const newBook = { ...params, ...PostBook };
    newBook.id = parseInt(newBook.id, 10);
    BooksArr.push(newBook);
    return newBook;
  }

  //DELETE

  deleteBook(id) {
    this.findINDEX(id);
    const deletedBook = BooksArr.splice(--id, 1);
    return deletedBook;
  }

  //PUT

  PutBook(id, newBook) {
    this.findINDEX(id);
    if (id !== -1) {
      const result = { ...BooksArr[--id], ...newBook };
      result.id = parseInt(result.id, 10);
      BooksArr[id] = result;
      return result;
    }
  }
}

module.exports = new BooksFunction();
