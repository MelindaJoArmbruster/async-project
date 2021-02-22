const { green, red } = require('chalk');
const { db, Template, Order } = require('./server/db');
const front01 = require('./server/lob/html/thankyou01front');
const back01 = require('./server/lob/html/thankyou01back');
const front02 = require('./server/lob/html/thankyou02front');
const back02 = require('./server/lob/html/thankyou02back');

const seed = async () => {
  try {
    await db.sync({ force: true });

    // seed your database here!
    const violet = await Template.create({
      name: 'Violets',
      frontHTML: front01,
      backHTML: back01,
      frontImageURL: '/public/images/thankyou-01-front.png',
      backImageURL: '/public/images/thankyou-01-back.png',
      description: 'Classy violet thank you on marble counter',
    });
    const coffee = await Template.create({
      name: 'Coffee Time',
      frontHTML: front02,
      backHTML: back02,
      frontImageURL: '/public/images/thankyou-02-front.png',
      backImageURL: '/public/images/thankyou-02-back.png',
      description: 'Frothy cappuccino with message',
    });

    await Order.create({
      to_name: 'George Washington',
      to_address_line1: '7590 Pelham Dr',
      to_address_city: 'Chesterland',
      to_address_state: 'OH',
      to_address_zip: '44026',
      from_name: 'Thomas Jefferson',
      from_address_line1: '142 Lions Ct',
      from_address_city: 'Lake Zurich',
      from_address_state: 'IL',
      from_address_zip: '60047',
      merge_variables_greeting: 'Hi George!',
      merge_variables_message:
        "Thank you so much for your help writing that letter to England.  I can't believe how everybody insisted on signing it!  I must assume Hancock is compensating for something.",
      merge_variables_salutation: 'Best Regards,',
      merge_variables_fromName: 'Tommy',
      templateId: violet.id,
    });
    await Order.create({
      to_name: 'Thomas Jefferson',
      to_address_line1: '142 Lions Ct',
      to_address_city: 'Lake Zurich',
      to_address_state: 'IL',
      to_address_zip: '60047',
      from_name: 'George Washington',
      from_address_line1: '7590 Pelham Dr',
      from_address_city: 'Chesterland',
      from_address_state: 'OH',
      from_address_zip: '44026',
      merge_variables_greeting: 'Hi Tommy,',
      merge_variables_message:
        'Thank you so much for bailing me out in Carpenter Hall last week.  Hancock was really getting under my skin! Let me know when you hear something back from England!',
      merge_variables_salutation: 'Sincerely,',
      merge_variables_fromName: 'GW',
      templateId: coffee.id,
    });
  } catch (err) {
    console.log(red(err));
  }
};

module.exports = seed;
// If this module is being required from another module, then we just export the
// function, to be used as necessary. But it will run right away if the module
// is executed directly (e.g. `node seed.js` or `npm run seed`)
if (require.main === module) {
  seed()
    .then(() => {
      console.log(green('Seeding success!'));
      db.close();
    })
    .catch((err) => {
      console.error(red('Oh noes! Something went wrong!'));
      console.error(err);
      db.close();
    });
}
