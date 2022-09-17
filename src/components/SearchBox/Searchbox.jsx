import { useEffect, useState } from "react";
import { BsBriefcase } from "react-icons/bs";

import jobData from "../../assets/job_data.json";

import "./searchbox.scss";

const Searchbox = ({ makeSearchTerm }) => {

  const [showSearchResult, setShowSearchResult] = useState(false);
  const [jobsList, setJobsList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (!searchTerm) return;

    console.log(searchTerm);
    makeSearchTerm(searchTerm);
  }

  useEffect(() => {
    const jobResult = jobData.filter((job) => (
      job.name.toLowerCase().includes(searchTerm.toLowerCase())
    ))

    const uniqueJobs = [...new Set(jobResult.map(job => job.name))];

    setJobsList(uniqueJobs);

    if (searchTerm) {
      setShowSearchResult(true)
    } else {
      setShowSearchResult(false)
    }
  }, [searchTerm])

  const handleSearchSuggestion = (e) => {
    setSearchTerm(e.target.innerText);
  }

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  }

  const handleSearchResult = () => {
    setTimeout(() => {
      setShowSearchResult(false);
    }, 200)
  }

  return (
    <article className="search-box">
      <div className="search-container">
        <div className="icon-placeholder-container">
          <BsBriefcase className="icon" />
          <input type="text" className="search-text" onBlur={handleSearchResult} value={searchTerm} placeholder="Title, companies, expertise or benefits" onChange={handleSearchChange} />
        </div>
        <button onClick={handleSearchSubmit} className="search-button">Search</button>
        {
          showSearchResult && <div className="search-result">
            {jobsList.map((job) => <div onClick={handleSearchSuggestion} key={Math.random()}>{ job }</div>)}
        </div>
        }
      </div>
    </article>
  )
}

export default Searchbox