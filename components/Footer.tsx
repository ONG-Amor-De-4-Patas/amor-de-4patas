import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-row">

          <div className="footer-col">
            <h6>Logo</h6>
            <ul className="footer-links">
              <li><a href="#">English</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Contribute</a></li>
              {/* <li><a href="privacy-policy/">Privacy Policy</a></li>
              <li><a href="sitemap/">Sitemap</a></li> */}
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-container footer-bottom-border">
        <div className="footer-row">
          <div className="footer-col">
            <p className="copyright-text">Copyright &copy; 2017 All Rights Reserved by 
         <a href="#"> Amor de 4 Patas</a>.
            </p>
          </div>

          <div className="footer-col">
            <ul className="footer_social-icons">
              <li>
                <a 
                  className="instagram" 
                  target="_blank"
                  rel="noopener noreferrer" 
                  href="https://www.instagram.com/__amorde4patas/?hl=pt"
                >
                    <FontAwesomeIcon icon={faInstagram}/>
                </a>
              </li> 
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer