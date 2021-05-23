var express = require('express');
var nodemailer = require('nodemailer');
var cors = require('cors');

require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());

const port = 3001;
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        type: "OAuth2",
        user: process.env.EMAIL,
        pass: process.env.WORD,
        clientId: process.env.OAUTH_CLIENTID,
        clientSecret: process.env.OAUTH_CLIENT_SECRET,
        refreshToken: process.env.OAUTH_REFRESH_TOKEN,
    },
});

transporter.verify((err, success) => {
    err
        ? console.log(err)
        : console.log(`=== Server is ready to take messages: ${success} ===`);
});

app.post("/send", (req, res) => {
    let mailOptions = {
        from: `${req.body.values.email}`,
        to: process.env.EMAIL,
        subject: `Message from ${req.body.values.email}`,
        text: `${req.body.values.message}`,
    };

    transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
            res.json({
                status: "fail"
             });
            console.log("Error " + err);
        } else {
            console.log("Email sent successfully");
            res.json({ status: "Email Sent"} )
        }
    });
});



// app.use(cors());

// app.listen(4444, () => {
//     console.log("we are listening on 4444");
// })

// app.post('/send', (req, res) => {
//     console.log(req.body);
// })


// const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: 'trip.traaventure@gmail.com',
//         pass: 'Traa_8888'
//     }
// });

// const mailoptions = {
//     from: 'site.traaventure@gmail.com',
//     to: 'trip.traaventure@gmail.com',
//     subject: 'test mail',
//     html: '<h1>this is a test mail.</h1>'
// };

// transporter.sendMail(mailoptions, function(err, info) {
//     if(err)
//         console.log(err)
//     else
//         console.log(info)
// });