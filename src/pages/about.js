import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import HeaderAbout from '../components/HeaderAbout'
import pic04 from '../assets/images/pic04.jpg'

class About extends React.Component {
  render() {

    return (
      <Layout>
        <Helmet title="About" />
        <HeaderAbout />

        <div id="main">

        <section id="features" className="main special">
          <span className="image main"><img src={pic04} alt="" /></span>
            <ul className="features">
              <h2>Aim</h2>
              <p>At Tap2Go we want to revolutionise the way people can travel in the city. Creating
                a rental bike app that will allow users to request the bike to a drop-off location, instead
                of the common pick-up-point. Using our innovative pricing system, the app will reward users
                for dropping the bike off in high demand areas, but a penalty may incur if the bike is dropped
                off in low demand areas. This system allows the bikes to be free from any dock, and stay in a 
                constant flow of use. 
              </p>
            <ul>
              <h2>Features</h2>
              <p>The features that we are implementing will help to provide the seamless service that we believe 
                is the future of the micro-mobility industry. The customer will be able to unlock, reserve and 
                cancel rentals of a bike through the app. They should also be able to report any damage to the bike,
                this will help us to repair any bikes as quick as possible to, keep the number of bikes available up, 
                allowing for our seamless system to continue. 
                </p>
                <p>Once the customer is on the bike they can then cycle anywhere, 
                although they are encouraged to drop the bike off at an in-demand zone once they are finished with the bike. 
                There will be a wallet on the app that the customer will fund, this will be how the customer is charged
                for their use of the rental.  
              </p>
            </ul>
            <ul>
              <h2>Getting Started</h2>
              <p>Once you have the app downloaded, create an account and reserve a bike in a pick up point of your choice.
                Make sure you fund your in app wallet as this is where the charge for the rental will be processed.  
                Once you have the bike, scan the QR code on the bike to unlock it. You can now use the bike to cycle anywhere
                you want. When you want to end the bike rental, make sure you are in the boundaries of your chosen drop-off zone,
                then go to the app and select "End Rental". The bike will then lock and be availablefor someone to then rent. 
              </p>
            </ul>
            </ul>
           </section>

          <section id="Meet the Team" className="main special">
            <header className="major">
              <h2>Meet The Team</h2>
            </header>
            <ul className="statistics">
              <li className="style1">
                <span className="icon fas fa-user"></span>
                  <strong>Alex</strong>
              </li>
              <li className="style2">
                <span className="icon fas fa-user"></span>
                <strong>Fraser</strong> 
              </li>
              <li className="style3">
                <span className="icon fas fa-user"></span>
                <strong>Nathan</strong>
              </li>
              <li className="style4">
                <span className="icon fas fa-user"></span>
                <strong>Sean</strong> 
              </li>
              <li className="style5">
                <span className="icon fas fa-user"></span>
                <strong>Sebastian</strong> 
              </li>
              <li className="style1">
                <span className="icon fas fa-user"></span>
                <strong>Zac</strong> 
              </li>
            </ul>
            <footer className="major">
              <ul className="actions">
                <ul><Link to="/team" className="button">Learn More</Link></ul>
                <ul><Link to="/" className="button">Homepage</Link></ul>
              </ul>
            </footer>
            </section>
           
        </div>
      </Layout>
    )
  }
}

export default About
