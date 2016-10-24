
'use strict';

var util = require('util');
var path = require('path');
var fs = require('fs');
var Bot = require('slackbots');
var http = require('http');



var presalesConsultant = function Constructor(settings){
  this.settings = settings;
  this.settings.name = this.settings.name || 'presalesconsultant';
};

// inherits methods and properties from the Bot constructor
util.inherits(presalesConsultant, Bot);

module.exports = presalesConsultant;
http.createServer(function (req, res) {
res.writeHead(200, { 'Content-Type': 'text/plain' });
res.send('it is running\n');
}).listen(process.env.PORT || 5000);

presalesConsultant.prototype.run = function (){
  presalesConsultant.super_.call(this, this.settings);

  this.on('start', this._onStart);
  this.on('message', this._onMessage);
};

presalesConsultant.prototype._onStart = function() {
  var self = this;
  this._loadBotUser();
  self._welcomeMessage();
  this.postMessageToChannel(this.channels[0].name, 'Welcome', {as_user: true});
};


presalesConsultant.prototype._loadBotUser = function() {
  var self = this;
  this.user = this.users.filter(function (user){
    return user.name === self.name;
  })[0];
};

presalesConsultant.prototype._welcomeMessage = function() {

  this.postMessageToChannel("hcp", "Hi, I'm here to help!" +
  ' Here are some sample commands:' +
  '\n Search Account Etherion' +
  '\n What are my top three opportunities' +
  '\n Search opportunity Big Deal' +
  '\n Help!', {as_user: true});
};




presalesConsultant.prototype._onMessage = function (message) {
  console.log("Ready to Recieve");
      if(this._isChatMessage(message)
      && this._isChannelConversation(message)
      && !this._isFromMyself(message)){
        console.log("Message Recieved");
        this._replyWithMessage(message);
      }
};

presalesConsultant.prototype._isFromMyself = function (message) {
    return message.user === this.user.id;
};

presalesConsultant.prototype._getChannelById = function (channelId) {
    return this.channels.filter(function (item) {
        return item.id === channelId;
    })[0];
};

presalesConsultant.prototype._isChannelConversation = function (message) {
    return typeof message.channel === 'string' &&
        message.channel[0] === 'C';
};

presalesConsultant.prototype._isChatMessage = function (message) {
    return message.type === 'message' && Boolean(message.text);
};

