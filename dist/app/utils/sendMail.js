"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEMail = void 0;
//  send mail function
const nodemailer_1 = __importDefault(require("nodemailer"));
const config_1 = __importDefault(require("../../config"));
const sendEMail = async (fromEmail, toEmail, subject, html) => {
    const transporter = nodemailer_1.default.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: config_1.default.Email,
            pass: config_1.default.GmailAppPassword,
        },
    });
    const mailOptions = {
        from: fromEmail,
        to: toEmail,
        subject: subject,
        html: html,
    };
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        }
        else {
            console.log('Email sent: ' + info.response);
        }
    });
};
exports.sendEMail = sendEMail;
