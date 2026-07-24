Netlify Deployment Instructions

This repository branch: chary-site

Goal: Deploy the static site to Netlify and enable Netlify Forms for the booking form.

1) Create or sign in to a Netlify account
   - https://app.netlify.com/signup

2) Add a new site from Git
   - Click "Add new site" → "Import from Git"
   - Connect your GitHub account and authorize access to the repository TarnojuVenu/charywatertankcleaningservices

3) Select repository and branch
   - Choose repository: TarnojuVenu/charywatertankcleaningservices
   - Branch to deploy: chary-site

4) Build settings
   - Build command: leave empty
   - Publish directory: `/` (root)
   - Click "Deploy site"

5) Verify deployment
   - After deploy completes, open the provided site URL
   - Check homepage loads and images appear (placeholder SVGs are included)

6) Netlify Forms
   - The booking form includes `data-netlify="true"` and a hidden `form-name` field. Netlify will auto-detect the form on the first deploy.
   - To test: submit the booking form on the live site. In the Netlify dashboard, go to Site > Forms to view submissions.

7) Notifications and integrations
   - In Netlify site settings > Forms, you can configure email notifications for new submissions.
   - Or connect a webhook/Zapier/Make integration to forward submissions to email/Slack/Google Sheets.

8) Custom domain (optional)
   - In Netlify > Domain settings, add a custom domain and follow steps to set DNS.
   - Netlify will provision HTTPS automatically.

9) If you want GitHub Pages instead
   - Netlify Forms won't work on GitHub Pages. Use Formspree or serverless functions for form handling.

If you'd like, I can:
- Walk you through these steps while you perform them and confirm the form is detected.
- Create a small Netlify Function to forward form submissions to an email provider (requires Netlify API keys or SendGrid key).
- Convert the form to Formspree if you prefer GitHub Pages deployment.

