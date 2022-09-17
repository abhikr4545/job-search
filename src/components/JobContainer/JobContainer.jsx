import JobList from "../JobList/JobList";
import JobLocation from "../JobLocation/JobLocation";

import "./jobcontainer.scss";

const JobContainer = () => {
  return (
    <section className="job-container">
      <JobLocation />
      <JobList />
    </section>
  )
}

export default JobContainer