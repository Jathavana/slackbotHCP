'use strict';

var presalesConsultant = require('../index');

var token = 'xoxb-89758486196-aByaz38reLuL1YOnHTujR22l';
var name = process.env.BOT_NAME;


var presalesconsultant = new presalesConsultant({
    token: token,
    name: name
});

presalesconsultant.run();
