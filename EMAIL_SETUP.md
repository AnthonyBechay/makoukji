# Email Setup Guide

The contact form is now set up to send emails. To enable email sending, you need to configure an email service.

## Option 1: Resend (Recommended - Easiest)

1. **Sign up for Resend:**
   - Go to [resend.com](https://resend.com)
   - Create a free account (100 emails/day free)

2. **Get your API key:**
   - Go to API Keys in your Resend dashboard
   - Create a new API key
   - Copy the key

3. **Add environment variable:**
   - Create a `.env.local` file in the root directory
   - Add: `RESEND_API_KEY=your_api_key_here`
   - Add: `CONTACT_EMAIL=info@makoukji.com` (or your email)

4. **Install Resend package:**
   ```bash
   npm install resend
   ```

5. **Update the API route:**
   - The API route at `app/api/contact/route.ts` has commented code for Resend
   - Uncomment the Resend code and remove the TODO comment

## Option 2: SendGrid

1. Sign up at [sendgrid.com](https://sendgrid.com)
2. Get your API key
3. Add `SENDGRID_API_KEY` to `.env.local`
4. Install: `npm install @sendgrid/mail`
5. Update the API route to use SendGrid

## Option 3: Nodemailer (SMTP)

1. Install: `npm install nodemailer`
2. Configure SMTP settings in `.env.local`
3. Update the API route to use Nodemailer

## Current Status

Right now, the form:
- ✅ Validates input
- ✅ Sends data to the API
- ✅ Shows success/error messages
- ⚠️ Logs submissions to console (emails not sent yet)

To actually receive emails, follow one of the options above.

