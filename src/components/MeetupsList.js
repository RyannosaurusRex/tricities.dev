import React from 'react'
import Link from 'gatsby-link'
import MeetupPreview from '../components/MeetupPreview'

const MeetupsList = (props) => (
    <div>
        {
            props.meetups.map((meetup) => {return <MeetupPreview meetup={meetup} key={meetup}/>})
        }
    </div>
)

export default MeetupsList


