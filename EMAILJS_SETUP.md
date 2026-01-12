# EmailJS Setup Instructions

## Why EmailJS?
- ✅ **FREE** up to 200 emails/month
- ✅ Works on **ANY hosting** (Netlify, Vercel, GitHub Pages, etc.)
- ✅ **No backend** required
- ✅ Easy to set up in 5 minutes

## Setup Steps

### 1. Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click **Sign Up** (it's FREE)
3. Verify your email

### 2. Add Email Service
1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail recommended):
   - **Gmail**: Select Gmail and connect your Google account
   - **Outlook**: Select Outlook/Office365
   - Or use other providers
4. Click **Create Service**
5. **Copy the Service ID** (e.g., `service_abc123`)

### 3. Create Email Template
1. Go to **Email Templates**
2. Click **Create New Template**
3. Set up your template like this:

**Template Name**: Contact Form

**Subject**: New Contact Form Submission from {{from_name}}

**Content**:
```
New message from your website contact form:

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This email was sent from your website contact form.
```

4. Click **Save**
5. **Copy the Template ID** (e.g., `template_xyz789`)

### 4. Get Your Public Key
1. Go to **Account** → **General**
2. Find **Public Key** (looks like: `abc123xyz789`)
3. **Copy this key**

### 5. Update Your Code
Open `src/pages/Contact/Contact.js` and replace these lines (around line 22-24):

```javascript
const serviceID = 'YOUR_SERVICE_ID'; // Replace with your Service ID from step 2
const templateID = 'YOUR_TEMPLATE_ID'; // Replace with your Template ID from step 3
const publicKey = 'YOUR_PUBLIC_KEY'; // Replace with your Public Key from step 4
```

### 6. Configure Email Delivery
In EmailJS dashboard:
1. Go to your **Email Service**
2. Make sure **To Email** is set to: `contact@sgtpl.co.in`
3. Or configure it in the template

### 7. Test It!
1. Run your development server: `npm start`
2. Go to Contact page
3. Fill out the form and submit
4. Check your inbox at `contact@sgtpl.co.in`

## Example Configuration

After setup, your code should look like:

```javascript
const serviceID = 'service_abc123';
const templateID = 'template_xyz789';
const publicKey = 'abc123xyz789';
```

## Free Tier Limits
- 200 emails/month
- 1 email service
- 3 email templates

## Troubleshooting

**Form not sending?**
- Check browser console for errors
- Verify all 3 IDs are correct
- Make sure Gmail/email is properly connected in EmailJS

**Not receiving emails?**
- Check spam folder
- Verify "To Email" is set correctly in EmailJS template
- Test with your personal email first

**Need more emails?**
- Upgrade to paid plan (starts at $7/month for 1000 emails)
- Or use multiple free accounts for different projects

## Support
- EmailJS Docs: https://www.emailjs.com/docs/
- Need help? Check your EmailJS dashboard for support options
