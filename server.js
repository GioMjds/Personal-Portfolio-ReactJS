import express from "express";
const router = express.Router();
import nodemailer from "nodemailer";
import cors from "cors";

const app = express();
app.use(cors());

app.use(express.json())
app.use("/", router)
app.listen(5000, () => console.log("Server Running"))

const contactEmail = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "giomjds@gmail.com",
        pass: "ybjltuzqusxdcets",
    }
})

contactEmail.verify((error) => {
    if (error) {
        console.log(error)
    } else {
        console.log('Ready to Send')
    }
})

router.post("/contact", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;
    const mail = {
        from: name,
        to: "giomjds@gmail.com",
        subject: "Contact Form Submission - Portfolio",
        html: `
            <p>Name: ${name}</p>
            <p>Email: ${email}</p>
            <p>Message: ${message}</p>
        `,
    };
    contactEmail.sendMail(mail, (error) => {
        if (error) {
            res.json({ status: "ERROR" });
        } else {
            res.json({ status: "Message Sent" });
        }
    });
});