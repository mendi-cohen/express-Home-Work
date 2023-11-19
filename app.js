const express = require("express");
const cors = require("cors");
const app = express()
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const user = require("./routes/User");
const Book = require("./routes/Book");
const Products = require('./routes/Products');

const port  = process.env.PORT ;


//routes

app.use('/user', user)
app.use('/AllBooks', Book)
app.use('/Products' ,Products )

//

 

// port
app.listen(port ,()=>{
    console.log(`listening on port ${port}`);
})

