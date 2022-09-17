import { useState } from "react";
import { Link } from "react-router-dom";

import { HiArrowNarrowLeft } from "react-icons/hi";
import { AiOutlineClockCircle } from "react-icons/ai";
import { IoEarth } from 'react-icons/io5';

import "./jobdescription.scss";

const JobDescription = () => {

  const [isActive, setIsActive] = useState(false);

  const para = `Humanizing Digital Experiences®

  Kasisto’s Digital Experience Platform, KAI, is designed for financial institutions to deliver the industry’s most amazing Conversational AI powered intelligent virtual assistants to their customers. KAI is open and extensible, and also fluent in the language of banking and finance. From simple retail transactions to the complex demands of corporate banks and wealth management, financial institutions can deliver meaningful digital interactions with KAI that help build their digital brand.

  Financial institutions around the world use KAI, including DBS Bank, J.P. Morgan, Mastercard, Standard Chartered, TD Bank, and Manulife Bank among others. They chose KAI for its proven track record to drive business results while improving customer experiences. The platform is used by millions of consumers around the world, all the time, across multiple channels, in different languages, and is optimized for performance, scalability, security, and compliance.

  This position

  We are looking for a Full-Stack, client side software engineer to help build and integrate responsive chat interfaces, analytics dashboards and reporting tools.

  What you’ll be doing

  Working closely with clients and internal engineering, product and design teams to gather requirements Building and integrating front-end applications with CSS, HTML, Javascript, jQuery, Vue.js, Webpack, Handlebars.js, LESS, Backbone, Python, Django and Java Working to improve user experience and functionality for tools Writing testable code utilizing common front-end unit and BDD testing frameworks What you need for this position

  3+ years in client-side web development with CSS, HTML, Javascript and jQuery Proven, full-stack front-end experience using Python and Django Other Modern Web Framework(s) experience is a plus (React, Vue, Angular, Ember) Experience working collaboratively to build scalable, modular, production software in an Agile environment Experience using RESTful json services Node.js and API development familiarity is plus D3.js is a plus

  What we offer:

  Competitive compensation package Ground floor opportunity within rapidly growing tech startup Great collaborative team environment Full Benefits Fun perks

  Location - NYC, Flatiron District

  We welcome your cover letter with a description of your previous complete experience and your resume. Applicants must be authorized to work in the US as we are unable to sponsor. Kasisto is an equal opportunity employer.`;
  
  const para2 = para.split("\n");

  const handleEmailClick = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(e.target.innerText);
    setIsActive(true);

    setTimeout(() => {
      setIsActive(false);
    }, 2000);
  }

  return (
    <section className="job-description">
      <div className={`notification ${isActive ? "active" : ""}`}>Email Copied</div>
      <aside className="job-application">
        <Link to="/" className="link">
          <HiArrowNarrowLeft />
          <p>Back To search</p>
        </Link>
        <div className="apply">
          <h4 className="title">How to Apply</h4>
          <p className="info">
            Please email a copy of your resume and online portfolio to <span onClick={handleEmailClick} className="email">wes@kasisto.com</span> & CC <span onClick={handleEmailClick} className="email">eric@kasisto.com</span>
          </p>
        </div>
      </aside>
      <div className="job-description-container">
        <div className="job-details">
          <div className="job-name">
            <h4>Front-End Software Engineer</h4>
          </div>
          <div className="job-type">Full Time</div>
          <div className="time">
            <AiOutlineClockCircle className="icon" />
            <p className="post-time">5 days ago</p>
          </div>
        </div>
        <div className="company-description">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Gerson_Lehrman_Group_%28GLG%29_Logo.png/250px-Gerson_Lehrman_Group_%28GLG%29_Logo.png" alt="" className="logo" />
          <div className="company-info">
            <h4 className="company-title">Kasito</h4>
            <div className="location">
              <IoEarth className="icon" />
              <p>New York</p>
            </div>
          </div>
        </div>
        <div className="job-info">
          {
            para2.map((text) => (
              <p key={Math.random()}>{ text } <br /></p>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default JobDescription