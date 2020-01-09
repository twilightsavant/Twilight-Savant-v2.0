const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    console.log("FOUND ME");
    res.status(200).send("Found Me");
})

app.post('/api/form', (req, res) => {
    sendMail(req).catch(console.error);
    res.sendStatus(200);
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`Server listen on port ${PORT}`);
})

async function sendMail(req) {
    let transporter = nodemailer.createTransport({
        host: "smtpout.secureserver.net",
        port: 80,
        secure: false, // true for 465, false for other ports
        auth: {
          user: "pm@twilightsavant.com", 
          pass: "19Dolphin82!" 
        }
    });

    msg = `Email from Twilight Savant website:
    
    Name: ${req.body.name}
    Company: ${req.body.company}
    Phone: ${req.body.phone}
    Email: ${req.body.email}
    Msg: ${req.body.message}
    `;

    htmlMsg = `<h3>Email from Twilight Savant website:</h3>
    <ul>
        <li>Name: ${req.body.name}</li>
        <li>Company: ${req.body.company}</li>
        <li>Phone: ${req.body.phone}</li>
        <li>Email: ${req.body.email}</li>
        <li>Msg: ${req.body.message}</li>
    </ul>
    `;

    console.log(msg);

      // send mail with defined transport object
    let info = await transporter.sendMail({

        from: '"Website" <pm@twilightsavant.com>', // sender address
        to: "pm@twilightsavant.com", // list of receivers
        subject: "Twilight Savant Website", // Subject line
        text: msg, // plain text body
        html: htmlMsg // html body
    });
}

