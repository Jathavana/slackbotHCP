'use strict';

var presalesConsultant = require('../index');

var token = '';
var name = process.env.BOT_NAME;


var presalesconsultant = new presalesConsultant({
    token: token,
    name: name
});

presalesconsultant.run();
