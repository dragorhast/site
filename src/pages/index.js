import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'
import Layout from '../components/layout'
import Header from '../components/Header'
import Nav from '../components/Nav'
import pic01 from '../assets/images/pic01.jpg'

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stickyNav: false
    }
  }

  _handleWaypointEnter= () => {
    this.setState(() => ({ stickyNav: false }));
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }));
  }

  render() {

    return (
      <Layout>
        <Helmet title="Tap2Go" />

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        >
        </Waypoint>
        <Nav sticky={this.state.stickyNav} />

        <div id="main">

          <section id="intro" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>Tap2Go Bike Rental</h2>
                </header>
                <p>Tap2Go is a bike rental app that is bringing your commute to you, travel in <strong>comfort</strong>, <strong>safety</strong> and <strong>style</strong> while helping your <strong>health</strong>, <strong>environement</strong> and <strong>wallet</strong>.</p>
                <ul className="actions">
                  <li><Link to="/about" className="button">Learn More</Link></li>
                </ul>
              </div>
              <span className="image"><img src={pic01} alt="" /></span>
            </div>
          </section>

          <section id="features" className="main special">
            <header className="major">
              <h2>Features</h2>
            </header>
            <ul className="features">
              <li>
                <span className="icon major style1 fas fa-bicycle"></span>
                <h3>Quick Access</h3>
                <p>Just download the app, then tap and go.</p>
              </li>
              <li>
                <span className="icon major style3 far fa-credit-card"></span>
                <h3>Quick Payment</h3>
                <p>Pay, by the distance travelled, through the app once you reach your destination.</p>
              </li>
              <li>
                <span className="icon major style5 fas fa-globe"></span>
                <h3>Quick Drop-Off</h3>
                <p>No need to drop the bike off at a specified location, you can leave it in any suitible location once you reach your destination.</p>
              </li>
            </ul>
            <footer className="major">
              <ul className="actions">
                <li><Link to="/about" className="button">Learn More</Link></li>
              </ul>
            </footer>
          </section>

          <section id="started" className="main special">
            <header className="major">
              <h2>How You'll Get Started</h2>
            </header>
            <ul className="statistics">
              <li className="style1">
                <span className="icon fa fa-download"></span>
                  <strong>Download The App</strong>
              </li>
              <li className="style2">
                <span className="icon fas fa-check-circle"></span>
                <strong>Confirm a Bike Rental </strong> 
              </li>
              <li className="style3">
                <span className="icon fas fa-qrcode"></span>
                <strong>Use QR Code to Unlock Bike</strong>
              </li>
              <li className="style4">
                <span className="icon far fa-map"></span>
                <strong>Travel To Your Desired Destination</strong> 
              </li>
              <li className="style5">
                <span className="icon fa fa-minus-circle"></span>
                <strong>Leave Bike in Suitable Area</strong> 
              </li>
            </ul>
            <footer className="major">
              <ul className="actions">
                <li><Link to="/about" className="button">Learn More</Link></li>
              </ul>
            </footer>
          </section>

          <section id="download" className="main special">
            <header className="major">
              <h2>Download the App</h2>
              <p>Download the app, tap and go.</p>
            </header>
            <footer className="major">
              <ul className="actions">
                <li><Link to="https://l.messenger.com/l.php?u=https%3A%2F%2Fdocs.google.com%2Fuc%3Fexport%3Ddownload%26id%3D1QZZwXlHYEk8mB05QSANUWQQfOhl0_YPf&h=AT3YPrdIw6o-nKDzJqgPsiO9VzKd4M5XuwylSHR7CdMiMZ_BBlgg8gsZQgviwE-tQp3OYhq9NABAcSGEBOcKxOrA5JW73r3UL2HaEydEXAHLyF1anQvCZIokdc_cvE7jYvtL0192XRc" className="button special">Download</Link></li>
              </ul>
            </footer>
          </section>

        </div>

      </Layout>
    )
  }
}

export default Index
