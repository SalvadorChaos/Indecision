import React from 'react';

const Footer = (props) => (
  <div className="footer">
    <p className="footer__tag">
      {props.footer}
      <a className="footer__link" href="http://www.twitter.com/SalvadorChaos">
        @SalvadorChaos
      </a>
    </p>
  </div>
);

export default Footer;