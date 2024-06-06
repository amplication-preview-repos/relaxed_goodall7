import { SortOrder } from "../../util/SortOrder";

export type CompanyOrderByInput = {
  companyDescription?: SortOrder;
  companyName?: SortOrder;
  companyWebsite?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  jobListings?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
  website?: SortOrder;
};
