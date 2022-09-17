import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const jobsApiHeader = {
  'X-RapidAPI-Key': process.env.REACT_APP_JOBS_API_KEY,
	'X-RapidAPI-Host': process.env.REACT_APP_JOBS_API_HOST
}

const baseUrl = `https://${process.env.REACT_APP_JOBS_API_HOST}`;

const createRequest = (url) => {
  console.log();
  return {
    url,
    headers: jobsApiHeader
  }
}

export const jobsApi = createApi({
  reducerPath: "jobsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getJobs: builder.query({
      query: (jobName) => createRequest(`/search?query=${jobName}&page=5&num_pages=1`)
    })
  })
})

export const { useGetJobsQuery } = jobsApi;