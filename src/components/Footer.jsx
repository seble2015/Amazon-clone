import { Link } from "react-router-dom";
import "./Footer.css";
import BackToTop from "../BackToTop";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__option">
        <h6 className="titel">Amazon Music</h6>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Careers</Link>
        <Link to="/contact">Press Releases</Link>
        <Link to="/contact">Amazon Cares</Link>
        <Link to="/contact">Gift a Smile</Link>
        <Link to="/contact">Connect with Us</Link>
        <Link to="/contact">Facebook</Link>
        <Link to="/contact">Instagram</Link>
      </div>
      <div className="footer__option">
        <h6 className="titel"> Amazon Business</h6>
        <Link to="/orders">Orders</Link>
        <Link to="/">Amazon Music</Link>
        <Link to="/">Amazon Advertising</Link>
        <Link to="/">Amazon Business</Link>
        <Link to="/">Amazon Fresh</Link>
        <Link to="/">Amazon Global</Link>
        <Link to="/">Amazon Ignite</Link>
        <Link to="/">Amazon Web Services</Link>
        <Link to="/">Audible</Link>
        <Link to="/">Book Depository</Link>
      </div>
      <div className="footer__option">
        <h6 className="titel"> Audible</h6>
        <Link to="/terms">Terms &amp; Conditions</Link>
        <Link to="/">Box Office Mojo</Link>
        <Link to="/">ComiXology</Link>
        <Link to="/">DPReview</Link>
        <Link to="/">Fabric</Link>
        <Link to="/">Goodreads</Link>
        <Link to="/">IMDb</Link>
        <Link to="/">IMDbPro</Link>
        <Link to="/">Kindle Direct Publishing</Link>
        <Link to="/">Amazon Photos</Link>
      </div>
      <div className="footer__option">
        <h6 className="titel"> Book reviews</h6>
        <Link to="/">Whole Foods Market</Link>
        <Link to="/">Woot!</Link>
        <Link to="/">Zappos</Link>
        <Link to="/">Ring</Link>
        <Link to="/">eero WiFi</Link>
        <Link to="/">Blink</Link>
        <Link to="/">Neighbors App</Link>
        <Link to="/">Amazon Subscription Boxes</Link>
        <Link to="/">PillPack</Link>
        <Link to="/">Amazon Renewed</Link>
      </div>
      <div className="footer__option">
        <h6 className="titel"> Smart Home</h6>
        <Link to="/terms">Terms &amp; Conditions</Link>
        <Link to="/">Woot!</Link>
        <Link to="/">Zappos</Link>
        <Link to="/">Ring</Link>
        <Link to="/">eero WiFi</Link>
        <Link to="/">Blink</Link>
        <Link to="/">Neighbors App</Link>
        <Link to="/">Amazon Subscription Boxes</Link>
        <Link to="/">PillPack</Link>
        <Link to="/">Amazon Renewed</Link>
      </div>
      <div className="footer__option">
        <h6 className="titel"> Smart Home</h6>
        <Link to="/terms">Terms Conditions</Link>
        <Link to="/sitemap">Amazon and COVID-19</Link>
        <Link to="/sitemap">Your Account</Link>
        <Link to="/sitemap">Your Orders</Link>
        <Link to="/sitemap">Shipping Rates & Policies</Link>
        <Link to="/sitemap">Amazon Prime</Link>
        <Link to="/sitemap">Manage Your Content and Devices</Link>
        <Link to="/sitemap">Your Recalls and Product Safety Alerts</Link>
        <Link to="/sitemap">Help</Link>
      </div>

      <div className="footer-links">
        <img
          className="footer__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon-log"
        />

        <Link to="/">Conditions of Use</Link>
        <Link to="/">Privacy Notice</Link>
        <Link to="/">Interest-Based Ads</Link>
        <Link to="/">© 1996-2023, Amazon.com, Inc. or its affiliates.</Link>
       
        <h5>
          Built By:
          <a href="https://www.sebleethio.com/">Seblewongel Tiruneh</a>
        </h5>
      </div>
    </div>
  );
}

export default Footer;
