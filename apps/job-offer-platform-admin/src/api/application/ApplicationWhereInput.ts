import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JobWhereUniqueInput } from "../job/JobWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ApplicationWhereInput = {
  appliedAt?: DateTimeNullableFilter;
  id?: StringFilter;
  job?: JobWhereUniqueInput;
  status?: "Option1";
  user?: UserWhereUniqueInput;
};
