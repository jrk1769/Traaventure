var express = require('express');
var nodemailer = require('nodemailer');
var cors = require('cors');

const app = express();

app.post('/send', (req, res) => {
    console.log(req.body);
})


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'trip.traaventure@gmail.com',
        pass: 'Traa_8888'
    }
});

const mailoptions = {
    from: 'site.traaventure@gmail.com',
    to: 'trip.traaventure@gmail.com',
    subject: 'test mail',
    html: '<h1>this is a test mail.</h1>'
};

transporter.sendMail(mailoptions, function(err, info) {
    if(err)
        console.log(err)
    else
        console.log(info)
});