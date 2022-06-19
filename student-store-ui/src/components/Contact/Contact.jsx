import person from "../../assets/person.svg"
import "./Contact.css"

export default function Contact() {

    return(

        <div id="Contact" className="contact">

            <div className="content">
                <h3>Contact Us!</h3>

                <div className="summary">
                    <ul className="info">

                        <li>
                            <span className="label">
                                Email
                                :
                            </span>
                            <span>code@path.org</span>
                        </li>

                        <li>
                            <span className="label">
                                Phone
                                :
                            </span>
                            <span>1-800-CODEPATH</span>
                        </li>

                        <li>
                            <span className="label">
                                Address
                                :
                            </span>
                            <span>123 Fake Street, San Francisco, CA </span>
                        </li>

                        <li>
                            <span>Socials:</span>

                            <span className="socials">🐥&nbsp;&nbsp;&nbsp;📸&nbsp;&nbsp;&nbsp;F</span>
                        </li>

                    </ul>

                    <div className="media">
                        <img src={person} alt="Happy Person" />
                    </div>

                </div>
            </div>


        </div>
    )


}