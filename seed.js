const { green, red } = require('chalk');
const { db, Template, Order } = require('./server/db');
const front01 = require('./server/lob/html/thankyou01front');
const back01 = require('./server/lob/html/thankyou01back');
const front02 = require('./server/lob/html/thankyou02front');
const back02 = require('./server/lob/html/thankyou02back');
const front03 = require('./server/lob/html/thankyou03front');
const back03 = require('./server/lob/html/thankyou03back');
const front04 = require('./server/lob/html/thankyou04front');
const back04 = require('./server/lob/html/thankyou04back');
const front05 = require('./server/lob/html/thankyou05front');
const back05 = require('./server/lob/html/thankyou05back');
const front06 = require('./server/lob/html/thankyou06front');
const back06 = require('./server/lob/html/thankyou06back');

const seed = async () => {
  try {
    await db.sync({ force: true });

    // seed your database here!
    const violet = await Template.create({
      name: 'Royal Thanks',
      frontHTML: front01,
      backHTML: back01,
      frontImageURL: '/images/thankyou-01-front.png',
      backImageURL: '/images/thankyou-01-back.png',
      description:
        'Classy thank you note with purple accents on a marble counter.',
    });
    const coffee = await Template.create({
      name: 'Coffee Time',
      frontHTML: front02,
      backHTML: back02,
      frontImageURL: '/images/thankyou-02-front.png',
      backImageURL: '/images/thankyou-02-back.png',
      description: 'Tempting cappuccino with a grateful message in the froth.',
    });
    const purrfect = await Template.create({
      name: 'Purrfect Gratitude',
      frontHTML: front03,
      backHTML: back03,
      frontImageURL: '/images/thankyou-03-front.png',
      backImageURL: '/images/thankyou-03-back.png',
      description: 'Nothing says Thanks for helping MeOwt like a cat!',
    });
    const roses = await Template.create({
      name: 'Thankful Roses',
      frontHTML: front04,
      backHTML: back04,
      frontImageURL: '/images/thankyou-04-front.png',
      backImageURL: '/images/thankyou-04-back.png',
      description:
        'Express your appreciation with these beautiful orange roses.',
    });
    const meadow = await Template.create({
      name: 'Greatful Meadow',
      frontHTML: front05,
      backHTML: back05,
      frontImageURL: '/images/thankyou-05-front.png',
      backImageURL: '/images/thankyou-05-back.png',
      description: 'Bestow your thanks from this tranquil meadow.',
    });
    const neon = await Template.create({
      name: 'Neon Thanks',
      frontHTML: front06,
      backHTML: back06,
      frontImageURL: '/images/thankyou-06-front.png',
      backImageURL: '/images/thankyou-06-back.png',
      description: 'Express your thanks in these neon lights!',
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
      merge_variables_greeting: 'Hi George',
      merge_variables_message:
        "Thank you so much for your help writing that letter to England.  I can't believe how everybody insisted on signing it, but you!  P.S. I think Hancock is compensating for something.",
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
      merge_variables_greeting: 'Hi Tommy',
      merge_variables_message:
        'Thank you so much for bailing me out in Carpenter Hall last week.  Hancock was really getting under my skin! Let me know when you hear something back from England!',
      merge_variables_salutation: 'Sincerely,',
      merge_variables_fromName: 'GW',
      templateId: coffee.id,
    });
    await Order.create({
      to_name: 'Samuel Adams',
      to_address_line1: '229 Helmbright Dr',
      to_address_city: 'Gahanna',
      to_address_state: 'OH',
      to_address_zip: '43230',
      from_name: 'John Adams',
      from_address_line1: '8 Glen Eagles Rd',
      from_address_city: 'Washington',
      from_address_state: 'NJ',
      from_address_zip: '07882',
      merge_variables_greeting: 'Hey Cousin',
      merge_variables_message:
        "Just wanted to say thank you for the lager!  Unfortunately Hancock helped himself to it and now it's gone.  Can you send more?",
      merge_variables_salutation: 'Best,',
      merge_variables_fromName: 'Johnny',
      templateId: purrfect.id,
    });
    await Order.create({
      to_name: 'Benjamin Franklin',
      to_address_line1: '7141 Cresheim Rd',
      to_address_city: 'Philadelphia',
      to_address_state: 'PA',
      to_address_zip: '19119',
      from_name: 'Samuel Adams',
      from_address_line1: '229 Helmbright Dr',
      from_address_city: 'Gahanna',
      from_address_state: 'OH',
      from_address_zip: '43230',
      merge_variables_greeting: 'Ben',
      merge_variables_message:
        'Thanks for letting me borrow your hydrometer - made a huge difference in the last batch of ale.  Lord knows we needed after Hancock crashed the party.',
      merge_variables_salutation: 'Best Regards,',
      merge_variables_fromName: 'Sam',
      templateId: neon.id,
    });
    await Order.create({
      to_name: 'Dorothy Hancock',
      to_address_line1: '14 Allerton St',
      to_address_city: 'Brookline',
      to_address_state: 'MA',
      to_address_zip: '02445',
      from_name: 'Benjamin Franklin',
      from_address_line1: '7141 Cresheim Rd',
      from_address_city: 'Philadelphia',
      from_address_state: 'PA',
      from_address_zip: '19119',
      merge_variables_greeting: 'My Dearest Dorothy',
      merge_variables_message:
        "I really appreciated your warmth and hospitality last session. Desiring another rendezvous! Let's meet behind Carpenter Hall when John has the floor.",
      merge_variables_salutation: 'Hugs and Kisses,',
      merge_variables_fromName: 'Ben',
      templateId: roses.id,
    });
    await Order.create({
      to_name: 'Abigail Adams',
      to_address_line1: '8 Glen Eagles Rd',
      to_address_city: 'Washington',
      to_address_state: 'NJ',
      to_address_zip: '07882',
      from_name: 'Dorothy Hancock',
      from_address_line1: '14 Allerton St',
      from_address_city: 'Brookline',
      from_address_state: 'MA',
      from_address_zip: '02445',
      merge_variables_greeting: 'Dear Abby',
      merge_variables_message:
        'Thanks for your help keeping John busy.  He never suspected a thing!  Let me know how I can return the favor.',
      merge_variables_salutation: 'Much obliged!',
      merge_variables_fromName: 'DQH',
      templateId: meadow.id,
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
