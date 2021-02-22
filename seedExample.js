const { green, red } = require('chalk');
const { db, Campus, Student } = require('./server/db');

const seed = async () => {
  try {
    await db.sync({ force: true });

    // seed your database here!
    const jcc = await Campus.create({
      name: 'Jakku Community College',
      imageUrl: '/images/campus-a.jpg',
      address: 'Reestkii, Jakku',
      description:
        'Rebuilt after the Battle of Jakku, JCC is the premier learning center for code scavengers.',
    });
    const aam = await Campus.create({
      name: 'Anchorhead A&M',
      imageUrl: '/images/campus-b.jpg',
      address: 'Anchorhead, Tatooine',
      description:
        'AAM is the galactic leader for research and advancement of code farming technologies and outdoor script production.',
    });
    const tcu = await Campus.create({
      name: 'Theed Capital University',
      imageUrl: '/images/campus-n.jpg',
      address: 'Theed, Naboo',
      description:
        "Located in Naboo's capital city, TCU offers some of the best higher order functional training in the sector.",
    });
    const csfa = await Campus.create({
      name: 'Corellian Security Force Academy',
      imageUrl: '/images/campus-m.jpg',
      address: 'Axial Park, Corellia',
      description:
        'CorSec Academy is the training facility for new Corellian recruits with an emphasis on SPA.',
    });
    const carida = await Campus.create({
      name: 'Carida Full Stack Academy',
      imageUrl: '/images/campus-e.jpg',
      address: 'Area 51, Carida',
      description:
        "Founded by the Imperial Academic Union, CFSA is the center for the Galactic Empire's API training.",
    });
    const wcu = await Campus.create({
      name: 'Wookiee Coding University',
      imageUrl: '/images/campus-f.jpg',
      address: 'G5-623, Kashyyyk',
      description:
        'Set in the unique biosphere of Wookiee Planet C, WU is a leading learning center for Javascript closures.',
    });
    const uos = await Campus.create({
      name: 'University of Sanbra',
      imageUrl: '/images/campus-g.jpg',
      address: 'O-17, Sanbra, Outer Rim Territories',
      description:
        'Renowned for its sentientologist programs, UoS is a great place to study elusive React-Redux concepts.',
    });
    const baa = await Campus.create({
      name: 'Bacrana AJAX Academy',
      imageUrl: '/images/campus-h.jpg',
      address: 'Tarok Center, Amma, Barcana, Brak Sector',
      description:
        'Originally developed by the Galactic Empire as an early training grounds for software engineers, BAjaxA is now a place to gain AJAX mastery.',
    });

    const tgu = await Campus.create({
      name: 'The Geonosia University',
      imageUrl: '/images/campus-t.jpg',
      address: 'XA-1077, Genosis, Arkanis Sector, Outer Rim Territories',
      description:
        "The Genosia University is what became of the talent that engineered the Death Star.  Today it's all about the PERN and MERN stacks.",
    });

    const tfc = await Campus.create({
      name: 'Tondatha Frontend College',
      imageUrl: '/images/campus-r.jpg',
      address: '110100100101, Agamar, Lahara Sector, Outer Rim Territories',
      description:
        'Founded after Agamar joined the New Republic, TFC is renowned for Frontend Developement.',
    });

    await Student.create({
      firstName: 'Ghost',
      lastName: 'Skywalker',
      email: 'gohstskywalker@gazoogle.glx',
      imageUrl: '/images/student-a.jpg',
      gpa: 3.7,
      campusId: jcc.id,
    });

    await Student.create({
      firstName: 'Benji',
      lastName: 'Kenobi',
      email: 'jediDog@chillmail.glx',
      imageUrl: '/images/student-d.jpg',
      gpa: 2.8,
      campusId: tcu.id,
    });

    await Student.create({
      firstName: 'Clieggius',
      lastName: 'Lars',
      email: 'cliegg4023@tatooine.glx',
      imageUrl: '/images/student-k.jpg',
      gpa: 3.3,
      campusId: uos.id,
    });

    await Student.create({
      firstName: 'CC',
      lastName: '9',
      email: '011010@droidmail.glx',
      imageUrl: '/images/student-e.jpg',
    });

    await Student.create({
      firstName: 'Ahseki',
      lastName: 'Tano',
      email: 'fulcrum@padawanmail.glx',
      imageUrl: '/images/student-i.jpg',
      gpa: 3.9,
      campusId: tcu.id,
    });

    await Student.create({
      firstName: 'Depa',
      lastName: 'Organa',
      email: 'dorgana@aldernonmsg.glx',
      imageUrl: '/images/student-r.jpg',
      gpa: 3.7,
      campusId: tgu.id,
    });

    await Student.create({
      firstName: 'Jan',
      lastName: 'Dodonna',
      email: 'jd90210@galacticrepublic.glx',
      imageUrl: '/images/student-j.jpg',
      gpa: 2.8,
      campusId: tcu.id,
    });

    await Student.create({
      firstName: 'Sanjaa',
      lastName: 'Starros',
      email: 'gotcha@bountyhunters.glx',
      imageUrl: '/images/student-h.jpg',
      gpa: 2.4,
      campusId: baa.id,
    });

    await Student.create({
      firstName: 'Bini',
      lastName: 'Djarin',
      email: 'bdjarin@mudhorn.glx',
      imageUrl: '/images/student-f.jpg',
      gpa: 4.0,
      campusId: uos.id,
    });

    await Student.create({
      firstName: '08',
      lastName: 'RD',
      email: 'oh-eight@droidmail.glx',
      imageUrl: '/images/student-b.jpg',
    });

    await Student.create({
      firstName: 'JJ',
      lastName: 'Binks',
      email: 'jjbinks22@naboomail.glx',
      imageUrl: '/images/student-g.jpg',
      gpa: 4.0,
      campusId: tcu.id,
    });

    await Student.create({
      firstName: 'Lucy',
      lastName: 'Naberrie',
      email: 'lucy@naberriemail.glx',
      imageUrl: '/images/student-q.jpg',
      gpa: 3.8,
      campusId: tfc.id,
    });

    await Student.create({
      firstName: 'Mew',
      lastName: 'Meowmeow',
      email: 'mmm@ninelives.glx',
      imageUrl: '/images/student-s.jpg',
      gpa: 1.9,
      campusId: baa.id,
    });

    await Student.create({
      firstName: 'Suz-Gon',
      lastName: 'Jinn',
      email: 'sgjinn4023@jedimail.glx',
      imageUrl: '/images/student-t.jpg',
      gpa: 3.6,
      campusId: uos.id,
    });

    await Student.create({
      firstName: 'Cal',
      lastName: 'Windux',
      email: 'calwindux22@gazogglemail.glx',
      imageUrl: '/images/student-v.jpg',
      gpa: 2.3,
      campusId: baa.id,
    });

    await Student.create({
      firstName: 'Taron',
      lastName: 'Onyo',
      email: 'qt-pie@imperialforce.glx',
      imageUrl: '/images/student-z.jpg',
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
