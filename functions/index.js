// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');

// The Firebase Admin SDK to access the Firebase Realtime Database. 
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

const nodemailer = require('nodemailer');
const gmailEmail = encodeURIComponent(functions.config().gmail.email);
const gmailPassword = encodeURIComponent(functions.config().gmail.password);
const mailTransport = nodemailer.createTransport(`smtps://${gmailEmail}:${gmailPassword}@smtp.gmail.com`);
exports.sendContactMessage = functions.database.ref('/messages/{pushKey}').onWrite(event => {
  const snapshot = event.data;
// Only send email for new messages.
  if (snapshot.previous.val() || !snapshot.val().name) {
    return;
  }
  
  const val = snapshot.val();

  const mailOptions = {
    to: val.email,
    subject: 'Your message has been sent. Thank you.',
    text: `Your message content. \n 
          Subject: ${val.subject} \n 
          Sender's Name: ${val.name} \n
          Content: ${val.message}`
  };
  return mailTransport.sendMail(mailOptions).then(() => {
    return console.log('Mail sent'); //The log will be shown in Firebase.
  });
});

