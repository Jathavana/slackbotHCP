'use strict';

var presalesConsultant = require('../index');

var token = 'xoxb-89758486196-eSdVzArdHUjIdKQVgWC7Mi8G';
var name = process.env.BOT_NAME;


var presalesconsultant = new presalesConsultant({
    token: token,
    name: name
});

presalesconsultant.run();
