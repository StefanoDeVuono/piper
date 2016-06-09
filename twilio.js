const ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID;
const AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN;

var twilio = require('twilio');
var client = twilio(ACCOUNT_SID, AUTH_TOKEN);
var express = require('express');
var app = express();
var twiml = new twilio.TwimlResponse();

const alone =
`Dear Friend,
   I am not here to pick anyone up, or to be picked up. I am here alone, because I want to be here, ALONE.
   This card is not intended as part of an extended flirtation.
   Thank you for respecting my privacy.`;

const black =
`Dear Friend,
  I am black.
  I am sure you did not realize this wehn you made/laughed at/agreed with that racist remark. In the past I have attempted to alert white people to my racial identity in advance. Unfortunately, this invariabley cuases them to react to me as pushy, manipulative, or socially inappropriate. Therefore, my policy is to assume that white people do not make these remarks even when they believe there are no black people present, and to send you this text when they do.
  I regreat any discomfort my presence is causing you, just as I am sure you regret the discomfort your racism is causing me.`;

var responder = new twilio.TwimlResponse();

client.sendMessage({
  to: '+14153475539',
  from: '+17185579380',
  body: alone
}).then(function() {
  console.log()
}, function(error) {

});

app.get('/hello', function (req, res) {
  res.send('Hello World!');
});

app.post('/piper', function(req, res) {
  console.log('post piper');
  // client.sendMessage({
//   to: '+14153475539',
//   from: '+17185579380',
//   body: alone
// }

  // this stuff...
//   var twiml = new twilio.TwimlResponse();
//   twiml.message('response');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
