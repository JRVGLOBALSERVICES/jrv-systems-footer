# @jrv/footer 🎨

A lightweight, reusable React footer component for all JRV Systems websites. Provides consistent branding, navigation links, and family of products showcase across the JRV ecosystem.

![React](https://img.shields.io/badge/React-18+-blue?style=flat&logo=react)
![npm](https://img.shields.io/badge/npm-package-red?style=flat&logo=npm)
![License](https://img.shields.io/badge/License-MIT-green?style=flat)

## 📋 Table of Contents

- [What This Project Does](#what-this-project-does)
- [Why It's Useful](#why-its-useful)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [API](#api)
- [Customization](#customization)
- [Contributing](#contributing)
- [Support](#support)

## 🎯 What This Project Does

The @jrv/footer component is a pre-built React footer that provides:

- **Consistent Branding** - JRV Systems logo and tagline
- **Quick Links** - Navigation to Portfolio, Work, Services, Contact
- **Our Sites** - Showcase of JRV family products
- **Legal Links** - Privacy Policy, Terms of Service
- **Copyright Notice** - Automatic year update
- **Responsive Design** - Mobile-first CSS layout
- **Easy Integration** - Works with Next.js, React, Vite, and more

## 💡 Why It's Useful

### For Product Teams
- **Consistency** across all JRV websites
- **Single source of truth** for footer content
- **Easy updates** change once, deploy everywhere
- **Time savings** no need to rebuild footer for each site

### For Developers
- **Plug and play** install and use in minutes
- **Framework agnostic** works with React, Next.js, Vite
- **Customizable** via props and CSS
- **Lightweight** minimal dependencies
- **Maintainable** centralized component updates

### For Brand Management
- **Brand consistency** same look and feel across sites
- **Easy rebrand** update component for all sites
- **Link management** centralized navigation updates

## 🚀 Getting Started

### Prerequisites

- **React** 18.x or higher
- **npm** or **yarn** package manager

### Installation

#### Option 1: npm link (Local Development)

Best for testing and development:

```bash
# In the footer package directory
cd jrv-systems-footer
npm link

# In your project directory
cd ../your-project
npm link @jrv/footer
```

#### Option 2: Direct File Copy

For quick integration without package management:

```bash
# Copy files to your project
cp jrv-systems-footer/index.js src/components/JRVFooter.js
cp jrv-systems-footer/footer.css src/components/JRVFooter.css
```

#### Option 3: GitHub Packages (Recommended for Production)

Publish to GitHub Packages for production use:

```bash
npm install @jrv/footer
```

## 📖 Usage

### In Next.js (App Router)

```jsx
// app/layout.js or app/page.js
import JRVFooter from "@jrv/footer";
import "@jrv/footer/footer.css";

export default function Layout({ children }) {
  return (
    <html>
      <body>
        <main>{children}</main>
        <JRVFooter />
      </body>
    </html>
  );
}
```

### In Next.js (Pages Router)

```jsx
// pages/_app.js
import "@jrv/footer/footer.css";
import JRVFooter from "@jrv/footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <JRVFooter />
    </>
  );
}

export default MyApp;
```

### In React / Vite

```jsx
// src/App.jsx
import JRVFooter from "@jrv/footer";
import "@jrv/footer/footer.css";

function App() {
  return (
    <div className="app">
      {/* Your app content */}
      <JRVFooter />
    </div>
  );
}

export default App;
```

### With Custom Styling

```jsx
// Add custom classes for layout tweaks
<JRVFooter className="my-custom-footer" />
```

## 🔧 API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | `""` | Additional CSS classes for custom styling |

### Component Structure

```jsx
<footer className="jrv-footer">
  <div className="jrv-footer__container">
    <div className="jrv-footer__grid">
      {/* Brand Section */}
      <div className="jrv-footer__brand">
        <h3>JRV Systems</h3>
        <p>Engineering smart systems built to scale.</p>
      </div>
      
      {/* Quick Links */}
      <div className="jrv-footer__section">
        <h4>Quick Links</h4>
        {/* Links to main site */}
      </div>
      
      {/* Our Sites */}
      <div className="jrv-footer__section">
        <h4>Our Sites</h4>
        {/* Links to JRV products */}
      </div>
      
      {/* Legal */}
      <div className="jrv-footer__section">
        <h4>Legal</h4>
        {/* Privacy, Terms */}
      </div>
    </div>
    
    {/* Copyright */}
    <div className="jrv-footer__bottom">
      <p>© {currentYear} JRV Systems. All rights reserved.</p>
    </div>
  </div>
</footer>
```

## 🎨 Customization

### Updating Links

Edit [index.js](index.js) to change links:

```javascript
// Quick Links
<li><a href="https://jrvsystems.app/">Portfolio</a></li>
<li><a href="https://jrvsystems.app/#work">Work</a></li>

// Our Sites
<li><a href="https://yoursite.com">Your Site</a></li>
```

### Custom Styling

Override CSS variables in your global styles:

```css
/* Your global CSS */
.jrv-footer {
  --footer-bg: #1a1a1a;
  --footer-text: #ffffff;
  --footer-link-hover: #0066cc;
}
```

Or add custom classes:

```jsx
<JRVFooter className="dark-theme" />
```

```css
/* Your CSS */
.dark-theme.jrv-footer {
  background: #000;
  color: #fff;
}
```

### Modifying Content

Edit [index.js](index.js) to customize:

- **Tagline**: Change "Engineering smart systems built to scale."
- **Section Headings**: Modify "Quick Links", "Our Sites", etc.
- **Copyright Text**: Update organization name

### Styling Guide

The component uses BEM naming convention:

- `.jrv-footer` - Main container
- `.jrv-footer__container` - Content wrapper
- `.jrv-footer__grid` - Grid layout
- `.jrv-footer__brand` - Brand section
- `.jrv-footer__section` - Link sections
- `.jrv-footer__heading` - Section headers
- `.jrv-footer__list` - Link lists
- `.jrv-footer__bottom` - Copyright area

## 📁 Project Structure

```
jrv-systems-footer/
├── src/                # Source files (optional)
├── index.js            # Main component
├── footer.css          # Component styles
├── package.json        # Package configuration
└── README.md           # This file
```

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes to `index.js` or `footer.css`
4. Test across different frameworks (Next.js, React, Vite)
5. Commit your changes (`git commit -m 'Add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

### Development Guidelines
- Keep component lightweight and dependency-free
- Maintain React 18+ compatibility
- Test with Next.js (App & Pages), React, and Vite
- Follow BEM naming for CSS classes
- Document any new props or features

### Testing Checklist
- [ ] Works in Next.js App Router
- [ ] Works in Next.js Pages Router
- [ ] Works in Create React App
- [ ] Works in Vite
- [ ] Responsive on mobile devices
- [ ] Accessible (ARIA labels, semantic HTML)
- [ ] No console errors or warnings

## 📞 Support

### Documentation
- [React Documentation](https://react.dev/)
- [Next.js Documentation](https://nextjs.org/docs)

### Getting Help
- 🐛 Report bugs via GitHub Issues
- 💡 Request features via Pull Requests
- 📧 Contact JRV Systems development team

### Maintainers
**JRV Systems** - [jrvsystems.app](https://jrvsystems.app)

## 📄 License

MIT License - see LICENSE file for details

---

**Built with ❤️ by JRV Systems for JRV Systems**
