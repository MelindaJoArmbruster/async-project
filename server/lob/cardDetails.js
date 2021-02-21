const front = require('./html/front');
const back = require('./html/back');

const cardDetails = {
  description: 'Thank You',
  to: {
    name: 'MJ Armbruster',
    address_line1: '7590 Pelham Drive',
    address_line2: '',
    address_city: 'Chesterland',
    address_state: 'OH',
    address_zip: '44026',
  },
  from: {
    name: 'Expounder',
    address_line1: '142 Lions Court',
    address_line2: '',
    address_city: 'Lake Zurich',
    address_state: 'IL',
    address_zip: '60047',
  },
  front: front,
  back: back,
  merge_variables: {
    name: 'Melinda',
    title: 'Mrs.',
  },
};

module.exports = cardDetails;
