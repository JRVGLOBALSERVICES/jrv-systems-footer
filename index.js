export { default as FooterSignature, GlitchText } from "./FooterSignature.jsx";
              <li><a href="https://jrvsystems.app/">Portfolio</a></li>
              <li><a href="https://jrvsystems.app/#work">Work</a></li>
              <li><a href="https://jrvsystems.app/#services">Services</a></li>
              <li><a href="https://jrvsystems.app/#contact">Contact</a></li>
            </ul>
          </div>

          {/* Our Sites */}
          <div className="jrv-footer__section">
            <h4 className="jrv-footer__heading">Our Sites</h4>
            <ul className="jrv-footer__list">
              <li><a href="https://jrvservices.app/" target="_blank" rel="noreferrer">JRV Services</a></li>
              <li><a href="https://anbaa.app/" target="_blank" rel="noreferrer">Anbaa</a></li>
              <li><a href="https://gfts.app/" target="_blank" rel="noreferrer">GFTS</a></li>
              <li><a href="https://aliexpressliquor.com/" target="_blank" rel="noreferrer">Ali Express Liquor</a></li>
            </ul>
          </div>

          {/* Legal / Social */}
          <div className="jrv-footer__section">
            <h4 className="jrv-footer__heading">Connect</h4>
            <ul className="jrv-footer__list">
              <li><a href="mailto:hello@jrvsystems.app">hello@jrvsystems.app</a></li>
              <li><a href="https://cal.com/jrvsystems/intro">Book a Call</a></li>
            </ul>
          </div>
        </div>

        <div className="jrv-footer__bottom">
          <p>&copy; {year} JRV Systems. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
