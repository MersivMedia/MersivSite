require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(cors());

app.post('/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  // Create a transporter using SMTP
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", // Replace with your SMTP host if not using Gmail
    port: 587,
    secure: false, // Use TLS
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  try {
    // Send email
    let info = await transporter.sendMail({
      from: `"Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: "New Contact Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong> ${message}</p>`
    });

    console.log("Message sent: %s", info.messageId);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send('Error sending email');
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});