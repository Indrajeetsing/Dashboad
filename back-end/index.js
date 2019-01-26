// Import packages
const express = require('express')
const morgan = require('morgan')
// App
const app = express()
// Morgan
app.use(morgan('tiny'))

var produces = [
  { 'name': 'Check print shirt', 'category': 'Cloths', 'brand': 'Peter England', 'price per paund': 35, 'available': 'yes'},
  { 'name': 'Gloria logo sneaker', 'category': 'Shoes', 'brand': 'Gloria', 'price per paund': 55, 'available': 'yes'},
  { 'name': 'Cate rigid bag', 'category': 'Luggage', 'brand': 'Travel Pro', 'price per paund': 125, 'available': 'no'},
  { 'name': 'Wrist watch', 'category': 'Watches', 'brand': 'Fossil', 'price per paund': 135, 'available': 'yes'},
  { 'name': 'Check print shirt', 'category': 'Cloths', 'brand': 'Peter England', 'price per paund': 35, 'available': 'yes'},
  { 'name': 'Sport shoe', 'category': 'Shoes', 'brand': 'Adidas', 'price per paund': 55, 'available': 'no'},
  { 'name': 'Cate rigid bag', 'category': 'Luggage', 'brand': 'Travel Pro', 'price per paund': 125, 'available': 'yes'},
  { 'name': 'Wrist watch', 'category': 'Watches', 'brand': 'Police', 'price per paund': 135, 'available': 'no'},
  { 'name': 'Suit', 'category': 'Cloths', 'brand': 'Wrangler', 'price per paund': 35, 'available': 'yes'},
  { 'name': 'Black sneaker', 'category': 'Shoes', 'brand': 'Gloria', 'price per paund': 35, 'available': 'yes'},
  { 'name': 'Cate rigid bag', 'category': 'Luggage', 'brand': 'Travel Pro', 'price per paund': 125, 'available': 'no'},
  { 'name': 'Wrist watch', 'category': 'Watches', 'brand': 'Fossil', 'price per paund': 15, 'available': 'yes'},
  { 'name': 'Sweater', 'category': 'Cloths', 'brand': 'Peter England', 'price per paund': 86, 'available': 'no'},
  { 'name': 'Gloria logo sneaker', 'category': 'Shoes', 'brand': 'Nice', 'price per paund': 23, 'available': 'yes'},
  { 'name': 'Cate rigid bag', 'category': 'Luggage', 'brand': 'Travel Pro', 'price per paund': 152, 'available': 'yes'},
  { 'name': 'Wrist watch', 'category': 'Watches', 'brand': 'Casio', 'price per paund': 165, 'available': 'yes'},
  { 'name': 'Printed shirt', 'category': 'Cloths', 'brand': 'Peter England', 'price per paund': 35, 'available': 'yes'},
  { 'name': 'Formal Shoe', 'category': 'Shoes', 'brand': 'Gloria', 'price per paund': 55, 'available': 'no'},
  { 'name': 'Office bag', 'category': 'Luggage', 'brand': 'Travel Pro', 'price per paund': 95, 'available': 'yes'},
  { 'name': 'Smart watch', 'category': 'Watches', 'brand': 'Samsung', 'price per paund': 345, 'available': 'yes'},
];

function filterItems(query) {
  return produces.filter(function(produce) {
      return produce.name.toLowerCase().indexOf(query.toLowerCase()) > -1;
  })
}

// search
app.get('/search', (req, res, next) => {
  console.log(req.query.name);
  if(req.query.name == '' || req.query.name == undefined) {
    return res.status(200).send({ produces: produces});
  } else {
    return res.status(200).send({ produces: filterItems(req.query.name) });
  }
    // return res.json({ message: filterItems(req.params.name) })
})
// Starting server
app.listen('8000')
