/**
 * Created by prabhanjansk on 12/10/16.
 */
var mailer = {
    sendTestMail: function () {
        var nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
        var transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: 'prabtest108@gmail.com', // Your email id
                pass: 'prabhanjan' // Your password
            }
        });

// setup e-mail data with unicode symbols
        var mailOptions = {
            from: 'prabtest108@gmail.com', // sender address
            to: 'skprabhanjan@gmail.com', // list of receivers
            subject: 'Hello', // Subject line
            text: 'Hello world', // plaintext body
            html: '<b>Hello world 🐴</b>' // html body
        };

// send mail with defined transport object
        transporter.sendMail(mailOptions, function(error, info){
            if(error){
                return console.log(error);
            }
        });
    }
};

module.exports = mailer;
