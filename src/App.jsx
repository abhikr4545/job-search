import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Title from "./components/Title/Title";
import Main from "./pages/main/Main";

import "./app.scss";
import JobDescription from "./pages/JobDescription/JobDescription";

import { useGetJobsQuery } from "./services/jobsApi";

const App = () => {

  const [jobName, setJobName] = useState("React");

  // const { data, isLoading, error } = useGetJobsQuery(jobName);

  // if(isLoading) return <div>Loading...</div>

  // if (error) {
  //   console.log(error);
  // }

  // console.log(data);

  return (
    <div className="container">
      <Title />
      <Routes>
        <Route to="/">
          <Route index element={<Main />} />
          <Route path="/jobdescription/:id" element={<JobDescription />} />
        </Route>
      </Routes>      
    </div>
  )
}

export default App