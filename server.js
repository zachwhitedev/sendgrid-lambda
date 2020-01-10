const express = require('express');
const cors = require('cors');
const sgMail = require('@sendgrid/mail');
var bodyParser = require('body-parser');

const app = express();

require('dotenv').config();

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.post('/api/sendmail', (req, res) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: 'zechnwhite@gmail.com',
    from: req.body.email,
    subject: 'A Message for Zach',
    text: req.body.message,
    html: `<h4 style="color: #5e9ca0;">Some moron messaged you and wrote:</h4><p>${req.body.message}</p>`
    // html: '<h1 style="color: #5e9ca0;">You can edit <span style="color: #2b2301;">this demo</span> text!</h1> <h2 style="color: #2e6c80;">This is a sample sub header for the email:</h2> <p>And here you will find a bunch of random words that mean nothing but at least you can put whatever you want here. Also Peter is a bitch.</p>'
  };
  sgMail.send(msg)
  .then(() => {
    res.json({ message: 'Message received.' });
  }
  )
  .catch(error => {
    res.json({ message: 'There was an error sending your email. Zach needs to rewire this so it actually works.' });
  })
  
});

if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server listening on port ${port}`));
