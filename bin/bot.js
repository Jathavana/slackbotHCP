'use strict';

var presalesConsultant = require('../index');

var token = 'xoxb-92040075648-nJ23nqWgKaIPZP9Kj8yWWR01';
var name = process.env.BOT_NAME;


var presalesconsultant = new presalesConsultant({
    token: token,
    name: name
});

presalesconsultant.run();
