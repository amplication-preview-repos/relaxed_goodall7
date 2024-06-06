import { ApplicationUpdateManyWithoutJobsInput } from "./ApplicationUpdateManyWithoutJobsInput";
import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";

export type JobUpdateInput = {
  applications?: ApplicationUpdateManyWithoutJobsInput;
  company?: CompanyWhereUniqueInput | null;
  description?: string | null;
  location?: string | null;
  salary?: number | null;
  title?: string | null;
};
