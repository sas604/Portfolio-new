export default async (req, res) => {
  const nodemailer = require('nodemailer'); // eslint-disable-line global-require
  const validator = require('email-validator'); // eslint-disable-line global-require
  const mailData = req.body;

  if (mailData.honey) {
    res.status(418).json({ msg: 'Bip-boop' });
    return;
  }
  if (!validator.validate(mailData.email)) {
    res.status(400).json({ msg: 'You entered invalid email' });
    return;
  }

  if (!mailData.name || !mailData.message) {
    res.status(400).json({ msg: 'Please fill all required fields' });
    return;
  }
  const transporter = nodemailer.createTransport({
    host: 'smtppro.zoho.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  const mailToSender = {
    from: process.env.MAIL_USER,
    to: mailData.email,
    subject: `Thank You For Reaching Out`,
    text: `Hi ${mailData.name}, 
    Thank you for reaching out. I've got your message and will be in touch with you shortly.  
    
    Best regards 
    Aleksandr Tagunov 
    `,
    html: `<section><h2 style="text-transform: capitalize;">Hi ${mailData.name},</h2><p>Thank you for reaching out. I've got your message and will be in touch with you shortly.</p><p>Best regards,<br/>Aleksandr Tagunov</p><p style="color:#bababa;">This is an automatically generated email, please do not reply.<p></section>`,
  };
  const mailTome = {
    from: process.env.MAIL_USER,
    to: 'aleksandr@tagunov.dev',
    subject: `New form submission`,
    text: `${mailData.name} at ${mailData.email} just made a submission, 
    ${mailData.message}.  
    
    Best regards 
    Your Bot
    `,
    html: `<section><h2><span style="text-transform: capitalize;">${mailData.name}</span> just made a submission,</h2><p>Contact at ${mailData.email}</p>${mailData.message}.</span><p>Best regards,<br/>Your Bot</p><p style="color:#bababa;">This is an automatically generated email, please do not reply.<p></section>`,
  };

  const mailToSenderPromise = transporter.sendMail(mailToSender);
  const mailToMePromise = transporter.sendMail(mailTome);
  try {
    const [toMe, toSender] = await Promise.all([
      mailToMePromise,
      mailToSenderPromise,
    ]);
  } catch (err) {
    console.log(err);
    res.status(505).json({ msg: 'Something went wrong try again latter ' });
    return;
  }

  res.status(200).json({ msg: 'Your message was sent successfully.' });
};
