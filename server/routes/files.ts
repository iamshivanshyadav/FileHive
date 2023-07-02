import express from 'express';
import multer from 'multer';
import { UploadApiResponse, v2 as cloudinary } from 'cloudinary';
import File from '../models/File';
import https from 'https';
import nodemailer from 'nodemailer';
import createEmailTemplate from '../utils/createEmailTemplate';

const router = express.Router();
const storage = multer.diskStorage({});

let upload = multer({
    storage
});

router.post("/upload", async (req, res) => {
    try {
        upload.single("myFile")(req, res, async (err: any) => {
            if (err) {
                return res.status(400).json({ message: "Hey bro! We need the file" });
            }

            if (!req.file) {
                return res.status(400).json({ message: "Hey bro! We need the file" });
            }

            console.log(req.file);
            let uploadedFile: UploadApiResponse;

            try {
                uploadedFile = await cloudinary.uploader.upload(req.file.path, {
                    folder: "sharefile",
                    resource_type: "auto",
                });
            } catch (error) {
                let errorMessage = "Cloudinary error";
                if (error instanceof Error) {
                    errorMessage = error.message;
                }
                console.log(errorMessage);
                return res.status(400).json({ message: "Cloudinary error" });
            }

            const { originalname } = req.file;
            const { secure_url, bytes, format } = uploadedFile;
            const file = await File.create({
                filename: originalname,
                sizeInBytes: bytes,
                secure_url,
                format,
            });
            res.status(200).json({
                id: file._id,
                downloadPageLink:`${process.env.API_BASE_ENDPOINT_CLIENT}download/${file._id}`,});
        });
    } catch (error) {
        let errorMessage = "Server Error :(";
        if (error instanceof Error) {
            errorMessage = error.message;
        }
        console.log(errorMessage);
        res.status(500).json({ message: "Server Error :(" });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const file = await File.findById(id);
        if (!file) {
            return res.status(404).json({ message: "File does not exist" });
        }
        const { filename, format, sizeInBytes } = file;
        return res.status(200).json({
            name: filename,
            sizeInBytes,
            format,
            id
        })
    } catch (error) {
        return res.status(500).json({ message: "Server Error" });
    }
});
router.get("/:id/download", async (req, res) => {
    try {
        const id = req.params.id;
        const file = await File.findById(id);
        if (!file) {
            return res.status(404).json({ message: "File does not exist" });
        }
        https.get(file.secure_url, (fileStream) => fileStream.pipe(res));
        
    } catch (error) {
        return res.status(500).json({ message: "Server Error" });
    }


    
});

router.post("/email", async (req, res) => {
    //?1. validate request

    const { id, emailFrom, emailTo } = req.body;
    //? 2. check if the file exists
    const file = await File.findById(id);
    if (!file) { 
        return res.status(404).json({ message: "File does not exist." });
    }

    //? 3. create transporter
    const connection = {
  host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        password: process.env.SMTP_PASS,
  username: process.env.SMTP_USER,

}
    
        const transporter = nodemailer.createTransport({
     
    host: connection.host,
    port:connection.port,
    secure: false, 
    auth: {
      user: connection.username, 
      pass:connection.password,
    },
        });
    
    //? 4. prepare the email data

    const { filename, sizeInBytes } = file;

    const fileSize = `${(Number(sizeInBytes) / (1024 * 1024)).toFixed(2)} MB`;
    const downloadPageLink = `${process.env.API_BASE_ENDPOINT_CLIENT}download/${file._id}`;

    const mailOptions = {
        from: emailFrom, // sender address
        to: emailTo, // list of receivers
        subject: "File shared with you", // Subject line
        text: `${emailFrom} shared a file with you`, // plain text body
        html: createEmailTemplate(emailFrom, downloadPageLink, filename,fileSize),
    };

   transporter.sendMail(mailOptions, async (error, info) => {
       if (error) {
           console.log(error);
           return res.status(500).json({
               message: "Server Error"
           });
       }
       

       file.sender = emailFrom;
       file.reciever = emailTo;
       
       await file.save();
       return res.status(200).json({
           message:"Email Sent",
       })
    })
})


export default router;
