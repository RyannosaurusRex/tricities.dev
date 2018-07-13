import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import BannerLanding from '../components/BannerLanding'

import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'

const Meetups = (props) => (
    <div>
        <Helmet>
            <title>Developer and Designer Meetups in Tri-Cities, TN</title>
            <meta name="description" content="Landing Page" />
        </Helmet>

        <BannerLanding title="Meetups" description="Some desc."  />

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>Join a Meetup!</h2>
                    </header>
                    <p>Whatever you're ineterested in, there's a local meetup for you.</p>
                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <Link to="/generic" className="image">
                        <img src={pic08} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>TriDev</h3>
                            </header>
                            <p>TriDev is the flagship meetup for all developers, designers, and dev-based entrepreneurs in the Tri-Cities. </p>
                            <p></p>
                            <ul className="actions">
                                <li><a href="https://meetup.com/TriDev" className="button">RSVP on Meetup.com</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/generic" className="image">
                        <img src={pic09} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>TriPy</h3>
                            </header>
                            <p>Regardless of if you've never worked with the Python programming language before or if you consider yourself an expert, we are confident that there will be something for everyone.</p>
                            <ul className="actions">
                                <li><a href="https://www.meetup.com/meetup-group-rycviEtv/" className="button">RSVP on Meetup.com</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/generic" className="image">
                        <img src={pic10} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Johnson City Wordpress</h3>
                            </header>
                            <p>We're a group of local WordPress developers, designers, and publishers who get together to share our knowledge and experience, and to meet other WordPress users in the area. This WordPress Meetup is open to all who love WordPress --- join us!</p>
                            <ul className="actions">
                                <li><a href="https://www.meetup.com/Johnson-City-WordPress-Meetup/" className="button">RSVP on Meetup.com</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </div>
)

export default Meetups