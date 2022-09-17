import { Link } from 'react-router-dom';
import { IoEarth } from 'react-icons/io5';
import { AiOutlineClockCircle } from 'react-icons/ai';


import "./jobcard.scss";

const JobCard = ({ id }) => {
  return (
    <Link to={`/jobdescription/${43}`} className="link">
      <article className="job-card">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Gerson_Lehrman_Group_%28GLG%29_Logo.png/250px-Gerson_Lehrman_Group_%28GLG%29_Logo.png" alt="" className="logo" />
        <div className="job-details-container">
          <div className="job-details">
            <h4 className="company-name">Kasisto</h4>
            <h2 className="job-title">Front-End Software Engineer</h2>
          </div>
          <div className="bottom">
            <div className="job-type">Full Time</div>
            <div className="job-location">
              <div className="location">
                <IoEarth className="icon" />
                <p>New York</p>
              </div>
              <div className="time">
                <AiOutlineClockCircle className="icon" />
                <p>5 days ago</p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Link>  
  )
}

export default JobCard