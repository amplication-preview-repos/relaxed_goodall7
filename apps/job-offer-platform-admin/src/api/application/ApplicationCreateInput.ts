import { JobWhereUniqueInput } from "../job/JobWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ApplicationCreateInput = {
  appliedAt?: Date | null;
  job?: JobWhereUniqueInput | null;
  status?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
