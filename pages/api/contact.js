export default (req, res) => {
  const nodemailer = require('nodemailer');
  const transporter = nodemailer.createTransport({
    host: 'smtp.mailersend.net',
    port: 587,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  // const mailData = {
  //   from: 'demo@demo.com',
  //   to: 'tagunovalexander@gmail.com',
  //   subject: `Message From me `,
  //   text: 'text',
  //   html: '<div><p>Some text</p></p></div>',
  // };
  // transporter.sendMail(mailData, function (err, info) {
  //   if (err) console.log(err);
  //   else console.log(info);
  // });
  res.status(200).json('your message has ben sent');
};
