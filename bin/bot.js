'use strict';

var presalesConsultant = require('../index');

var token = 'xoxb-92040075648-y3hpHjOUnOY7czoWAU8Rqyke';
var name = process.env.BOT_NAME;


var presalesconsultant = new presalesConsultant({
    token: token,
    name: name
});

presalesconsultant.run();
