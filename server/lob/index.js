const Lob = require('lob')('test_d9bd4c38596baf59f9607b5210730cd0a0c');
const cardDetails = require('./cardDetails');

async function lobApiPostcard(cardDetails) {
  let lobResponse;
  await Lob.postcards.create(cardDetails, (err, res) => {
    //console.log(err, res);
    lobResponse = res;
  });
  return lobResponse;
}

module.exports = lobApiPostcard;
