import { JobCreateNestedManyWithoutCompaniesInput } from "./JobCreateNestedManyWithoutCompaniesInput";

export type CompanyCreateInput = {
  companyDescription?: string | null;
  companyName?: string | null;
  companyWebsite?: string | null;
  description?: string | null;
  jobListings?: string | null;
  jobs?: JobCreateNestedManyWithoutCompaniesInput;
  name?: string | null;
  website?: string | null;
};
