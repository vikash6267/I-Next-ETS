const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const fs = require('fs');

const app = express();

dotenv.config();

// Create uploads directory if it doesn't exist
const uploadsDir = 'uploads/resumes';
if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir, { recursive: true });
}

// middleware 
app.use(express.json());
app.use(cors());

// route 
app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Ha bhai chal rha hu!"
    })
})
app.use("/api/v1/user", require("./routes/contactRoute"));

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is running on port no ${PORT}`);
});
