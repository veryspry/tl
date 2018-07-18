const  { db, Day, Resource, Coffee, Music } = require('../server/db')

const seed = async () => {

  await db.sync({
    force: true,
    logging: console.log
  })

  // days
  const day1 = await Day.create({
    // date: 2018-06-17 00:00:00.000-05,
    // date: new Date('1995-12-17T03:24:00'),
    month: 'July',
    day: '20',
    year: '2018',
    focus:'Today I worked on Wes Montegomery\s "Four On Six." For anyone not familiar with the song, most of it is centered around G minor. I was having trouble playing over the series of ii V I\'s, so I worked on playing smoothly over that. On a web development note, I worked on getting an express to properly parse the request body to handle incoming json.'
  })
  const day2 = await Day.create({
    // date: 2018-06-18 00:00:00.000-05,
    // date: new Date('1995-12-17T03:24:00'),
    month: 'July',
    day: '20',
    year: '2018',
    focus: 'Today, I learned all about JavaScript promises and asynchronicity. I also worked on West Coast Blues by Wes Montegomery. Implementing the bebop-ish concepts that I\'ve been working on in 3/4 was hard & definitely needs more work.'
  })
  const day3 = await Day.create({
    // date: 2018-06-19 00:00:00.000-05,
    // date: new Date('1995-12-17T03:24:00'),
    month: 'July',
    day: '20',
    year: '2018',
    focus: 'Today I brushed up on incorporating Sequelize into an Express.js application and how Express apps tie together on the back end.'
  })

  // resources
  const res1 = await Resource.create({
    name: 'Dammnit webpack!',
    resourceUrl: 'https://www.innovativesynthesis.com/basic-synthesis-part-1-%E2%80%93-oscillators/',
    dayId: day1.id
  })


  const resource1 = await Resource.create({
    name: 'A really great breakdown of how musical synthesis works',
    resourceUrl: 'https://www.innovativesynthesis.com/basic-synthesis-part-1-%E2%80%93-oscillators/',
    dayId: day1.id
  })
  // console.log('------------------- My resource: ',resource1);
  const resource2 = await Resource.create({
    name: 'how to be a baller',
    resourceUrl: 'https://google.com',
    dayId: day2.id
  })
  const resource3 = await Resource.create({
    name: 'A really great breakdown of how musical synthesis works',
    resourceUrl: 'https://www.innovativesynthesis.com/basic-synthesis-part-1-%E2%80%93-oscillators/',
    dayId: day3.id
  })

  // Coffee
  const coffee1 = await Coffee.create({
    name: 'Rwanda Nyarusiza',
    roaster: 'Metropolis',
    dayId: day1.id
  })
  const coffee2 = await Coffee.create({
    name: 'Guatemala San Isidro',
    roaster: 'Metropolis',
    dayId: day1.id
  })
  const coffee3 = await Coffee.create({
    name: 'Ethiopia Deri Kochoha',
    roaster: 'Archetype',
    dayId: day1.id
  })
  const coffee4 = await Coffee.create({
    name: 'Guatemala San Isidro',
    roaster: 'Metropolis',
    dayId: day2.id
  })
  const coffee5 = await Coffee.create({
    name: 'Guatemala San Isidro',
    roaster: 'Metropolis',
    dayId: day3.id
  })

  // music
  const music1 = await Music.create({
    album: 'The Incredible Jazz Guitar Of Wes Montegomery',
    song: null,
    artist: 'Wes Montegomery',
    dayId: day1.id
  })
  const music2 = await Music.create({
    album: 'Hail To The Thief',
    song: null,
    artist: 'Radiohead',
    dayId: day2.id
  })
  const music3 = await Music.create({
      album: 'The Rise And Fall Of Ziggy Stardust And The Spiders From Mars',
      song: null,
      artist: 'David Bowie',
      dayId: day3.id
  })
  const music4 = await  Music.create({
      album: 'Space Oddity',
      song: null,
      artist: 'David Bowie',
      dayId: day3.id
  })

  // const days = {
  //   day1: day1,
  //   day2: day2,
  //   day3: day3
  // }
  //
  // const resources = {
  //   resource1: resource1,
  //   resource2: resource2,
  //   resource3: resource3
  // }
  //
  // const coffee = {
  //   coffee1: coffee1,
  //   coffee2: coffee2,
  //   coffee3: coffee3,
  //   coffee4: coffee4,
  //   coffee5: coffee5
  // }
  //
  // const music = {
  //   music1: music1,
  //   music2: music2,
  //   music3: music3,
  //   music4: music4
  // }

  db.close()
  console.log(`

    Seeding successful!
    You're timeline is a timeline! or something!

  `)
}

seed().catch(err => {
  db.close()
  console.log(`

    Error seeding:

    ${err.message}

    ${err.stack}

  `)
})
