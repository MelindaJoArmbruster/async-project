const lobFunc = require('../lob/createPostcard');

// apiRoutes/puppies.js
const router = require('express').Router();

// matches GET requests to /api/puppies/
router.get('/', function (req, res, next) {
  /* etc */
});
// matches POST requests to /api/puppies/
router.post('/', async function (req, res, next) {
  const x = await lobFunc();
  res.send(x);

  /* etc */
});
// matches PUT requests to /api/puppies/:puppyId
router.put('/:puppyId', function (req, res, next) {
  /* etc */
});
// matches DELETE requests to /api/puppies/:puppyId
router.delete('/:puppyId', function (req, res, next) {
  /* etc */
});

module.exports = router;
