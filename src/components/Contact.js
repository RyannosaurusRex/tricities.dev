import React from 'react'

const Contact = (props) => (
    <section id="contact">
        <div className="inner">
            <section>
                <form name="contact" netlify>
                    <div className="field half first">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" />
                    </div>
                    <div className="field half">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" id="email" />
                    </div>
                    <div className="field">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" rows="6"></textarea>
                    </div>
                    <ul className="actions">
                        <li><button type="submit" value="Send Message" className="special">Send Message</button></li>
                    </ul>
                </form>
            </section>
            <section className="split">
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-slack"></span>
                        <h3><a href="https://tridevs.herokuapp.com">TriDevs on Slack!</a></h3>
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-group"></span>
                        <h3><a href="https://meetup.com/tridev">Meetup.com</a></h3>
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-home"></span>
                        <h3>Address</h3>
                    </div>
                </section>
            </section>
        </div>
    </section>
)

export default Contact
