const express = require('express');
const cors = require('cors');
const sgMail = require('@sendgrid/mail');
var bodyParser = require('body-parser');

const app = express();

require('dotenv').config()

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());



// cron.schedule('* * * * *', () => {
  //     console.log('running a task every minute');
  //     sgMail.send(msg);
  // });
  
  app.use(express.static('public'));
  
  app.post('/api/sendmail', (req, res) => {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: 'zechnwhite@gmail.com',
    from: req.body.email,
    subject: 'happy birthday! :)',
    text: 'hello',
    html: '<p>hello</p>'
  };
  sgMail.send(msg)
  .then(res.send('hello'))
  .catch(err => {
    console.log(err)
  })
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
