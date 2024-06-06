import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JobListRelationFilter } from "../job/JobListRelationFilter";

export type CompanyWhereInput = {
  companyDescription?: StringNullableFilter;
  companyName?: StringNullableFilter;
  companyWebsite?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  jobListings?: StringNullableFilter;
  jobs?: JobListRelationFilter;
  name?: StringNullableFilter;
  website?: StringNullableFilter;
};
