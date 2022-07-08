import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h4>company</h4>
            <ul>
              <li>
                <a href="#">about us</a>
              </li>
              <li>
                <a href="#">our services</a>
              </li>
              <li>
                <a href="#">privacy policy</a>
              </li>
              <li>
                <a href="#">format</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>get help</h4>
            <ul>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Video Converter</a>
              </li>
              <li>
                <a href="#">Audio Converter</a>
              </li>
              <li>
                <a href="#">Document Converter</a>
              </li>
              <li>
                <a href="#">Image Converter</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Developers API</h4>
            <ul>
              <li>
                <a href="#">API Docs</a>
              </li>
              <li>
                <a href="#">CLI Docs</a>
              </li>
              <li>
                <a href="#">API Pricing</a>
              </li>
              <li></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>follow us</h4>
            <div className="social-links">
              <a
                target="_blank"
                href="https://www.facebook.com/profile.php?id=100009656251761"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://github.com/nguyenminhdoan" target="_blank">
                <i className="fab fa-github"></i>
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/minh-doan-nguyen-03031998/"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          color: "#fff",
          marginTop: "30px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "13px",
        }}
      >
        © make by Nguyen Minh Doan for SIC Challenge. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
