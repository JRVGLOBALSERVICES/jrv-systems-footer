import React from "react";

/**
 * GlitchText Component - Creates a glitch effect on hover
 */
const GlitchText = ({ children, style = {} }) => {
  return <span className="jrv-glitch" style={style}>{children}</span>;
};

/**
 * JRV Systems Footer Signature Component
 * Reusable footer signature for all JRV-built websites
 *
 * @param {string} companyName - Parent company name (e.g., "GFTS Malaysia", "JRV Services")
 * @param {string} companyTagline - Optional tagline after company name
 * @param {Array} legalPages - Array of legal page links { label, path }
 * @param {Component} LinkComponent - React Router Link component or 'a' tag
 * @param {string} accentColor - Hex color code (default: "#22c55e")
 * @param {string} logoUrl - Custom logo URL (optional)
 */
const FooterSignature = ({
  companyName = "Your Company",
  companyTagline = "All Rights Reserved",
  legalPages = [
    { label: "Privacy", path: "/privacy-policy" },
    { label: "Cookies", path: "/cookies-policy" },
  ],
  LinkComponent = "a",
  accentColor = "#22c55e",
  logoUrl = "https://res.cloudinary.com/de3gn7o77/image/upload/v1769591082/logo.png",
  style = {},
}) => {
  const currentYear = new Date().getFullYear();

  const containerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '1.5rem',
    alignItems: 'center',
    ...style
  };

  const linkBaseStyle = {
    fontFamily: 'monospace',
    fontWeight: 'bold',
    fontSize: '0.75rem',
    color: '#e2e8f0',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    textDecoration: 'none',
    whiteSpace: 'nowrap'
  };

  return (
    <div style={containerStyle}>
      {/* Column 1 - Left Aligned (Copyright) */}
      <div style={{ textAlign: 'center' }}>
        <div style={{
          fontFamily: 'monospace',
          fontWeight: 'bold',
          fontSize: '0.875rem',
          color: '#e2e8f0',
          textTransform: 'uppercase',
          letterSpacing: '0.1em'
        }}>
          © {currentYear} {companyName}. {companyTagline}
        </div>
      </div>

      {/* Column 2 - Center Aligned (Legal Links) */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.75rem',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        {legalPages && legalPages.length > 0 && legalPages.map((item) => (
          <LinkComponent
            key={item.label}
            to={item.path}
            href={item.path}
            style={linkBaseStyle}
            onMouseEnter={(e) => e.currentTarget.style.color = accentColor}
            onMouseLeave={(e) => e.currentTarget.style.color = '#e2e8f0'}
          >
            [{item.label}]
          </LinkComponent>
        ))}
      </div>

      {/* Column 3 - Right Aligned (JRV Systems Branding) */}
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <a
          href="https://jrvsystems.app"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: 'monospace',
            fontWeight: 'bold',
            fontSize: '0.875rem',
            color: '#e2e8f0',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            textDecoration: 'none'
          }}
        >
          <GlitchText style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
              <span style={{ fontSize: '0.75rem' }}>DEV_BY:</span>
              <span style={{ fontSize: '0.75rem', color: accentColor }}>JRV_SYSTEMS</span>
            </div>
            <img
              src={logoUrl}
              alt="JRV Systems"
              width="48"
              height="48"
              style={{ height: '3rem', width: 'auto', opacity: 0.5, filter: 'grayscale(100%)' }}
              onMouseEnter={(e) => { e.target.style.opacity = '1'; e.target.style.filter = 'grayscale(0%)'; }}
              onMouseLeave={(e) => { e.target.style.opacity = '0.5'; e.target.style.filter = 'grayscale(100%)'; }}
            />
          </GlitchText>
        </a>
      </div>
    </div>
  );
};

export { FooterSignature, GlitchText };
export default FooterSignature;
