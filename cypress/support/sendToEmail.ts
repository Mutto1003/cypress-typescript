import * as nodemailer from 'nodemailer';
import winston from 'winston';
import dotenv from "dotenv";
dotenv.config();

const logger = winston.createLogger({
    level: 'debug',
    format: winston.format.json(),
    transports: [new winston.transports.Console()]
});

// export const sendMail = async (from: string, to: string, subject: string, html: string) => {
//     console.log('Progress To Send Email')
//     const transporter = nodemailer.createTransport({
//         service: 'gmail',
//         host: 'smtp.gmail.com',
//         port: 587,
//         auth: {
//             user: 'panithan.bunrong@gmail.com',
//             pass: 'Panaithan1003'
//             // user: process.env.MAIL_USERNAME,
//             // pass: process.env.MAIL_PASSWORD
//         }
//     });

//     const mailOptions = {
//         from: 'your-email@gmail.com',
//         to: 'panithan.b@extend-os.com',
//         subject: 'Test Send Email',
//         html: 'html'
//     };

//     logger.info(`Sending mail to - ${to}`);
//     transporter.sendMail(mailOptions, (error, info)=> {
//         if (error) {
//             logger.error(error);
//         } else {
//             logger.info('Email sent: ' + info.response);
//         }
//     });
// }

// Create a transport for sending emails (replace with your email service's data)
const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: 'panithan.bunrong@gmail.com', // Your email address
        pass: 'wzxrqntkwtecfvdk', // Your password
        // qmhq hzid fdkz hklq
        // wzxr qntk wtec fvdk
    },
});

// Set email options
const mailOptions = {
    from: 'panithan.bunrong@gmail.com', // Sender
    to: 'panithan.bunrong@gmail.com', // Recipient
    subject: 'Email Subject', // Email subject
    text: 'This is a test email.'
    // html: yourHTMLContent, // Email HTML content
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.error('Email sending failed:', error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});

// npx ts-node cypress/support/sendToEmail.ts