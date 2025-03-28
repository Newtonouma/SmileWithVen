import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            {/* Main Footer Content - 4 columns in one row */}
            <div className="footer-top">
                {/* Column 1: About */}
                <div className="footer-section about">
                    <h2>Smile With Ven</h2>
                    <p>
                        A non-profit volunteer organization dedicated to lifting spirits 
                        and spreading smiles through various family programs.
                    </p>
                </div>

                {/* Column 2: Quick Links */}
                <div className="footer-section links">
                    <h2>Quick Links</h2>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Programs</a></li>
                        <li><a href="#">Get Involved</a></li>
                    </ul>
                </div>

                {/* Column 3: Contact Info */}
                <div className="footer-section contact">
                    <h2>Contact Us</h2>
                    <p><span>Email:</span> contact@smilewithven.org</p>
                    <p><span>Phone:</span> (123) 456-7890</p>
                    <p><span>Address:</span> 123 Smile Street, USA</p>
                </div>

                {/* Column 4: Message Form - now aligned horizontally */}
                <div className="footer-section message-form">
                    <h2>Send Message</h2>
                    <form>
                        <input type="text" placeholder="Your Name" />
                        <input type="email" placeholder="Your Email" />
                        <textarea placeholder="Your Message"></textarea>
                        <button type="submit">Send</button>
                    </form>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Smile With Ven. All rights reserved.<br></br> Built and Maintained by Newton</p>
            </div>
        </footer>
    );
}

export default Footer;