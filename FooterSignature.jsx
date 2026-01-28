import React from "react";

/**
 * GlitchText Component - Creates a glitch effect on hover
 */
const GlitchText = ({ children, className = "" }) => {
  return (
    <span className={`jrv-glitch ${className}`}>
      {children}
    </span>
  );
};

/**
 * JRV Systems Footer Signature Component
 * Reusable footer signature for all JRV-built websites
 * 
 * @param {string} companyName - Parent company name (e.g., "GFTS Malaysia", "JRV Services")
 * @param {string} companyTagline - Optional tagline after company name
 * @param {Array} legalPages - Array of legal page links { label, path }
 * @param {Component} LinkComponent - React Router Link component or 'a' tag
 * @param {string} accentColor - Accent color class (default: "green")
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
  accentColor = "green",
  logoUrl = "https://res.cloudinary.com/de3gn7o77/image/upload/v1769591082/logo.png",
  className = ""
}) => {
  const currentYear = new Date().getFullYear();

  return (
    <div className={`pt-8 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left bg-transparent ${className}`}>
      <div className="font-mono text-sm text-slate-200 uppercase tracking-widest">
        © {currentYear} {companyName}. {companyTagline}
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
        {/* Legal Links */}
        {legalPages && legalPages.length > 0 && (
          <div className="flex gap-6 justify-center">
            {legalPages.map((item) => (
              <LinkComponent
                key={item.label}
                to={item.path}
                href={item.path}
                className={`font-mono text-sm text-slate-200 hover:text-${accentColor} uppercase tracking-widest transition-colors`}
              >
                [{item.label}]
              </LinkComponent>
            ))}
          </div>
        )}

        {/* JRV Systems Branding - Fixed */}
        <a
          href="https://jrvsystems.app"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 font-mono text-sm text-slate-200 hover:text-white transition-colors uppercase tracking-widest"
        >
          <GlitchText className="flex items-center gap-3">
            <div className="flex flex-col items-end">
              <span>Dev_By:</span>
              <span className={`text-${accentColor} font-bold`}>
                JRV_SYSTEMS
              </span>
            </div>
            <img
              src={logoUrl}
              alt="JRV Systems"
              width="80"
              height="80"
              className="h-20 w-auto md:opacity-50 md:grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all"
            />
          </GlitchText>
        </a>
      </div>
    </div>
  );
};

export { FooterSignature, GlitchText };
export default FooterSignature;
