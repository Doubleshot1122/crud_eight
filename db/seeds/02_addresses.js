exports.seed = function(knex) {
  return knex('addresses').truncate()
    .then(() => {
      return knex('addresses').insert([
        {
            id: 1,
            line_1: '894 Mireille Rue',
            line_2: '',
            city: 'Breitenbergview',
            state: 'PA',
            zip: '17734'
        },{
            id: 2,
            line_1: '701 Pamela View',
            line_2: 'Apt 1001',
            city: 'West Reinholdstad',
            state: 'CA',
            zip: '55179'
        },{
            id: 3,
            line_1: '30397 Kub Spring',
            line_2: 'Suite 407',
            city: 'West Sheila',
            state: 'GA',
            zip: '45965'
        },
        {
            id: 4,
            line_1: '457 Unique Mills',
            line_2: '',
            city: 'Jaskolskibury',
            state: 'OH',
            zip: '73648'
        },]);
    })
};
