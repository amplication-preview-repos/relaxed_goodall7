import { Job } from "../job/Job";

export type Company = {
  companyDescription: string | null;
  companyName: string | null;
  companyWebsite: string | null;
  createdAt: Date;
  description: string | null;
  id: string;
  jobListings: string | null;
  jobs?: Array<Job>;
  name: string | null;
  updatedAt: Date;
  website: string | null;
};
