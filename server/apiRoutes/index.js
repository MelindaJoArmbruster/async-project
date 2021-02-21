const router = require('express').Router();

// router.use('/users', require('./users')); // matches all requests to /api/users/
router.use('/', require('./puppies')); // matches all requests to  /api/puppies/
// router.use('/kittens', require('./kittens')); // matches all requests to  /api/kittens/

//to handle  API routes that don't exist:
router.use(function (req, res, next) {
  const err = new Error('Not found.');
  err.status = 404;
  next(err);
});

module.exports = router;
