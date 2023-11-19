
async function getProdacts() {
    const res = await fetch("https://dummyjson.com/products")
    const data = await res.json()
    enterToArray(data.products)
    
  }
  getProdacts();

  const AllProducts = []

  function enterToArray(data) {
    for (const product of data) {
      if (product.id) {
        AllProducts.push(product)
      }
        }
    }
  class Products{

//get All

getprodacts(req , res) {
res.send(AllProducts)
}

//get one Product

getOneProdact(req , res) {
  const productID = req.params.Id;
    const findProdact = AllProducts.find((product) => product.id == productID);
    if (findProdact) {
      res.json(findProdact);
  } else {
      res.status(404).json({ error: "Product not found" });
  }
  }
  
  //post one Product

  postOneProdact(req , res) {
    const params = req.params;
    const newProduct = req.body
    add(params, newProduct)
    AllProducts.push(newBook)
    res.send(newBook)
  }





  }
  module.exports = new Products