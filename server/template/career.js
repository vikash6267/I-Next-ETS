const careerEmail = (name, email, contact, message, applicationFor) => {
    return `<!DOCTYPE html>
    <html>
    
    <head>
        <meta charset="UTF-8">
        <title>Contact Form Confirmation</title>
        <style>
            body {
                background-color: #f4f4f4;
                font-family: Arial, sans-serif;
                font-size: 16px;
                color: #333333;
                margin: 0;
                padding: 0;
            }
    
            .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                text-align: center;
                background-color: #ffffff;
                border-radius: 10px;
                box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
            }
    
            .logo {
                max-width: 200px;
                margin-bottom: 20px;
            }
    
            .message {
                font-size: 24px;
                font-weight: bold;
                margin-bottom: 20px;
                color: #333333;
            }
    
            .body {
                font-size: 18px;
                margin-bottom: 20px;
                text-align: left;
                color: #666666;
            }
    
            .info {
                margin-bottom: 10px;
            }
    
            .info p {
                margin: 5px 0;
            }
    
            .highlight {
                font-weight: bold;
                color: #FFA500;
            }
    
            .cta {
                display: inline-block;
                padding: 10px 20px;
                background-color: #FFD60A;
                color: #000000;
                text-decoration: none;
                border-radius: 5px;
                font-size: 16px;
                font-weight: bold;
                margin-top: 20px;
            }
    
            .support {
                font-size: 14px;
                color: #999999;
                margin-top: 20px;
            }
        </style>
    
    </head>
    
    <body>
        <div class="container">
            <a href="http://localhost:5173"><img class="logo"
                    src="https://i.ibb.co/N608STN/inext-ets-logo.jpg" alt="I NEXT ETS"></a>
            <div class="message">New Contact Query</div>
            <div class="body">
                <p>Dear <span class="highlight">Sir</span>,</p>
                <div class="info">
                    <p>A application related to current opening</p>
                    <p><span class="highlight">Name:</span> ${name}</p>
                    <p><span class="highlight">Email:</span> ${email}</p>
                    <p><span class="highlight">Contact Number:</span> ${contact}</p>
                    <p><span class="highlight">Message:</span> ${message}</p>
                    <p><span class="highlight">Application For :</span> ${applicationFor}</p>
                </div>
            </div>
        </div>
    </body>
    
    </html>
    `;
};

module.exports = { careerEmail };

{/* <p><span class="highlight">Resume:</span> ${resume.originalname}</p> */ }

