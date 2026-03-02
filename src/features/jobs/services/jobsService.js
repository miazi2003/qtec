import axiosInstance from "@/shared/api/axios";

export const getJobs = async () => {
  const { data } = await axiosInstance.get("/jobs");
  return data;
};

export const getJobById = async (jobId) => {
  const { data } = await axiosInstance.get(`/jobs/${jobId}`);
  return data;
};

export const createJob = async (payload) => {
  const { data } = await axiosInstance.post("/jobs", payload);
  return data;
};

export const deleteJob = async (jobId) => {
  const { data } = await axiosInstance.delete(`/jobs/${jobId}`);
  return data;
};

export const submitJobApplication = async (payload) => {
  const { data } = await axiosInstance.post("/applications", payload);
  return data;
};
