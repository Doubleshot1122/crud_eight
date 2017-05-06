exports.seed = function(knex) {
  return knex('contacts').truncate()
    .then(() => {
      return knex('contacts').insert([
        {
            first_name: 'Wilmer',
            last_name: 'Dicki',
            phone_number: '511-443-9513',
            email_address: 'Wilmer_Dicki44@gmail.com',
            image_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/irae/128.jpg',
            addresses_id: 1
        }, {
            first_name: 'Lauretta',
            last_name: 'Blick',
            phone_number: '451-864-5011',
            email_address: 'Lauretta.Blick11@yahoo.com',
            image_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/holdenweb/128.jpg',
            addresses_id: 2
        }, {
            first_name: 'Lenore',
            last_name: 'Dietrich',
            phone_number: '815-332-9415',
            email_address: 'Lenore36@gmail.com',
            image_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/creartinc/128.jpg',
            addresses_id: 3
        }, {
            first_name: 'Destany',
            last_name: 'Price',
            phone_number: '164-882-3398',
            email_address: 'Destany99@gmail.com',
            image_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/privetwagner/128.jpg',
            addresses_id: 3
        }, {
            first_name: 'Isabelle',
            last_name: 'Smitham',
            phone_number: '612-421-7316',
            email_address: 'Isabelle55@gmail.com',
            image_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/HenryHoffman/128.jpg',
            addresses_id: 4
        }]);
    })
};
