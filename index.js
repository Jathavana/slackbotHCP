
'use strict';

var util = require('util');
var path = require('path');
var fs = require('fs');
var Bot = require('slackbots');


var presalesConsultant = function Constructor(settings){
  this.settings = settings;
  this.settings.name = this.settings.name || 'presalesconsultant';
};

// inherits methods and properties from the Bot constructor
util.inherits(presalesConsultant, Bot);

module.exports = presalesConsultant;

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
  this.postMessageToChannel("hcp", 'Please enter one of the following solution coverage' +
  ' areas to ' + 'to see our listings' +
  'presales consultant to help enter:' +
  '\n All' +
  '\n Manager' +
  '\n Business Objects Cloud' +
  '\n Analytics' +
  '\n HCP' +
  '\n Hybris', {as_user: true});
};

presalesConsultant.prototype._onMessage = function (message) {
  if(!this._isFromMyself(message)
    && this._isChannelConversation(message)
    && this._isChatMessage(message))
  {
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

presalesConsultant.prototype._replyWithMessage = function (message) {
  var self = this;
  var reply = "I'm sorry that is not a valid entry";



  if (message.text.toLowerCase().indexOf('all') > - 1){
    reply = "Manager: Mike Duddy"
    reply = reply + "\n HCP: Jathavan Arumugam & Tyler Franks";
    reply = reply + "\n Hybris: Brydon Chan, Jennifer Baron, Lyndsay Tilston, Pablo Hennique";
    reply = reply + "\n Analytics: Michael Pereira, Kevin Lee";
    reply = reply + "\n Business objects Cloud: Garrett Buckley";
  }

  if (message.text.toLowerCase().indexOf('hcp') > - 1){
    reply = "Jathavan Arumugam & Tyler Franks";
  }

  if (message.text.toLowerCase().indexOf('Manager') > - 1){
    reply = "Mike Duddy";
  }

  if (message.text.toLowerCase().indexOf('hybris') > - 1){
    reply = "Brydon Chan, Jennifer Baron, Lyndsay Tilston, Pablo Hennique";
  }

  if (message.text.toLowerCase().indexOf('analytics') > - 1){
    reply = "Michael Pereira, Kevin Lee";
  }

  if (message.text.toLowerCase().indexOf('business objects cloud') > - 1){
    reply = "Garrett Buckley";
  }

  if (message.text.toLowerCase().indexOf('boc') > - 1){
    reply = "Garrett Buckley";
  }

  if (message.text.toLowerCase().indexOf('bleed') > - 1){
    reply = "yes";
  }

  var channel = self._getChannelById(message.channel);
  self.postMessageToChannel(channel.name, reply, {as_user: true});
};
