'use strict';

var presalesConsultant = require('../index');

var name = process.env.BOT_NAME;
var token1 = "xoxb-89758486196-eSdVzArdHUjIdKQVgWC7Mi8G";


var presalesconsultant = new presalesConsultant({
    token: token1,
    name: name
});

presalesconsultant.run();
