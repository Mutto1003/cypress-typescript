import nodemailer from 'nodemailer';
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

export async function sendMail(v:string) {
    console.log(v)
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
                user: 'panithan.bunrong@gmail.com',
                pass: 'wzxr qntk wtec fvdk'
                // wzxr qntk wtec fvdk
                // qmhq hzid fdkz hklq
            }
        });

        // Example mail options
        const mailOptions = {
            from: 'panithan.bunrong@gmail.com',
            to: 'panithan.bunrong@gmail.com',
            subject: 'Test Email',
            text: 'This is a test email.'
        };

        // Send mail
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);

    } catch (error) {
        console.error('Error sending email:', error);
        throw error; // Rethrow the error to propagate it further if needed
    }
}