const Footer = () => {
    return (
        <>
            <footer id="footer" className="footer light-background">

                <div className="container footer-top">
                    <div className="row gy-4">
                        <div className="col-lg-5 col-md-12 footer-about">
                            <a href="#" className="logo d-flex align-items-center">
                                <span className="sitename">Dupod Digital App Store</span>
                            </a>
                            <p>Our platform simplifies apps management with intuitive tools for seamless collaboration, efficient workflows, and real-time tracking—designed to enhance productivity and ensure project success.</p>
                            <div className="social-links d-flex mt-4">
                                <a href="#"><i className="bi bi-twitter-x"></i></a>
                                <a href="#"><i className="bi bi-facebook"></i></a>
                                <a href="#"><i className="bi bi-instagram"></i></a>
                                <a href="#"><i className="bi bi-linkedin"></i></a>
                            </div>
                        </div>

                        <div className="col-lg-2 col-6 footer-links">
                            <h4>Useful Links</h4>
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About us</a></li>
                                <li><a href="#">Services</a></li>
                                <li><a href="#">Terms of service</a></li>
                                <li><a href="#">Privacy policy</a></li>
                            </ul>
                        </div>

                        <div className="col-lg-2 col-6 footer-links">
                            <h4>Our Services</h4>
                            <ul>
                                <li><a href="#">Contracts Manager</a></li>
                                <li><a href="#">Pod Manager</a></li>
                                <li><a href="#">RFI Manager</a></li>
                                <li><a href="#">Material Submittal</a></li>
                                <li><a href="#">Assets Manager</a></li>
                                <li><a href="#">Planning Manager</a></li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
                            <h4>Contact Us</h4>
                            <p>Dubai Industrial City</p>
                            <p>Dubai</p>
                            <p>United Arab Emirates</p>
                            <p className="mt-4"><strong>Phone:</strong> <span>+971 4 575 4794</span></p>
                            <p><strong>Email:</strong> <span>contactus@dupod.com</span></p>
                        </div>

                    </div>
                </div>

                <div className="container copyright text-center mt-4">
                    <p>© <span>Copyright</span> <strong className="px-1 sitename">DuPod</strong> <span>All Rights Reserved</span></p>

                </div>

            </footer>


            <a href="#" id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>



        </>
    );
};

export default Footer;
