import { useState } from "react";
import ReactPaginate from "react-paginate";

import { GrNext, GrPrevious } from "react-icons/gr";

import JobCard from "../JobCard/JobCard";
import "./joblist.scss";

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

const JobList = () => {

  const [pageNumber, setPageNumber] = useState(0);

  const userPerPage = 10;
  const pageVisited = pageNumber * userPerPage;

  const displayJobs = nums.slice(pageVisited, pageVisited + userPerPage).map((job, index) => (
    <JobCard key={Math.random()} id={index} />
  ))

  const pageCount = Math.ceil(nums.length / userPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  }

  return (
    <section className="job-list">
      {displayJobs}
      <ReactPaginate
        previousLabel={<GrPrevious className="icon" />}
        nextLabel={<GrNext className="icon" />}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBtn"}
        previousLinkClassName={"previousBtn"}
        nextLinkClassName={"nextBtn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </section>
  )
}

export default JobList