import { JobUpdateManyWithoutCompaniesInput } from "./JobUpdateManyWithoutCompaniesInput";

export type CompanyUpdateInput = {
  companyDescription?: string | null;
  companyName?: string | null;
  companyWebsite?: string | null;
  description?: string | null;
  jobListings?: string | null;
  jobs?: JobUpdateManyWithoutCompaniesInput;
  name?: string | null;
  website?: string | null;
};
