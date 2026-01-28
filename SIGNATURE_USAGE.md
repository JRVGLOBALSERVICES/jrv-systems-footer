# FooterSignature Usage Examples

## Import

```jsx
import FooterSignature from "@jrv/footer/signature";
import "@jrv/footer/signature.css";
```

## Basic Usage (Works with Tailwind CSS)

```jsx
function App() {
  return (
    <div>
      <main>{/* Your content */}</main>
      <FooterSignature 
        companyName="GFTS Malaysia"
        companyTagline="All Systems Operational"
      />
    </div>
  );
}
```

## GFTS Example (Exact Design)

```jsx
import { Link } from "react-router-dom";

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

## JRV Services Example

```jsx
<FooterSignature 
  companyName="JRV Services"
  companyTagline="All Rights Reserved"
  accentColor="green"
  legalPages={[
    { label: "Privacy", path: "/privacy" },
    { label: "Terms", path: "/terms" },
  ]}
/>
```

## With Custom Logo

```jsx
<FooterSignature 
  companyName="Your Company"
  logoUrl="https://your-cdn.com/logo.png"
/>
```

## With React Router

```jsx
import { Link } from "react-router-dom";

<FooterSignature 
  companyName="Your Company"
  LinkComponent={Link}
  legalPages={[
    { label: "Privacy", path: "/privacy" },
    { label: "Terms", path: "/terms" },
  ]}
/>
```

## With Next.js

```jsx
import Link from "next/link";

<FooterSignature 
  companyName="Your Company"
  LinkComponent={Link}
  legalPages={[
    { label: "Privacy", path: "/privacy" },
  ]}
/>
```

## Minimal (No Legal Pages)

```jsx
<FooterSignature 
  companyName="Your Company"
  legalPages={[]}
/>
```

## With Custom Styling

```jsx
<FooterSignature 
  companyName="Your Company"
  className="custom-footer"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `companyName` | `string` | `"Your Company"` | Parent company name |
| `companyTagline` | `string` | `"All Rights Reserved"` | Tagline after copyright |
| `legalPages` | `Array<{label, path}>` | `[{Privacy}, {Cookies}]` | Legal page links |
| `LinkComponent` | `Component` | `"a"` | Link component (Link/a) |
| `accentColor` | `string` | `"green"` | Accent color (green, petronas-green, etc.) |
| `logoUrl` | `string` | JRV icon | Custom logo URL |
| `className` | `string` | `""` | Additional CSS classes |

## Features

✅ **Glitch Text Effect** - Hover over the JRV branding for glitch animation
✅ **Responsive Design** - Mobile-first layout
✅ **Tailwind Compatible** - Works with Tailwind CSS projects
✅ **Standalone CSS** - Includes utility classes for non-Tailwind projects
✅ **Grayscale Logo** - Desaturated logo that animates on hover
✅ **Monospace Font** - Tech aesthetic with Courier New

## Full Footer Integration

```jsx
import FooterSignature from "@jrv/footer/signature";
import "@jrv/footer/signature.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-slate-950 px-6 pb-12">
      <div className="max-w-7xl mx-auto">
        {/* Your footer content (logo, links, contact form, etc.) */}
        <div className="grid lg:grid-cols-4 gap-12 mb-24">
          {/* Footer sections */}
        </div>
        
        {/* Signature */}
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
      </div>
    </footer>
  );
}
```

## Styling Notes

- The component uses Tailwind CSS classes by default
- For non-Tailwind projects, the CSS file includes fallback utility classes
- The glitch effect only triggers on hover
- Logo is grayscale by default and becomes colorful on hover
