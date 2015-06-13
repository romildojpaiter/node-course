var express = require('express');
var nodemailer = require('nodemailer');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

router.post('/send', function(req, res, next) {
  var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'romildopaiter@gmail.com',
      pass: 'paiter2010$'
    }
  });
  
  var mainOption = { 
    from: 'Romildo Paiter <romildopaiter@gmail.com>',
    to: 'romildopaiter@gmail.com',
    subject: 'Website Submission',
    // text: 'You have a new submission with the following details...'
    //       + ' Name: ' + req.body.name
    //       + ' Email: ' + req.body.email,
    html:  '<p>You have a new submission with the following details</p>'
          + '<ul>'
          + ' <li>Name: ' + req.body.name + '</li>'
          + ' <li>Email: ' + req.body.email + '</li>'
          + ' <li>Message: ' + req.body.message + '</li>'
          + '</ul>'
  };
  
  transporter.sendMail(mainOption, function(error, info) {
    if(error){
      console.log(error);
      res.redirect('/');
    }else{
      console.log('Mensagem enviada: ' + info.response);
      res.redirect('/');
    }
  });
});

module.exports = router;
