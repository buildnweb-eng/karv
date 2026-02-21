# Google OAuth Setup Guide for Karv

This guide will help you set up Google OAuth authentication for your Karv website.

---

## 📋 Prerequisites

- A Google account
- Access to [Google Cloud Console](https://console.cloud.google.com/)

---

## 🚀 Step-by-Step Setup

### Step 1: Create a Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Click on the project dropdown at the top
3. Click **"New Project"**
4. Enter project name: `Karv Authentication` (or any name you prefer)
5. Click **"Create"**
6. Wait for the project to be created and select it

### Step 2: Enable Google+ API

1. In your Google Cloud Console, click on **"APIs & Services"** in the left sidebar
2. Click on **"Library"**
3. Search for **"Google+ API"** or **"Google Identity"**
4. Click on it and click **"Enable"**

### Step 3: Configure OAuth Consent Screen

1. Go to **"APIs & Services"** → **"OAuth consent screen"**
2. Select **"External"** (unless you have a Google Workspace)
3. Click **"Create"**

#### Fill in the required information:

**App Information:**
- App name: `Karv`
- User support email: `your-email@example.com`
- App logo: (Optional - upload your Karv logo)

**App Domain:**
- Application home page: `http://localhost:8080` (for development)
- Application privacy policy link: `http://localhost:8080/privacy` (add this later)
- Application terms of service link: `http://localhost:8080/terms` (add this later)

**Developer contact information:**
- Email addresses: `your-email@example.com`

4. Click **"Save and Continue"**

**Scopes:**
1. Click **"Add or Remove Scopes"**
2. Select these scopes:
   - `email`
   - `profile`
   - `openid`
3. Click **"Update"**
4. Click **"Save and Continue"**

**Test Users (for development):**
1. Click **"Add Users"**
2. Add your Google email addresses for testing
3. Click **"Save and Continue"**

### Step 4: Create OAuth 2.0 Credentials

1. Go to **"APIs & Services"** → **"Credentials"**
2. Click **"Create Credentials"** → **"OAuth client ID"**
3. Select application type: **"Web application"**

**Configure the OAuth client:**

**Name:** `Karv Web Client`

**Authorized JavaScript origins:**
```
http://localhost:8080
http://localhost:5173
http://127.0.0.1:8080
```

**Authorized redirect URIs:**
```
http://localhost:8080
http://localhost:5173
http://127.0.0.1:8080
```

4. Click **"Create"**

### Step 5: Copy Your Client ID

1. After creating, you'll see a popup with your credentials
2. Copy the **Client ID** (it looks like: `123456789-abc123.apps.googleusercontent.com`)
3. Click **"OK"**

### Step 6: Add Client ID to Your Project

1. Open the `.env` file in your project root
2. Replace the value with your actual Client ID:

```env
VITE_GOOGLE_CLIENT_ID=your-actual-client-id.apps.googleusercontent.com
```

3. Save the file
4. **Restart your development server** for the changes to take effect:

```bash
# Stop the server (Ctrl+C) and restart:
npm run dev
```

---

## ✅ Testing Your Setup

1. Navigate to `http://localhost:8080/login`
2. You should see the Google Sign-In button
3. Click the button
4. Sign in with one of your test user accounts
5. After successful login, you should be redirected to the homepage
6. Your profile picture/name should appear in the navigation

---

## 🌐 Production Setup

When deploying to production:

### 1. Update OAuth Consent Screen
- Change status from "Testing" to "In Production"
- This requires Google verification if you're using sensitive scopes

### 2. Add Production URLs

Go back to **"Credentials"** → Edit your OAuth client:

**Authorized JavaScript origins:**
```
https://yourdomain.com
https://www.yourdomain.com
```

**Authorized redirect URIs:**
```
https://yourdomain.com
https://www.yourdomain.com
```

### 3. Update Environment Variables

For production deployment (e.g., Vercel, Netlify):
- Add `VITE_GOOGLE_CLIENT_ID` to your deployment platform's environment variables
- Use the same Client ID (you can reuse the same credentials for dev and prod)

---

## 🔒 Security Best Practices

### 1. Never Commit `.env` File
The `.env` file is already in `.gitignore`. Make sure to keep your Client ID secret.

### 2. Implement Backend Verification (Recommended)

For production apps, you should verify the Google token on your backend:

```javascript
// Example backend verification (Node.js/Express)
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

async function verify(token) {
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: process.env.GOOGLE_CLIENT_ID,
  });
  const payload = ticket.getPayload();
  return payload;
}
```

### 3. Implement Session Management

Currently, the auth state is stored in localStorage. For production:
- Use HTTP-only cookies for storing session tokens
- Implement refresh token rotation
- Set up proper session expiration

---

## 🐛 Troubleshooting

### "Invalid Client" Error
- Check that your Client ID is correct in `.env`
- Make sure you restarted the dev server after adding the Client ID
- Verify the authorized origins include your current URL

### "Access Blocked" Error
- Add your Google account to the test users list
- Make sure your app is in "Testing" mode during development

### Google Button Not Appearing
- Check browser console for errors
- Verify `@react-oauth/google` package is installed
- Make sure `VITE_GOOGLE_CLIENT_ID` is set correctly

### Popup Blocked
- Allow popups for localhost in your browser
- Or use the redirect flow instead of popup

---

## 📚 Additional Resources

- [Google OAuth Documentation](https://developers.google.com/identity/protocols/oauth2)
- [@react-oauth/google Documentation](https://www.npmjs.com/package/@react-oauth/google)
- [Google Cloud Console](https://console.cloud.google.com/)

---

## 🎯 Features Implemented

✅ Google OAuth Sign-In
✅ User profile display in navigation
✅ Protected profile page
✅ Logout functionality
✅ Persistent login (localStorage)
✅ Mobile-responsive auth UI

## 🚧 Next Steps (Optional Enhancements)

- [ ] Add backend API for token verification
- [ ] Implement session management with JWT
- [ ] Add order history tied to user accounts
- [ ] Save custom designs to user profiles
- [ ] Add email notifications for orders
- [ ] Implement "Remember Me" functionality
- [ ] Add social login with Facebook/Apple

---

## 📧 Need Help?

If you encounter any issues, check:
1. Browser console for error messages
2. Network tab for failed requests
3. Google Cloud Console for credential issues

---

**Happy coding! 🚀**
