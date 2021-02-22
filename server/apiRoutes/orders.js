const router = require('express').Router();
const { Template, Order } = require('../db');
const lobApiPostcard = require('../lob');

// matches POST requests to /api/orders/
//should this be taking in data
//from our form and creating a new order record in the orders table?
router.post('/', async function (req, res, next) {
  // try {
  //   res.status(201).send(await Order.create(req.body));
  // } catch (err) {
  //   next(err);
  // }
});

//matches GET req to /api/orders/:orderId
//Where do we pull the order info from the orders table and
//build up the object to send to Lob then call index.js to actually send it?
router.get('/:orderId', async (req, res, next) => {
  try {
    const order = await Order.findByPk(req.params.orderId, {
      //put this in post route except orderId
      //will come from the response from post
      include: [Template],
    });

    const cardDetails = {
      description: order.template.name,
      to: {
        name: order.to_name,
        address_line1: order.to_address_line1,
        address_line2: order.to_address_line2,
        address_city: order.to_address_city,
        address_state: order.to_address_state,
        address_zip: order.to_address_zip,
      },
      from: {
        name: order.from_name,
        address_line1: order.from_address_line1,
        address_line2: order.from_address_line2,
        address_city: order.from_address_city,
        address_state: order.from_address_state,
        address_zip: order.from_address_zip,
      },
      front: order.template.frontHTML,
      back: order.template.backHTML,
      merge_variables: {
        greeting: order.merge_variables_greeting,
        message: order.merge_variables_message,
        salutation: order.merge_variables_salutation,
        fromName: order.merge_variables_fromName,
      },
    };

    const lobApiResponse = await lobApiPostcard(cardDetails);

    res.send(lobApiResponse);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
