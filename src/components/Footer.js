import React from 'react'



const Footer = (props) => (
    <footer id="footer">
        <section>
            <h2>Stay in the loop</h2>
            <p> As we are in development, follow us on Facebook, Twitter and Instagram to 
                keep up-to-date with all future developments, and tap in on our journey of
                revolutionising the way we travel.
            </p>
            <ul className="icons">
            <li><a href="#" className="icon fa-facebook alt"><span className="label">Facebook</span></a></li>
                <li><a href="#" className="icon fa-twitter alt"><span className="label">Twitter</span></a></li>
                <li><a href="#" className="icon fa-instagram alt"><span className="label">Instagram</span></a></li>
            </ul>
        </section>
        <section>
            <h2>Contact Us</h2>
            <dl className="alt">
                <dt>Address</dt>
                <dd>Heriot-Watt University &bull; Edinburgh &bull; Scotland &bull; EH14 4AS</dd>
                <dt>Phone</dt>
                <dd>0131 449 5111</dd>
                <dt>Email</dt>
                <dd><a href="#">contact@tap2go.co.uk</a></dd>
            </dl>
        </section>
        <p className="copyright">&copy;2018 Dragorhast, all rights reserved</p>
    </footer>
)

export default Footer
