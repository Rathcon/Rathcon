# Email Service Setup Guide

## Overview
This project includes a complete email service using Nodemailer that handles:
- Contact form submissions
- Quote requests
- Automated responses to customers
- Professional email templates with company branding

## Features
✅ **Contact Form Emails** - Sends form data to company email
✅ **Auto-Response Emails** - Sends confirmation emails to customers
✅ **Quote Request Emails** - Handles detailed project quote requests
✅ **Professional Templates** - Beautiful HTML emails with Rathcon branding
✅ **Error Handling** - Comprehensive validation and error handling
✅ **Loading States** - User-friendly loading indicators

## Setup Instructions

### 1. Install Dependencies
```bash
npm install nodemailer @types/nodemailer
```

### 2. Create Environment Variables
Create a `.env.local` file in your project root with:

```env
# Email Configuration
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password

# Company Information
COMPANY_NAME=Rathcon Construction Private Limited
COMPANY_EMAIL=contact@rathconconstructions.com
COMPANY_PHONE=8928551747
COMPANY_ADDRESS=RATHCON CONSTRUCTION PRIVATE LIMITED, JAI BHIM NAGAR 2, NR. HANUMAN MANDIR, THANE KALWA, THANE-400605, MAHARASHTRA
```

### 3. Gmail Setup (Recommended)
1. **Enable 2-Factor Authentication**
   - Go to your Google Account settings
   - Enable 2-Step Verification

2. **Generate App Password**
   - Go to Google Account → Security
   - Under "2-Step Verification", click "App passwords"
   - Generate a new app password for "Mail"
   - Use this password in your `.env.local` file

3. **Alternative: Use Gmail with "Less Secure Apps"**
   - Enable "Less secure app access" in your Google Account
   - Use your regular Gmail password

### 4. Test the Email Service
1. Start your development server: `npm run dev`
2. Go to `/contact` and submit a test form
3. Check your email for the test message
4. Check the customer's email for the auto-response

## Email Templates

### Contact Form Email
- **To Company**: Professional notification with form data
- **To Customer**: Auto-response with company information and next steps

### Quote Request Email
- **To Company**: Detailed project information for quote preparation
- **Features**: Project type, budget, timeline, contact details

## API Endpoints

### POST `/api/contact`
Handles contact form submissions
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Project Inquiry",
  "message": "I'm interested in your services..."
}
```

### POST `/api/quote`
Handles quote request submissions
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+91 98765 43210",
  "projectType": "Residential Construction",
  "projectDetails": "Building a 3BHK house...",
  "budget": "₹25-50 Lakhs",
  "timeline": "Soon (1-3 months)"
}
```

## Email Features

### Professional Branding
- Rathcon logo and colors
- Company contact information
- Professional styling and layout

### Auto-Response Content
- Thank you message
- Company information
- Expected response time
- Contact details
- Website link

### Error Handling
- Email validation
- Required field validation
- Network error handling
- User-friendly error messages

## Customization

### Update Company Information
Edit `src/lib/email.ts` to update:
- Company name and branding
- Contact information
- Email templates
- Response messages

### Change Email Provider
Update the transporter configuration in `src/lib/email.ts`:
```javascript
const transporter = nodemailer.createTransporter({
  service: 'outlook', // or 'yahoo', 'hotmail', etc.
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
```

### Custom SMTP
```javascript
const transporter = nodemailer.createTransporter({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
```

## Troubleshooting

### Common Issues
1. **Authentication Failed**
   - Check your email credentials
   - Ensure 2FA is enabled for Gmail
   - Use App Password instead of regular password

2. **Emails Not Sending**
   - Check your internet connection
   - Verify email provider settings
   - Check server logs for errors

3. **Spam Filter Issues**
   - Add your email to contacts
   - Check spam folder
   - Use a business email domain

### Testing
- Use a real email address for testing
- Check both sender and recipient emails
- Test with different email providers

## Security Notes
- Never commit `.env.local` to version control
- Use App Passwords for Gmail
- Regularly update email credentials
- Monitor email sending logs

## Support
For issues with the email service:
1. Check the browser console for errors
2. Check the server logs
3. Verify environment variables
4. Test with different email providers
