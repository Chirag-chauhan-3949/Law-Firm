# EmailJS Setup Instructions

This document provides step-by-step instructions to configure EmailJS for the MK Legal Partners contact form.

## What is EmailJS?

EmailJS is a service that allows sending emails directly from client-side JavaScript without requiring a backend server. It works by connecting your email service provider (like Gmail, Outlook, etc.) to their platform through secure API keys.

## Setup Steps

### 1. Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

### 2. Create an Email Service

1. After logging in, go to the "Email Services" section
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the connection instructions:
   - For Gmail: You'll need to create an app password
   - For Outlook: You may need to enable SMTP access
5. Once connected, note down your **Service ID** (it will look like `service_xxxxxxxxx`)

### 3. Create an Email Template

1. Go to the "Email Templates" section
2. Click "Create New Template"
3. Fill in the template details:

**Template Name:** `MK Legal Partners Contact Form`

**Subject:** `New Contact Form Submission from {{from_name}}`

**HTML Content:**
```html
<h3>New Contact Form Submission</h3>
<p><strong>Name:</strong> {{from_name}}</p>
<p><strong>Email:</strong> {{from_email}}</p>
<p><strong>Phone:</strong> {{phone}}</p>
<p><strong>Practice Area:</strong> {{subject}}</p>
<p><strong>Message:</strong></p>
<p>{{message}}</p>
<hr>
<p><em>This message was sent from the MK Legal Partners website contact form.</em></p>
```

4. Save the template and note down your **Template ID** (it will look like `template_xxxxxxxxx`)

### 4. Get Your Public Key

1. Go to the "Account" section
2. Find your **Public Key** (it will look like a long alphanumeric string)
3. Copy this key for the next step

### 5. Update the Contact Component

Open `src/pages/Contact.tsx` and replace the placeholder values in the `handleSubmit` function:

```typescript
const serviceId = 'service_your_actual_service_id'; // Replace with your EmailJS service ID
const templateId = 'template_your_actual_template_id'; // Replace with your EmailJS template ID
const publicKey = 'your_actual_public_key'; // Replace with your EmailJS public key
```

### 6. Test the Configuration

1. Start your development server: `npm run dev`
2. Navigate to the contact page
3. Fill out the form with test data
4. Submit the form
5. Check your email inbox for the test message

## Security Notes

- **Public Key Only**: Never expose your private EmailJS key in client-side code
- **Rate Limiting**: EmailJS free tier has monthly limits (200 emails/month)
- **Spam Protection**: Consider adding reCAPTCHA if you receive spam submissions

## Troubleshooting

### Common Issues:

1. **"Email not sent" error**
   - Check that your service ID, template ID, and public key are correct
   - Verify your email service is properly connected
   - Check EmailJS service status

2. **Template variables not working**
   - Ensure variable names in your template match exactly with `templateParams`
   - Use double curly braces: `{{variable_name}}`

3. **Email not receiving**
   - Check your spam/junk folder
   - Verify the "to" email address in your template
   - Check EmailJS dashboard for delivery status

## Alternative: Formsubmit.co

If you prefer not to use EmailJS, the form was previously configured to use Formsubmit.co:

1. Remove EmailJS integration
2. Update the form action back to: `action="https://formsubmit.co/madhu.khatri14@outlook.com"`
3. Add Formsubmit.co hidden inputs back to the form

## Production Deployment

Before deploying to production:

1. Test the email functionality thoroughly
2. Monitor EmailJS usage to stay within limits
3. Consider upgrading to EmailJS paid plan for higher volume
4. Set up email monitoring and alerts

## Support

- EmailJS Documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- EmailJS Support: support@emailjs.com
- For issues specific to this implementation, check the browser console for error messages
