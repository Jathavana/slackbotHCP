'use strict';

var presalesConsultant = require('../index');

var token = 'xoxb-92040075648-cJaqR3Q6yHpnNaumELFMCMLC';
var name = process.env.BOT_NAME;


var presalesconsultant = new presalesConsultant({
    token: token,
    name: name
});

presalesconsultant.run();
