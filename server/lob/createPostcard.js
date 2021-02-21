'use strict';
// let response;
const fs = require('fs');

const lobFactory = require('./lib');
const Lob = new lobFactory('test_d9bd4c38596baf59f9607b5210730cd0a0c');

const cardFront = fs
  .readFileSync(`${__dirname}/html/cardFront.html`)
  .toString();
const cardBack = fs.readFileSync(`${__dirname}/html/cardBack.html`).toString();

async function lobFunc() {
  let response = null;
  await Lob.postcards.create(
    {
      description: 'Thank You',
      to: {
        name: 'Chris Armbruster',
        address_line1: '7590 Pelham Drive',
        address_line2: '',
        address_city: 'Chesterland',
        address_state: 'OH',
        address_zip: '44026',
      },
      from: {
        name: 'Melinda Armbruster',
        address_line1: '142 Lions Court',
        address_line2: '',
        address_city: 'Lake Zurich',
        address_state: 'IL',
        address_zip: '60047',
      },
      front: cardFront,
      back: cardBack,
      merge_variables: {
        name: 'Melinda',
        title: 'Zir',
        message: 'Sending you lots of love!',
      },
    },
    function (err, res) {
      response = res;
      // console.log(err, res.to.name);
    }
  );
  return response;
}

module.exports = lobFunc;
