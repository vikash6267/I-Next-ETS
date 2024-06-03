const fs = require('fs');
const multer = require('multer');
const path = require('path');
const { careerEmail } = require("../template/career");
const resumeSender = require("../utils/resumeSender");

// Configure multer for file upload
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/resumes');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage });

const careerCtrl = async (req, res) => {
    upload.single('resume')(req, res, async (err) => {
        if (err) {
            return res.status(500).send({
                message: "Error uploading resume",
                success: false
            });
        }

        const { name, email, contact, message, applicationFor } = req.body;
        const resume = req.file;

        if (!email || !name || !contact || !message || !resume || !applicationFor) {
            return res.status(400).send({
                message: "Please provide all fields",
                success: false
            });
        }

        try {
            // Read the resume file content
            const resumeContent = fs.readFileSync(resume.path);

            const emailRes = await resumeSender(
                "info.inextets@gmail.com",
                "New Career Form Submission",
                careerEmail(name, email, contact, message, applicationFor, resume),
                [{
                    filename: resume.originalname,
                    content: resumeContent
                }]
            );

            res.status(200).send({
                message: "Email sent successfully. Our team will contact you soon!",
                emailRes,
                success: true
            });
        } catch (error) {
            console.log(error);
            res.status(500).send({
                message: "Error in sending email",
            });
        }
    });
};

module.exports = { careerCtrl };
