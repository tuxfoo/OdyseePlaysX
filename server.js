const WebSocket = require('ws');
const keyHandler = require("./keyHandler.js");
const config = require("./config.js");
const socket = new WebSocket('wss://comments.lbry.com/api/v2/live-chat/subscribe?subscription_id=8d942740a95b8f212d5e6627a73a6e2943207eb9');

const commandRegex =
  config.regexCommands ||
  new RegExp("^(" + config.commands.join("|") + ")$", "i");

// Connection opened
// Alojz helped with websockets code
socket.addEventListener('open', function (event) {
    socket.send('Hello LBRY!');
});

// Listen for messages
socket.addEventListener('message', function (event) {
  var comment=JSON.parse(event.data);
  var message = comment.data.comment.comment;
  var userName = comment.data.comment.channel_name;
  var amount = comment.data.comment.support_amount
  //let isCorrectChannel = `#${config.channel}` === channel;
  let messageMatches = message.match(commandRegex);
  //if (self) return;


  if (messageMatches) {
    // print username and message to console
    console.log(userName + ':' + message);
    // send the message to the emulator
    keyHandler.sendKey(message.toLowerCase());   // Important
  }
});
