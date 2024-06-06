import { Application } from "../application/Application";
import { JsonValue } from "type-fest";

export type User = {
  applications?: Array<Application>;
  appliedJobs: string | null;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  role?: "Option1" | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
