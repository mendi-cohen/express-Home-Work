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

class BooksFunction{

    getAllBooks(){
        return BooksArr
    }

getOnBook(id){
 const find = BooksArr.find((Book)=> Book.id === Number(id));
 return find
}

postOnBook(params , PostBook){
    const newBook = {...params , ...PostBook}; 
    BooksArr.push(newBook);
    return newBook
}

deleteBook(id){
    const del = this.getOnBook(id);
    if(del !== -1){
        const deletedBook = BooksArr.splice(del, 1);
      return deletedBook
    }
}


}

module.exports =  new BooksFunction