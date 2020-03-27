
var Airtable = require('airtable');
var base = new Airtable({apiKey: 'key5vuAwN7QDIkNoL'}).base('appwBDqYGmupBl5CP');

export default ({ email }) => {
    base('Email List').create(
    {
        email
    }, 
    function(err, records) {
        if (err) {
            console.error(err);
            return;
        }
        records = JSON.parse(records);
        records.forEach(function (record) {
          console.log(record.getId());
        });
      });
}


