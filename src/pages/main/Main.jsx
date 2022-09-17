import { useState } from "react";

import JobContainer from "../../components/JobContainer/JobContainer";
import Searchbox from "../../components/SearchBox/Searchbox";

import { useGetJobsQuery } from "../../services/jobsApi";

import "./main.scss";

const Main = () => {

  const [searchQuery, setSearchQuery] = useState(null);

  const { isLoading } = useGetJobsQuery(searchQuery);

  if(isLoading) return <div>Loading...</div>

  const makeSearchTerm = (job) => {
    setSearchQuery(job)
  }

  return (
    <main className="main">
      <Searchbox makeSearchTerm={makeSearchTerm} />
      <JobContainer />
    </main>
  )
}

export default Main