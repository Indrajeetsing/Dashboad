// Import packages
const express = require('express')
const morgan = require('morgan')
// App
const app = express()
// Cors
var cors = require('cors')
// Morgan
app.use(morgan('tiny'))
app.use(cors())

var produces = [
  { 'name': 'Check print shirt', 'category': 'Clothes', 'brand': 'Peter England', 'price per paund': '$35', 'available': 'Yes', 'location at store': { 'aisle name': 'a1' } },
  { 'name': 'Gloria logo sneaker', 'category': 'Shoes', 'brand': 'Gloria', 'price per paund': '$55', 'available': 'Yes', 'location at store': { 'aisle name': 'a2' } },
  { 'name': 'Cate rigid bag', 'category': 'Luggage', 'brand': 'Travel Pro', 'price per paund': '$125', 'available': 'No', 'location at store': { 'aisle name': 'b1' } },
  { 'name': 'Wrist watch', 'category': 'Watches', 'brand': 'Rolex', 'price per paund': '$535', 'available': 'Yes', 'location at store': { 'aisle name': 'b2' } },
  { 'name': 'Pullover', 'category': 'Clothes', 'brand': 'Hanes', 'price per paund': '$35', 'available': 'Yes', 'location at store': { 'aisle name': 'b3' } },
  { 'name': 'Sport shoe', 'category': 'Shoes', 'brand': 'Addidas', 'price per paund': '$55', 'available': 'No', 'location at store': { 'aisle name': 'c1' } },
  { 'name': 'Polister bag', 'category': 'Luggage', 'brand': 'Travel Pro', 'price per paund': '$125', 'available': 'Yes', 'location at store': { 'aisle name': 'c2' } },
  { 'name': 'Wrist watch', 'category': 'Watches', 'brand': 'Police', 'price per paund': '$135', 'available': 'No', 'location at store': { 'aisle name': 'c3' } },
  { 'name': 'Suit', 'category': 'Clothes', 'brand': 'Wrangler', 'price per paund': '$35', 'available': 'Yes', 'location at store': { 'aisle name': 'c4' } },
  { 'name': 'Black sneaker', 'category': 'Shoes', 'brand': 'Gloria', 'price per paund': '$35', 'available': 'Yes', 'location at store': { 'aisle name': 'c5' } },
  { 'name': 'Duffel bag', 'category': 'Luggage', 'brand': 'Travel Pro', 'price per paund': '$125', 'available': 'No', 'location at store': { 'aisle name': 'd1' } },
  { 'name': 'Wrist watch', 'category': 'Watches', 'brand': 'Fossil', 'price per paund': '$15', 'available': 'Yes', 'location at store': { 'aisle name': 'd2' } },
  { 'name': 'Sweater', 'category': 'Clothes', 'brand': 'Peter England', 'price per paund': '$86', 'available': 'No', 'location at store': { 'aisle name': 'd3' } },
  { 'name': 'Gloria logo sneaker', 'category': 'Shoes', 'brand': 'Nike', 'price per paund': '$23', 'available': 'Yes', 'location at store': { 'aisle name': 'd4' } },
  { 'name': 'Cate rigid bag', 'category': 'Luggage', 'brand': 'Travel Pro', 'price per paund': '$152', 'available': 'Yes', 'location at store': { 'aisle name': 'g1' } },
  { 'name': 'Wrist watch', 'category': 'Watches', 'brand': 'Casio', 'price per paund': '$165', 'available': 'Yes', 'location at store': { 'aisle name': 'g2' } },
  { 'name': 'Printed shirt', 'category': 'Clothes', 'brand': 'Peter England', 'price per paund': '$35', 'available': 'Yes', 'location at store': { 'aisle name': 'g3' } },
  { 'name': 'Formal Shoe', 'category': 'Shoes', 'brand': 'Gloria', 'price per paund': '$55', 'available': 'No', 'location at store': { 'aisle name': 'g4' } },
  { 'name': 'Office bag', 'category': 'Luggage', 'brand': 'Travel Pro', 'price per paund': '$95', 'available': 'Yes', 'location at store': { 'aisle name': 'g5' } },
  { 'name': 'Smart watch', 'category': 'Watches', 'brand': 'Samsung', 'price per paund': '$345', 'available': 'Yes', 'location at store': { 'aisle name': 's1' } },
  { 'name': 'Sweat Shirt', 'category': 'Clothes', 'brand': 'Hanes', 'price per paund': '$25', 'available': 'Yes', 'location at store': { 'aisle name': 's2' } },
];

// filtering and returing filtered data
function filterItems(query) {
  return produces.filter(function(produce) {
      return produce.name.toLowerCase().indexOf(query.toLowerCase()) > -1;
  })
}

// search
app.get('/search', (req, res, next) => {
  if(req.query.name == '') {
    return res.status(200).send({ produces: produces});
  } else {
    return res.status(200).send({ produces: filterItems(req.query.name) });
  }
})
// Starting server
app.listen('8000')
