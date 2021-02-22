// apiRoutes/templates.js
const router = require('express').Router();
const { Template, Order } = require('../db');

// matches GET requests to /api/templates/
router.get('/', async function (req, res, next) {
  try {
    res.send(await Template.findAll());
  } catch (err) {
    next(err);
  }
});

// matches POST requests to /api/templates/
//POST will be to the orders table - should this be taking in data
//from our form and creating a new order record in the orders table or
//do we pull the order info from the orders table and
//build up the object to send to Lob then call index.js to actually send it?
router.post('/', async function (req, res, next) {
  // try {
  //   res.status(201).send(await Template.create(req.body));
  // } catch (err) {
  //   next(err);
  // }
});
// // matches PUT requests to /api/puppies/:puppyId
// router.put('/:puppyId', function (req, res, next) {
//   /* etc */
// });
// // matches DELETE requests to /api/puppies/:puppyId
// router.delete('/:puppyId', function (req, res, next) {
//   /* etc */
// });

module.exports = router;
