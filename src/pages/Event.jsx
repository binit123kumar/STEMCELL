import React from "react";
import "../Styles/Event.css";
import Event1 from '../Assests/Event1.png'
import Event2 from '../Assests/Event2.png'
import Event3 from '../Assests/Event3.jpg'
import Event4 from '../Assests/Event4.jpg'
import Event5 from '../Assests/Event5.jpg'
import Event6 from '../Assests/Event6.jpg'
import Event7 from '../Assests/Event7.jpg'
import Event8 from '../Assests/Event8.jpg'

function Event() {
  return (
    <>
      <h1 className="Event-Heading">
        Events
      </h1>
      <br />
      <br />
      <div className="container">
        <h1 className="head-tag">School of Stem Cell Technology</h1>
        <hr />
        <h2 className="head-tag">Event Details</h2>
        <p className="event-paragraph">
          We will collaborate with hospitals, biotech companies, and research centers to translate lab-based findings into clinical applications. Internship programs, industrial training, and clinical exposure are integral to the curriculum.
        </p>
        <img className="img-active" src={Event1} alt="Event" />
        <br />
        <p className="event-paragraph"  >
          MoU signed between Aryabhatta Knowledge University and D. Y. Patil International University, Pune on 11.07.2025
        </p>
        <img className="img-active" src={Event2} alt="Event" />
        <br />
        {/* Uncomment the following sections if needed */}
        {/* <img className="img-active" src={Event3} alt="Event" /> */}
      </div>
      <br />
      <br />
      {/* Uncomment the following sections if needed */}
      {/*
      <div className="container">
        <h1 className="head-tag">National Service Scheme(NSS) </h1>
        <hr />
        <h2 className="head-tag">Event Details</h2>
        <p className="event-paragraph">
          National Service Scheme(NSS) program has been organised in this students have participated-:
        </p>
        <img className="img-active" src={Event4} alt="Event" />
        <br />
        <img className="img-active" src={Event5} alt="Event" />
        <br />
        <img className="img-active" src={Event6} alt="Event" />
      </div>
      <br />
      <br />
      <div className="container">
        <h1 className="head-tag">1st Academic Advisory Committee</h1>
        <hr />
        <h2 className="head-tag">Event Details</h2>
        <p className="event-paragraph">
          1st Academic Advisory Committee of Centre for River Studies was organised on 30th March 2024 in which members of the committee has participated for the discussion on academic affairs of the centre.
        </p>
        <img className="img-active" src={Event7} alt="Event" />
        <br />
        <img className="img-active" src={Event8} alt="Event" />
      </div>
      */}
    </>
  );
}

export default Event;