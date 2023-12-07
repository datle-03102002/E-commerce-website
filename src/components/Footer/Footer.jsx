import React from "react";
import { FaLocationDot, FaEnvelope, FaPhone, FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6"
const Footer = () => {
    return (
        <>
            <footer id="footer" className="footer">
                <div className="container">
                    <div className="row gy-3">
                        <div className="col-lg-3 col-md-6 d-flex">
                            <i className="bi bi-geo-alt icon"></i>
                            <div>
                                <h4>Address</h4>
                                <p>
                                    <FaLocationDot />
                                    Phương Canh, Nam Từ Liêm, Hà Nội
                                </p>
                            </div>

                        </div>

                        <div className="col-lg-3 col-md-6 footer-links d-flex">
                            <i className="bi bi-telephone icon"></i>
                            <div>
                                <h4>Reservations</h4>
                                <p>
                                    <strong><FaPhone />Phone:</strong>0346531944 <br />
                                    <strong><FaEnvelope />Email:</strong> levanducdat2002@gmail.com<br />
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 footer-links d-flex">
                            <i className="bi bi-clock icon"></i>
                            <div>
                                <h4>Opening Hours</h4>
                                <p>
                                    <strong>Mon-Sat: 11AM</strong> - 23PM<br />
                                    Sunday: Closed
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>Follow Us</h4>
                            <div className="social-links d-flex">
                                <a href="#" className="twitter mx-1"><FaTwitter /></a>
                                <a href="#" className="facebook mx-1"><FaFacebook /></a>
                                <a href="#" className="instagram mx-1"><FaInstagram /></a>
                                <a href="#" className="linkedin mx-1"><FaLinkedin /></a>
                            </div>
                        </div>

                    </div>
                </div>
            </footer >

        </>
    )
}
export default Footer;