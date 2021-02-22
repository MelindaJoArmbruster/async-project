const router = require('express').Router();

// router.use('/users', require('./users')); // matches all requests to /api/users/
// router.use('/puppies', require('./puppies')); // matches all requests to  /api/puppies/
// router.use('/kittens', require('./kittens')); // matches all requests to  /api/kittens/

router.use('/templates', require('./templates'));
router.use('/orders', require('./orders'));

//to handle  API routes that don't exist:
router.use(function (req, res, next) {
  const err = new Error('Not found.');
  err.status = 404;
  next(err);
});

module.exports = router;
