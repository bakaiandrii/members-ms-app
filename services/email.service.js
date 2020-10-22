const mailer = require('nodemailer');
const EmailTemplates = require('email-templates');
const path = require('path');

const { appConfig } = require('../config');

const emailTemplates = new EmailTemplates({
  message: null,
  views: {
    root: path.join(process.cwd(), 'email-templates')
  }
});

const transporter = mailer.createTransport({
  service: 'gmail',
  auth: {
    user: appConfig.EMAIL,
    pass: appConfig.EMAIL_PASS
  }
});

class EmailService {
  async sendMail(userMail, resetURL) {
    try {
      const html = await emailTemplates.render('forgot-pass', {
        frontUrl: resetURL
      });
      const mailOptions = {
        from: 'NO REPLY ',
        to: userMail,
        subject: '[TEST APP FORGOT PASS]',
        html
      };
      return transporter.sendMail(mailOptions);

    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = new EmailService();
