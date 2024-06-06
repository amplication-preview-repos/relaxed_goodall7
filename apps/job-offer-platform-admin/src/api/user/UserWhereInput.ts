import { ApplicationListRelationFilter } from "../application/ApplicationListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type UserWhereInput = {
  applications?: ApplicationListRelationFilter;
  appliedJobs?: StringNullableFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  role?: "Option1";
  username?: StringFilter;
};
