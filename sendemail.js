// const sgMail = require('@sendgrid/mail');
// sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// const msg = {
//     to: 'zechnwhite@gmail.com',
//     from: 'zechnwhite@gmail.com',
//     subject: 'happy birthday! :)',
//     text: 'and easy to do anywhere, even with Node.js',
//     html: '<h2>Yee Haw!</h2><p><strong>Heroku scheduler could work well.</strong></p>',
// };
// const nomsg = {
//     to: 'zechnwhite@gmail.com',
//     from: 'zechnwhite@gmail.com',
//     subject: 'no emails sent from heroku today',
//     text: 'and easy to do anywhere, even with Node.js',
//     html: '<h2>No emails sent.</h2><p>no emails sent today.</p>',
// };

// cron.schedule('* * * * *', () => {
//     console.log('running a task every minute');
//     sgMail.send(msg);
// });
// sgMail.send(nomsg);