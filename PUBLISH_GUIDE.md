# Publishing @jrv/footer to GitHub

## Step 1: Prepare Your GitHub Repository

1. **Create a new GitHub repository** named `jrv-systems-footer`
   - Go to https://github.com/new
   - Repository name: `jrv-systems-footer`
   - Make it **Public**
   - Initialize with README (optional)

2. **Copy the repository URL**
   - Format: `https://github.com/yourusername/jrv-systems-footer.git`

## Step 2: Update package.json Repository URL

Replace `yourusername` with your actual GitHub username:

```json
"repository": {
  "type": "git",
  "url": "https://github.com/yourusername/jrv-systems-footer.git"
}
```

## Step 3: Push to GitHub

```bash
cd c:\Users\rjnfl\Documents\GitHub\jrv-systems-footer

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: JRV Systems footer components"

# Add remote origin
git remote add origin https://github.com/yourusername/jrv-systems-footer.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 4: Install in GFTS Project

### Option A: Direct GitHub URL (Recommended for Private Repos)

```bash
cd c:\Users\rjnfl\Documents\GitHub\GFTS-Website

npm install git+https://github.com/yourusername/jrv-systems-footer.git
```

### Option B: GitHub Packages (For Published Packages)

1. Publish to GitHub Packages (see **Publishing to GitHub Packages** below)
2. Install:

```bash
npm install @yourusername/footer@latest
```

### Option C: Local npm link (Development)

```bash
# In jrv-systems-footer directory
cd c:\Users\rjnfl\Documents\GitHub\jrv-systems-footer
npm link

# In GFTS-Website directory
cd c:\Users\rjnfl\Documents\GitHub\GFTS-Website
npm link @jrv/footer
```

## Step 5: Import in GFTS Footer.jsx

```jsx
import FooterSignature from "@jrv/footer/signature";
import "@jrv/footer/signature.css";
import { Link } from "react-router-dom";

// In your Footer component or at the bottom:
<FooterSignature 
  companyName="GFTS Malaysia"
  companyTagline="All Systems Operational"
  LinkComponent={Link}
  accentColor="petronas-green"
  legalPages={[
    { label: "Privacy", path: "/privacy-policy" },
    { label: "Cookies", path: "/cookies-policy" },
  ]}
/>
```

## Publishing to GitHub Packages (Optional)

### 1. Create `.npmrc` file in project root

```
@yourusername:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN
```

### 2. Generate GitHub Token

1. Go to https://github.com/settings/tokens
2. Click "Generate new token (classic)"
3. Select scopes: `write:packages`, `read:packages`
4. Copy token and use in `.npmrc`

### 3. Update package.json with registry

```json
{
  "name": "@yourusername/footer",
  "publishConfig": {
    "registry": "https://npm.pkg.github.com"
  }
}
```

### 4. Publish

```bash
npm publish
```

## Keeping Updates In Sync

### When you update the footer package:

```bash
# In jrv-systems-footer
git add .
git commit -m "Fix: Update glitch animation"
git push

# In GFTS-Website (to pull latest)
npm install git+https://github.com/yourusername/jrv-systems-footer.git@latest
```

Or if using npm link:

```bash
# Changes auto-sync in development with npm link
```

## Troubleshooting

**Build fails with "npm run build"**
- ✅ Fixed! Added build script to package.json

**Import errors in GFTS**
- Make sure you're importing the correct path: `@jrv/footer/signature`
- Check that `LinkComponent` prop is set (Link from react-router-dom)

**GitHub token issues**
- Ensure token has `write:packages` and `read:packages` scopes
- Don't commit `.npmrc` with your real token (add to .gitignore)

**CSS not loading**
- Import both: `import "@jrv/footer/signature.css"`
- Make sure Tailwind CSS is available in GFTS project

## Version Management

When you update the package:

```bash
# Patch version (1.0.0 → 1.0.1)
npm version patch
git push

# Minor version (1.0.0 → 1.1.0)
npm version minor
git push

# Major version (1.0.0 → 2.0.0)
npm version major
git push
```
