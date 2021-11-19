import { combineReducers } from "redux";
import auth from "./auth";
import errors from "./errors";
import { addProjects, searchNameQuery } from "./projects";
export default combineReducers({
  auth,
  errors,
  addProjects,
  searchNameQuery,
});
