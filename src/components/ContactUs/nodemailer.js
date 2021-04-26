var nodemailer = require('nodemailer');

const form = document.getElementById("contact-form");

const formEvent = form.addEventListener("submit", (e) => {
    e.preventDefault();
    let mail = new FormData(form);
    sendMail(mail);
});

const sendMail = (mail) => {
    fetch("http://localhost:3000/send", {
        method: "POST",
        body: mail
    })
    .then((res) => {
        return res.json();
    })
}

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