import { SortOrder } from "../../util/SortOrder";

export type ApplicationOrderByInput = {
  appliedAt?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  jobId?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
