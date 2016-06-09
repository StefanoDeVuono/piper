const ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID;
const AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN;
const Helpers = require('./helpers');

var twilio = require('twilio');
var client = twilio(ACCOUNT_SID, AUTH_TOKEN);
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

var validate = function(req, success) {
  if (twilio.validateExpressRequest(req, AUTH_TOKEN)) {
    success();
  } else {
    res.status(403).send(Helpers.selectQuote());
  }
};

app.get('/hello', function (req, res) {
  res.send('Hello World!');
});

app.post('/piper', function(req, res) {
  validate(function() {
    console.log('post piper');
    var sms = req.body.Body;
    console.log(req.body.Body);
  });

  // client.sendMessage({
//   to: '+14153475539',
//   from: '+17185579380',
//   body: alone
// }
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
