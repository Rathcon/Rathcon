# Vercel Environment Variables Setup

## Email Configuration for Production

To fix the email error in production, you need to configure environment variables in your Vercel dashboard.

### Step 1: Access Vercel Dashboard
1. Go to [vercel.com](https://vercel.com)
2. Sign in to your account
3. Select your Rathcon project

### Step 2: Add Environment Variables
1. Go to **Settings** → **Environment Variables**
2. Add the following variables:

#### Required Variables:
```
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASS=your-gmail-app-password
```

### Step 3: Gmail App Password Setup
1. Go to your Google Account settings
2. Enable 2-Factor Authentication if not already enabled
3. Go to Security → App passwords
4. Generate a new app password for "Mail"
5. Use this password as your `EMAIL_PASS` value

### Step 4: Redeploy
After adding the environment variables:
1. Go to **Deployments** tab
2. Click **Redeploy** on your latest deployment
3. Or push new changes to trigger a new deployment

### Step 5: Test
1. Go to your live website
2. Submit a test contact form
3. Check if emails are sent successfully

## Troubleshooting

### If emails still fail:
1. Check Vercel logs for detailed error messages
2. Verify Gmail app password is correct
3. Ensure Gmail account has "Less secure app access" enabled (if not using app password)
4. Check if your Gmail account has any restrictions

### Alternative Email Services:
If Gmail doesn't work, you can use:
- SendGrid
- Mailgun
- AWS SES
- Resend

Update the email configuration in `src/lib/email.ts` accordingly.

## Security Notes:
- Never commit environment variables to your repository
- Use app passwords instead of regular passwords
- Regularly rotate your app passwords
- Consider using a dedicated email service for production