presalesConsultant.prototype._presales = function(message) {
  var self = this;
  var reply = "Result:";
  var attachments = {};
  if (message.text.toLowerCase().indexOf('all') > - 1){
    attachments = [{
      "fallback": "Required Fallback",
      "color:": "good",
      "pretext": "Management",
      "fields": [
        {
          "title": "Mike Duddy",
          "value": "Hana Cloud Platform Specialist"
        },
        {
          "title": "Phone",
          "value": "604-232-3334",
          "short": true
        },
        {
          "title": "Email",
          "value": "Mike.Duddy@sap.com",
          "short": true
        }]
      },

      {
          "color:": "#36A64F",
          "pretext": "Hana Cloud Platform",
          "fallback": "Required Fallback",
          "fields": [
            {
              "title": "Jathavan Arumugam",
              "value": "Hana Cloud Platform Specialist"
            },
            {
              "title": "Phone",
              "value": "604-221-2321",
              "short": true
            },
            {
              "title": "Email",
              "value": "Jathavan.Arumugam@sap.com",
              "short": true
            },
            {
              "title": "Tyler Franks",
              "value": "Hana Cloud Platform Specialist"
            },
            {
              "title": "Phone",
              "value": "480-333-7751",
              "short": true
            },
            {
              "title": "Email",
              "value": "Tyler.Franks@sap.com",
              "short": true
            }]
        },
        {
        "pretext": "Hybris",
        "color:": "good",
        "fallback": "Required Fallback",
        "fields": [
            {
              "title": "Brydon Chan",
              "value": "Hybris Commerce"
            },
            {
              "title": "Phone",
              "value": "604-454-8786",
              "short": true
            },
            {
              "title": "Email",
              "value": "Brydon.Chan@sap.com",
              "short": true
            },

            {
              "title": "Jennifer Baron",
              "value": "Hybris Retail"
            },
            {
              "title": "Phone",
              "value": "480-444-6565",
              "short": true
            },
            {
              "title": "Email",
              "value": "Jennifer.Baron@sap.com",
              "short": true
            },
            {
              "title": "Lyndsay Tilston",
              "value": "Hybris Marketing"
            },
            {
              "title": "Phone",
              "value": "604-665-7852",
              "short": true
            },
            {
              "title": "Email",
              "value": "Lyndsay.Tilston@sap.com",
              "short": true
            },

            {
              "title": "Pablo Hennique",
              "value": "Hybris"
            },
            {
              "title": "Phone",
              "value": "604-787-6652",
              "short": true
            },
            {
              "title": "Email",
              "value": "Pablo.Hennique@sap.com",
              "short": true
            }],
          },
            {
              "pretext": "Analytics",
              "fallback": "Required Fallback",
              "fields": [
            {
              "title": "Michael Pereira",
              "value": "Business Objects Analytics"
            },
            {
              "title": "Phone",
              "value": "604-883-4215",
              "short": true
            },
            {
              "title": "Email",
              "value": "Michael.Pereira@sap.com",
              "short": true
            },
            {
              "title": "Kevin Lee",
              "value": "Business Objects Analytics"
            },
            {
              "title": "Phone",
              "value": "604-343-3454",
              "short": true
            },
            {
              "title": "Email",
              "value": "Kevin.Lee@sap.com",
              "short": true
            },
            {
              "title": "Garett Buckley",
              "value": "Business Objects Cloud"
            },
            {
              "title": "Phone",
              "value": "604-234-8791",
              "short": true
            },
            {
              "title": "Email",
              "value": "Garrett.Buckley@sap.com",
              "short": true
            }
          ],
          "color:": "#36A64F"
      }]

  };


  if (message.text.toLowerCase().indexOf('hcp') > - 1){
    attachments = [{
      "fallback": "Required Fallback",
      "color:": "good",
      "pretext": "Hana Cloud Platform",
      "fields": [
        {
          "title": "Jathavan Arumugam",
          "value": "Hana Cloud Platform Specialist"
        },
        {
          "title": "Phone",
          "value": "604-221-2321",
          "short": true
        },
        {
          "title": "Email",
          "value": "Jathavan.Arumugam@sap.com",
          "short": true
        },
        {
          "title": "Tyler Franks",
          "value": "Hana Cloud Platform Specialist"
        },
        {
          "title": "Phone",
          "value": "480-333-7751",
          "short": true
        },
        {
          "title": "Email",
          "value": "Tyler.Franks@sap.com",
          "short": true
        }]
      }];
  }

  if (message.text.toLowerCase().indexOf('Manager') > - 1){
    attachments = [{
      "fallback": "Required Fallback",
      "color:": "good",
      "pretext": "Management",
      "fields": [
        {
          "title": "Mike Duddy",
          "value": "Hana Cloud Platform Specialist"
        },
        {
          "title": "Phone",
          "value": "604-232-3334",
          "short": true
        },
        {
          "title": "Email",
          "value": "Mike.Duddy@sap.com",
          "short": true
        }]
      }];
  }

  if (message.text.toLowerCase().indexOf('hybris') > - 1){
    attachments = [{
      "fallback": "Required Fallback",
      "color:": "good",
      "pretext": "Hybris",
      "fields": [
          {
            "title": "Brydon Chan",
            "value": "Hybris Commerce"
          },
          {
            "title": "Phone",
            "value": "604-454-8786",
            "short": true
          },
          {
            "title": "Email",
            "value": "Brydon.Chan@sap.com",
            "short": true
          },

          {
            "title": "Jennifer Baron",
            "value": "Hybris Retail"
          },
          {
            "title": "Phone",
            "value": "480-444-6565",
            "short": true
          },
          {
            "title": "Email",
            "value": "Jennifer.Baron@sap.com",
            "short": true
          },
          {
            "title": "Lyndsay Tilston",
            "value": "Hybris Marketing"
          },
          {
            "title": "Phone",
            "value": "604-665-7852",
            "short": true
          },
          {
            "title": "Email",
            "value": "Lyndsay.Tilston@sap.com",
            "short": true
          },

          {
            "title": "Pablo Hennique",
            "value": "Hybris"
          },
          {
            "title": "Phone",
            "value": "604-787-6652",
            "short": true
          },
          {
            "title": "Email",
            "value": "Pablo.Hennique@sap.com",
            "short": true
          }]
      }];

  }

  if (message.text.toLowerCase().indexOf('analytics') > - 1){
    attachments = [{
      "fallback": "Required Fallback",
      "color:": "good",
      "pretext": "Analytics",
      "fields": [
        {
          "title": "Michael Pereira",
          "value": "Business Objects Analytics"
        },
        {
          "title": "Phone",
          "value": "604-883-4215",
          "short": true
        },
        {
          "title": "Email",
          "value": "Michael.Pereira@sap.com",
          "short": true
        },
        {
          "title": "Kevin Lee",
          "value": "Business Objects Analytics"
        },
        {
          "title": "Phone",
          "value": "604-343-3454",
          "short": true
        },
        {
          "title": "Email",
          "value": "Kevin.Lee@sap.com",
          "short": true
        },
        {
          "title": "Garett Buckley",
          "value": "Business Objects Cloud"
        },
        {
          "title": "Phone",
          "value": "604-234-8791",
          "short": true
        },
        {
          "title": "Email",
          "value": "Garrett.Buckley@sap.com",
          "short": true
        }]
      }];
  }

  if (message.text.toLowerCase().indexOf('bleed') > - 1){
    reply = "yes";
  }

  var channel = self._getChannelById(message.channel);
  self.postMessageToChannel(channel.name, reply, {as_user: true, attachments: attachments});
}


presalesConsultant.prototype._replyWithMessage = function (message) {

  /**
  "Search account for Acme" or "Search Acme in accounts"
  "Search contact Lisa Smith"
  "Search opportunity big deal"

  What are my top three opportunities?
  Pipeline Report
  Deals closing quarter
  Win thing

  Presales
  **/
  var self = this;
  var reply = "I'm sorry that is not a valid entry";

  //Send to presales method
  if (message.text.toLowerCase().indexOf('presales') > -1){
    console.log("Why");
    self._presales(message);
  }

  //hcvar channel = self._getChannelById(message.channel);
  //self.postMessageToChannel(channel.name, reply, {as_user: true, color: "#36a64f"});
};
