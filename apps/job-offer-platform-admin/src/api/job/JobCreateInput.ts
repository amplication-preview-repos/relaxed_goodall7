import { ApplicationCreateNestedManyWithoutJobsInput } from "./ApplicationCreateNestedManyWithoutJobsInput";
import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";

export type JobCreateInput = {
  applications?: ApplicationCreateNestedManyWithoutJobsInput;
  company?: CompanyWhereUniqueInput | null;
  description?: string | null;
  location?: string | null;
  salary?: number | null;
  title?: string | null;
};
