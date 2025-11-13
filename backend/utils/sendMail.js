const nodemailer = require("nodemailer");

const sendMail = async (options) => {
    // Check if SMTP credentials are provided
    if (!process.env.SMPT_MAIL || !process.env.SMPT_PASSWORD) {
        throw new Error("SMTP email or password is not configured in environment variables.");
    }

    // Configure transporter based on service type
    let transporterConfig;
    
    if (process.env.SMPT_SERVICE === "gmail") {
        // Gmail configuration
        transporterConfig = {
            service: "gmail",
            auth: {
                user: process.env.SMPT_MAIL,
                pass: process.env.SMPT_PASSWORD, // Must be an App Password if 2FA is enabled
            },
        };
    } else if (process.env.SMPT_HOST) {
        // Custom SMTP server configuration
        transporterConfig = {
            host: process.env.SMPT_HOST,
            port: parseInt(process.env.SMPT_PORT) || 587,
            secure: process.env.SMPT_PORT === "465", // true for 465, false for other ports
            auth: {
                user: process.env.SMPT_MAIL,
                pass: process.env.SMPT_PASSWORD,
            },
            tls: {
                rejectUnauthorized: false, // Allow self-signed certificates in development
            },
        };
    } else {
        throw new Error("SMTP configuration is incomplete. Please set SMPT_SERVICE or SMPT_HOST in environment variables.");
    }

    const transporter = nodemailer.createTransport(transporterConfig);

    // Verify connection configuration
    try {
        await transporter.verify();
    } catch (error) {
        throw new Error(`SMTP connection failed: ${error.message}. Please check your SMTP credentials and configuration.`);
    }

    const mailOptions = {
        from: process.env.SMPT_MAIL,
        to: options.email,
        subject: options.subject,
        text: options.message,
    };

    await transporter.sendMail(mailOptions);
};

module.exports = sendMail;