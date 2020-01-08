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
    subject: 'whats up',
    text: req.body.message,
    html:
      '<h1 style="color: #5e9ca0;">You can edit <span style="color: #2b2301;">this demo</span> text!</h1> <h2 style="color: #2e6c80;">How to use the editor:</h2> <p>Paste your documents in the visual editor on the left or your HTML code in the source editor in the right. <br />Edit any of the two areas and see the other changing in real time.&nbsp;</p><p>Click the <span style="background-color: #2b2301; color: #fff; display: inline-block; padding: 3px 10px; font-weight: bold; border-radius: 5px;">Clean</span> button to clean your source code.</p>'
  };
  sgMail.send(msg);
  res.json({ message: 'Message received.' });
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
