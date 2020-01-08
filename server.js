const express = require('express');
var cron = require('node-cron');
const cors = require('cors');

const app = express();

require('dotenv').config()

app.use(express.json());
app.use(cors());

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const msg = {
  to: 'zechnwhite@gmail.com',
  from: 'zechnwhite@gmail.com',
  subject: 'happy birthday! :)',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<h2>Yee Haw!</h2><p><strong>Lick my love pump.</strong></p>'
};

// cron.schedule('* * * * *', () => {
//     console.log('running a task every minute');
//     sgMail.send(msg);
// });

app.use(express.static('public'));

app.get('/sendemail', (req, res) => {
  const thisMsg = {
    to: 'zechnwhite@gmail.com',
    from: 'zechnwhite@gmail.com',
    subject: 'happy birthday! :)',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<h2>Yee Haw!</h2><p><strong>Lick my love pump.</strong></p>'
  };
  sgMail.send(thisMsg);
});

if(process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server listening on port ${port}`));
