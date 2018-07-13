import React from 'react'
import Link from 'gatsby-link'
import MeetupPreview from '../components/MeetupPreview'

const MeetupsList = (props) => (
    <section id="two" className="spotlights">
        {
            props.meetups.map((meetup) => {return <MeetupPreview meetup={meetup} key={meetup}/>})
        }
    </section>
)

export default MeetupsList