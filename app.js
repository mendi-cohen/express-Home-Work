const express = require("express");
const cors = require("cors");
const path = require("path")
const app = express()
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const user = require("./routes/User");
const Book = require("./routes/Book");
const Products = require('./routes/Products');
const hidden = require('./middleWare/coverTheHeader');

const port  = process.env.PORT ;


//routes

app.use('/user', hidden , user)
app.use('/AllBooks', Book)
app.use('/Products' ,Products )

//

//static 

app.use(express.static( 'public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'html.html'));
});

// port
app.listen(port ,()=>{
    console.log(`listening on port ${port}`);
})

