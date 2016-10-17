'use strict';

var presalesConsultant = require('../index');

var token = 'xoxb-92040075648-B1KRv10g596JY90YLx2Dqyum';
var name = process.env.BOT_NAME;


var presalesconsultant = new presalesConsultant({
    token: token,
    name: name
});

presalesconsultant.run();
