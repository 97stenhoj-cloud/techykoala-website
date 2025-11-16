# TechyKoala Website - Clean Design

Modern, minimal website with gradient backgrounds and glassmorphism effects.

## 🌐 What's Included

### Main Site (techykoala.com) - 💚 Green Gradient
- Full-page green gradient background
- Animated grid background
- Glassmorphism cards with blur effects
- Floating logo with animation
- Clean, minimal design

### Connect Page (techykoala.com/Connect) - 🌸 Pastel Gradient
- Soft pastel gradient background (purple/pink/peach)
- Semi-transparent white cards
- All 5 game modes with icons
- Pricing section
- Download buttons

## 📁 File Structure

```
techykoala-website/
├── index.html          → Main company page
├── styles.css          → Green gradient styling
├── script.js           → Smooth scrolling
└── Connect/
    ├── index.html      → Connect app page
    ├── styles.css      → Pastel gradient styling
    └── script.js       → Page interactions
```

## 🚀 Update Your GitHub Repo

You already have the repo at: https://github.com/97stenhoj-cloud/techykoala-website

To update it with this new design:

```bash
# Navigate to your downloads folder where you'll extract these files
cd ~/Downloads/techykoala-website

# Remove old git folder and start fresh
rm -rf .git

# Initialize new git repo
git init

# Add all files
git add .

# Commit
git commit -m "Updated to clean gradient design with glassmorphism"

# Add your existing remote
git remote add origin https://github.com/97stenhoj-cloud/techykoala-website.git

# Force push the new design
git push -f origin main
```

## ✅ Vercel Will Auto-Deploy

Once you push to GitHub, Vercel will automatically:
1. Detect the changes
2. Build the new site
3. Deploy it live

Your site will be live at your Vercel URL in ~30 seconds!

## 📝 Before Going Live

### Update App Store Links

In `Connect/index.html` (around line 118):

**Replace:**
```html
<a href="#" class="store-btn app-store">
```

**Replacement:**
```html
<a href="YOUR_APP_STORE_LINK" class="store-btn app-store">
```

**Replace:**
```html
<a href="#" class="store-btn google-play">
```

**Replacement:**
```html
<a href="YOUR_GOOGLE_PLAY_LINK" class="store-btn google-play">
```

## 🎨 Design Features

### Main Site
- ✅ Full green gradient background
- ✅ Animated grid pattern
- ✅ Floating particles
- ✅ Glassmorphism cards
- ✅ Sticky header with blur
- ✅ Logo with float animation
- ✅ Gradient text on headings

### Connect Page
- ✅ Pastel gradient background (matches app exactly)
- ✅ Uses exact app colors (purple, pink, peach)
- ✅ Semi-transparent cards
- ✅ Category icons from Supabase storage
- ✅ Connect app logo from Supabase
- ✅ Premium badges on cards
- ✅ Pricing comparison
- ✅ App store buttons

## 📱 Fully Responsive

Works perfectly on:
- ✅ Desktop (1920px+)
- ✅ Laptop (1024px)
- ✅ Tablet (768px)
- ✅ Mobile (375px+)

## 🛠️ Customization

### Change Colors

In `styles.css` (main site):
```css
:root {
  --jungle-green: #10b981;
  --forest-emerald: #059669;
  --spring-green: #34d399;
}
```

In `Connect/styles.css`:
```css
:root {
  --primary-purple: #c084fc;
  --primary-pink: #ec4899;
  --accent-peach: #fdba74;
}
```

## 🎯 URLs

After deployment:
- Main site: https://techykoala.com
- Connect page: https://techykoala.com/Connect

## ✨ Key Differences from Previous Version

- Cleaner, more minimal design
- Full-page gradient backgrounds (not just sections)
- Glassmorphism effects throughout
- Animated background elements
- Simpler navigation
- More focus on content
- Better mobile experience

---

Built with ❤️ for TechyKoala | 2025
