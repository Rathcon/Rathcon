import nodemailer from 'nodemailer';

// Email configuration with better production handling
const createTransporter = () => {
  // Check if we're in production and have proper credentials
  const emailUser = process.env.EMAIL_USER;
  const emailPass = process.env.EMAIL_PASS;
  
  if (!emailUser || !emailPass) {
    console.error('Email configuration missing: EMAIL_USER or EMAIL_PASS not set');
    return null;
  }

  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: emailUser,
      pass: emailPass,
    },
  });
};

// Email templates
const createContactFormEmail = (data: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) => {
  return {
    subject: `New Contact Form Submission: ${data.subject}`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Form Submission</title>
        <style>
          body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #f4f4f4; }
          .container { max-width: 600px; margin: 20px auto; background: white; border-radius: 15px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.1); }
          .header { background: linear-gradient(135deg, #E3B133 0%, #B8860B 100%); color: white; padding: 40px 30px; text-align: center; }
          .header h1 { margin: 0; font-size: 32px; font-weight: 700; }
          .header p { margin: 10px 0 0 0; font-size: 18px; opacity: 0.9; }
          .logo { max-width: 80px; height: auto; margin-bottom: 15px; }
          .content { padding: 40px 30px; }
          .field { margin-bottom: 25px; }
          .label { font-weight: 600; color: #E3B133; font-size: 16px; margin-bottom: 8px; display: block; }
          .value { background: #f8f9fa; padding: 20px; border-radius: 8px; border-left: 5px solid #E3B133; font-size: 15px; line-height: 1.5; }
          .urgent { background: #fff3cd; border-left-color: #ffc107; }
          .footer { text-align: center; margin-top: 40px; padding-top: 30px; border-top: 1px solid #eee; color: #666; font-size: 14px; }
          .action-btn { display: inline-block; background: #E3B133; color: white; padding: 12px 25px; text-decoration: none; border-radius: 25px; margin: 10px 5px; font-weight: 600; transition: all 0.3s ease; }
          .action-btn:hover { background: #B8860B; transform: translateY(-2px); }
          .timestamp { background: #e9ecef; padding: 15px; border-radius: 8px; margin-top: 20px; text-align: center; font-size: 14px; color: #495057; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <img src="cid:logo" alt="Rathcon Construction Logo" class="logo" />
        
            <p>New Contact Form Submission</p>
          </div>
          <div class="content">
            <div style="background: #d4edda; border: 1px solid #c3e6cb; border-radius: 8px; padding: 15px; margin-bottom: 25px; color: #155724;">
              <strong>📧 New Inquiry Received!</strong> A potential client has submitted a contact form. Please respond within 24 hours.
            </div>
            
            <div class="field">
              <span class="label">👤 Client Name:</span>
              <div class="value">${data.name}</div>
            </div>
            <div class="field">
              <span class="label">📧 Email Address:</span>
              <div class="value">${data.email}</div>
            </div>
            <div class="field">
              <span class="label">📝 Subject:</span>
              <div class="value">${data.subject}</div>
            </div>
            <div class="field">
              <span class="label">💬 Message:</span>
              <div class="value">${data.message.replace(/\n/g, '<br>')}</div>
            </div>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="mailto:${data.email}?subject=Re: ${data.subject}" class="action-btn">📧 Reply to Client</a>
              <a href="tel:8928551747" class="action-btn">📞 Call Client</a>
            </div>
            
            <div class="timestamp">
              <strong>📅 Submitted:</strong> ${new Date().toLocaleString('en-IN', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })}
            </div>
            
            <div class="footer">
              <p>This email was automatically generated from your website contact form.</p>
              <p>© 2025 Rathcon Construction Private Limited. All rights reserved.</p>
            </div>
          </div>
        </div>
      </body>
      </html>
    `,
  };
};

const createAutoResponseEmail = (data: {
  name: string;
  email: string;
  subject: string;
}) => {
  return {
    subject: `Thank you for contacting Rathcon Construction - We'll be in touch soon!`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Thank you for contacting us</title>
        <style>
          body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #f4f4f4; }
          .container { max-width: 600px; margin: 20px auto; background: white; border-radius: 15px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.1); }

          .logo { max-width: 80px; height: auto; margin-bottom: 15px; }
          .content { padding: 40px 30px; }
          .message { background: #f8f9fa; padding: 25px; border-radius: 10px; margin: 25px 0; border-left: 5px solid #E3B133; }
          .contact-info { background: linear-gradient(135deg, #E3B133 0%, #B8860B 100%); color: white; padding: 25px; border-radius: 10px; margin: 25px 0; }
          .footer { text-align: center; margin-top: 40px; padding-top: 30px; border-top: 1px solid #eee; color: #666; font-size: 14px; }
          .button { display: inline-block; background: #E3B133; color: white; padding: 15px 30px; text-decoration: none; border-radius: 25px; margin: 15px 10px; font-weight: 600; transition: all 0.3s ease; }
          .button:hover { background: #B8860B; transform: translateY(-2px); }
          .highlight { background: #fff3cd; border: 1px solid #ffeaa7; border-radius: 8px; padding: 20px; margin: 20px 0; }
          .services { background: #e8f5e8; border-radius: 8px; padding: 20px; margin: 20px 0; }
          .services ul { margin: 0; padding-left: 20px; }
          .services li { margin: 8px 0; }
          .timestamp { background: #e9ecef; padding: 15px; border-radius: 8px; margin-top: 20px; text-align: center; font-size: 14px; color: #495057; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <img src="cid:logo" alt="Rathcon Construction Logo" class="logo" />
            <p style="margin: 10px 0 0 0; font-size: 18px; opacity: 0.9;">Construction Excellence</p>
          </div>
          <div class="content">
            <div class="message">
              <h2 style="color: #E3B133; margin-top: 0;">Dear ${data.name},</h2>
              <p>Thank you for reaching out to <strong>Rathcon Construction Private Limited</strong>! We have successfully received your message regarding <strong>"${data.subject}"</strong> and appreciate your interest in our services.</p>
              
              <div class="highlight">
                <strong>📧 Confirmation Received!</strong><br>
                Your inquiry has been submitted successfully and is now in our system.
              </div>
              
              <p><strong>What happens next?</strong></p>
              <ul>
                <li>✅ Your message has been received and logged</li>
                <li>⏰ Our team will review your inquiry within 24-48 hours</li>
                <li>📞 You'll receive a detailed response and quote</li>
                <li>🤝 We'll schedule a consultation if needed</li>
              </ul>
            </div>
            
            <div class="services">
              <h3 style="color: #E3B133; margin-top: 0;">🏠 Our Services Include:</h3>
              <ul>
                <li>🏗️ <strong>Residential Construction</strong> - Custom homes and apartments</li>
                <li>🏢 <strong>Commercial Construction</strong> - Office buildings and retail spaces</li>
                <li>🎨 <strong>Interior Design & Finishing</strong> - Beautiful interiors</li>
                <li>🔨 <strong>Renovations & Remodeling</strong> - Transform existing spaces</li>
                <li>🧱 <strong>Tile Installation & Fitting</strong> - Professional tiling work</li>
                <li>💎 <strong>Granite & Marble Work</strong> - Premium stone installation</li>
                <li>🏗️ <strong>Civil Works & Finishing</strong> - Complete construction solutions</li>
              </ul>
            </div>
            
            <div class="contact-info">
              <h3 style="margin-top: 0; color: white;">📞 Our Contact Information</h3>
              <p style="margin: 5px 0;"><strong>🏢 Address:</strong><br>
              RATHCON CONSTRUCTION PRIVATE LIMITED<br>
              JAI BHIM NAGAR 2, NR. HANUMAN MANDIR<br>
              THANE KALWA, THANE-400605<br>
              MAHARASHTRA</p>
              <p style="margin: 5px 0;"><strong>📱 Phone:</strong> <a href="tel:8928551747" style="color: white;">8928551747</a></p>
              <p style="margin: 5px 0;"><strong>📧 Email:</strong> <a href="mailto:contact@rathconconstructions.com" style="color: white;">contact@rathconconstructions.com</a></p>
            </div>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="https://www.rathconconstruction.com" class="button">🌐 Visit Our Website</a>
              <a href="tel:8928551747" class="button">📞 Call Us Now</a>
            </div>
            
            <div class="timestamp">
              <strong>📅 Submitted:</strong> ${new Date().toLocaleString('en-IN', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })}
            </div>
            
            <div class="footer">
              <p>This is an automated confirmation email. Please do not reply to this email.</p>
              <p>© 2025 Rathcon Construction Private Limited. All rights reserved.</p>
            </div>
          </div>
        </div>
      </body>
      </html>
    `,
  };
};

// Email sending functions
export const sendContactFormEmail = async (data: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) => {
  try {
    const transporter = createTransporter();
    if (!transporter) {
      console.error('Email transporter not configured - missing environment variables');
      return { success: false, error: 'Email service not configured' };
    }

    // Send email to company
    const companyEmail = createContactFormEmail(data);
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'contact@rathconconstructions.com',
      ...companyEmail,
      attachments: [
        {
          filename: 'logo.png',
          path: './public/logo.png',
          cid: 'logo'
        }
      ]
    });

    // Send auto-response to customer
    const autoResponse = createAutoResponseEmail(data);
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: data.email,
      ...autoResponse,
      attachments: [
        {
          filename: 'logo.png',
          path: './public/logo.png',
          cid: 'logo'
        }
      ]
    });

    return { success: true };
  } catch (error) {
    console.error('Email sending failed:', error);
    return { success: false, error: error.message };
  }
};

export const sendQuoteRequestEmail = async (data: {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  projectDetails: string;
  budget: string;
  timeline: string;
}) => {
  try {
    const transporter = createTransporter();
    if (!transporter) {
      console.error('Email transporter not configured - missing environment variables');
      return { success: false, error: 'Email service not configured' };
    }

    const quoteEmail = {
      subject: `New Quote Request: ${data.projectType}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Quote Request</title>
          <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #f4f4f4; }
            .container { max-width: 600px; margin: 20px auto; background: white; border-radius: 15px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.1); }
            .header { background: linear-gradient(135deg, #E3B133 0%, #B8860B 100%); color: white; padding: 40px 30px; text-align: center; }
            .logo { max-width: 80px; height: auto; margin-bottom: 15px; }
            .content { padding: 40px 30px; }
            .field { margin-bottom: 25px; }
            .label { font-weight: 600; color: #E3B133; font-size: 16px; margin-bottom: 8px; display: block; }
            .value { background: #f8f9fa; padding: 20px; border-radius: 8px; border-left: 5px solid #E3B133; font-size: 15px; line-height: 1.5; }
            .footer { text-align: center; margin-top: 40px; padding-top: 30px; border-top: 1px solid #eee; color: #666; font-size: 14px; }
            .action-btn { display: inline-block; background: #E3B133; color: white; padding: 12px 25px; text-decoration: none; border-radius: 25px; margin: 10px 5px; font-weight: 600; transition: all 0.3s ease; }
            .action-btn:hover { background: #B8860B; transform: translateY(-2px); }
            .timestamp { background: #e9ecef; padding: 15px; border-radius: 8px; margin-top: 20px; text-align: center; font-size: 14px; color: #495057; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <img src="cid:logo" alt="Rathcon Construction Logo" class="logo" />
              <p style="margin: 10px 0 0 0; font-size: 18px; opacity: 0.9;">New Quote Request</p>
            </div>
            <div class="content">
              <div style="background: #d4edda; border: 1px solid #c3e6cb; border-radius: 8px; padding: 15px; margin-bottom: 25px; color: #155724;">
                <strong>💰 New Quote Request Received!</strong> A potential client has submitted a detailed quote request. Please respond within 24 hours.
              </div>
              
              <div class="field">
                <span class="label">👤 Client Name:</span>
                <div class="value">${data.name}</div>
              </div>
              <div class="field">
                <span class="label">📧 Email Address:</span>
                <div class="value">${data.email}</div>
              </div>
              <div class="field">
                <span class="label">📱 Phone Number:</span>
                <div class="value">${data.phone}</div>
              </div>
              <div class="field">
                <span class="label">🏗️ Project Type:</span>
                <div class="value">${data.projectType}</div>
              </div>
              <div class="field">
                <span class="label">📝 Project Details:</span>
                <div class="value">${data.projectDetails.replace(/\n/g, '<br>')}</div>
              </div>
              <div class="field">
                <span class="label">💰 Budget Range:</span>
                <div class="value">${data.budget}</div>
              </div>
              <div class="field">
                <span class="label">⏰ Timeline:</span>
                <div class="value">${data.timeline}</div>
              </div>
              
              <div style="text-align: center; margin: 30px 0;">
                <a href="mailto:${data.email}?subject=Re: Quote Request - ${data.projectType}" class="action-btn">📧 Reply to Client</a>
                <a href="tel:${data.phone}" class="action-btn">📞 Call Client</a>
              </div>
              
              <div class="timestamp">
                <strong>📅 Submitted:</strong> ${new Date().toLocaleString('en-IN', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </div>
              
              <div class="footer">
                <p>This quote request was submitted from your website.</p>
                <p>© 2025 Rathcon Construction Private Limited. All rights reserved.</p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'contact@rathconconstructions.com',
      ...quoteEmail,
      attachments: [
        {
          filename: 'logo.png',
          path: './public/logo.png',
          cid: 'logo'
        }
      ]
    });

    return { success: true };
  } catch (error) {
    console.error('Quote email sending failed:', error);
    return { success: false, error: error.message };
  }
};
