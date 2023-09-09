import { IMailProvider, IMessage } from "../IMailProviders";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";
export class MailtrapMailProvider implements IMailProvider {
    private transporter: Mail;
    constructor() {
        this.transporter = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
                user: process.env.USERNAME_MAILTRAP,
                pass: process.env.PASSWORD_MAILTRAP
            }
        });
    }

    async sendMail(message: IMessage): Promise<void> {
        try {
            await this.transporter.sendMail({
                to: {
                    name: message.to.name,
                    address: message.to.email
                },
                from: {
                    name: message.from.name,
                    address: message.from.email
                },
                subject: message.subject,
                html: message.body
            });
        }
        catch (err) {
            throw new Error("Failed to send email in MailtrapMailProvider.");
        }
    }
}