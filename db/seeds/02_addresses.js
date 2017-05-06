exports.seed = function(knex) {
  return knex('adresses').truncate()
    .then(() => {
      return knex('adresses').insert([
        {
            id: 1,
            line_1: '894 Mireille Rue',
            line_2: '',
            city: 'Breitenbergview',
            zip: '17734'
        },{
            id: 2,
            line_1: '701 Pamela View'
            line_2: 'Apt 1001',
            city: 'West Reinholdstad',
            zip: '55179'
        },{
            id: 3,
            line_1: '30397 Kub Spring',
            line_2: 'Suite 407',
            city: 'West Sheila',
            zip: '45965'
        },
        {
            id: 4,
            line_1: '457 Unique Mills',
            line_2: '',
            city: 'Jaskolskibury',
            zip: '73648'
        },]);
    })
};
