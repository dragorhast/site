import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import HeaderTeam from '../components/HeaderTeam'
import pic03 from '../assets/images/pic03.jpg'
import pic02 from '../assets/images/pic02.jpg'



class Team extends React.Component {
  render() {

    return (
      <Layout>
        <Helmet title="Team" />
        <HeaderTeam />

        <div id="main">
          
        <section id="team" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>Alex - Developer</h2>
                </header>
                </div> 
               <span className="image"><img src={pic03} alt="" /></span>
            </div>
          </section>

          <section id="team" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>Fraser - Developer</h2>
                </header>
                </div> 
               <span className="image"><img src={pic02} alt="" /></span>
            </div>
          </section>

          <section id="team" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>Nathan - Developer/Designer</h2>
                </header>
                </div> 
               <span className="image"><img src={pic03} alt="" /></span>
            </div>
          </section>

          <section id="team" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>Sean - Developer/Designer</h2>
                </header>
                </div> 
               <span className="image"><img src={pic02} alt="" /></span>
            </div>
          </section>

          <section id="team" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>Sebastian - Developer</h2>
                </header>
                </div> 
               <span className="image"><img src={pic03} alt="" /></span>
            </div>
          </section>

          <section id="team" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>Zac - Designer/Marketing</h2>
                </header>
                </div> 
               <span className="image"><img src={pic02} alt="" /></span>
            </div>

          <footer id="content" className="main special">
              <ul className="actions">
                <li><Link to="/" className="button">Homepage</Link></li>
                <li><Link to="/about" className="button">About</Link></li>
              </ul>
            </footer>
          </section>

          

          

        </div>
      </Layout>
    )
  }
}

export default Team