import React from 'react'
import Link from 'gatsby-link'

import pic08 from '../assets/images/pic08.jpg'

const MeetupPreview = (props) => (
    <section>
        <Link to={props.meetup.frontmatter.path} className="image">
            <img src={pic08} alt="" />
        </Link>
        <div className="content">
            <div className="inner">
                <header className="major">
                    <h3>{props.meetup.frontmatter.title}</h3>
                </header>
                <p>{props.meetup.frontmatter.summary}</p>
                <ul className="actions">
                    <li>
                        <a href={props.meetup.frontmatter.meetupUrl} className="button">RSVP</a>
                    </li>
                </ul>
            </div>
        </div>
    </section>
)

export default MeetupPreview
