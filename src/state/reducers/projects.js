import { SET_PROJECT_QUERY_NAME, ADD_PROJECTS } from "../actions/types";

export const addProjects = (state = {}, action) => {
  switch (action.type) {
    case ADD_PROJECTS:
      return (state = action.payload);
    default:
      return state;
  }
};

export const searchNameQuery = (state = "", action) => {
  switch (action.type) {
    case SET_PROJECT_QUERY_NAME:
      return (state = action.payload);
    default:
      return state;
  }
};
