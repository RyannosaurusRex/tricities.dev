import React from 'react'
import Helmet from 'react-helmet'
import BannerLanding from '../components/BannerLanding'
import MeetupPreview from '../components/MeetupPreview'
import MeetupsList from '../components/MeetupsList'
import _ from 'lodash'
import array from '../helpers/ensure-array'

const Meetups = (props) => (
    
    <div>
        <Helmet>
            <title>Developer and Designer Meetups in Tri-Cities, TN</title>
            <meta name="description" content="Landing Page" />
        </Helmet>
        <BannerLanding title="Meetups" description="Some desc." />
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
                <MeetupsList meetups={array(props.data.markdownRemark)} />
            </section>
        </div>
    </div>
)

export default Meetups

export const pageQuery = graphql`
  query MeetupPageQuery {
    site {
        siteMetadata {
          title
          author
        }
      }
      markdownRemark(frontmatter: { type: { eq: "meetup" } }) {
        id
        html
        frontmatter {
          title
          path
          profilePhotoUrl
          type
          summary
          meetupUrl
          date(formatString: "MMMM DD, YYYY")
        }
      }
  }
`