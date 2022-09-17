import { configureStore } from "@reduxjs/toolkit";
import { jobsApi } from "../services/jobsApi";

export const store = configureStore({
  reducer: {
    [jobsApi.reducerPath]: jobsApi.reducer
  },

  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(jobsApi.middleware)
})