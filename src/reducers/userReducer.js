import { createReducer } from "@reduxjs/toolkit";
import { BY_NAME, REPO, ORG } from "./actions/userActions";

const initState = {
  user: [],
  repos: [],
  orgs: [],
  loading: false,
};

export const userReducer = createReducer(initState, {
  [BY_NAME.pending]: (state, action) => {
    return {
      ...state,
      loading: true,
    };
  },
  [BY_NAME.fulfilled]: (state, action) => {
    return {
      ...state,
      loading: false,
      user: action.payload,
    };
  },
  [REPO.pending]: (state, action) => {
    return {
      ...state,
      loading: true,
    };
  },
  [REPO.fulfilled]: (state, action) => {
    return {
      ...state,
      loading: false,
      repos: action.payload,
    };
  },
  [ORG.pending]: (state, action) => {
    return {
      ...state,
      loading: true,
    };
  },
  [ORG.fulfilled]: (state, action) => {
    return {
      ...state,
      loading: false,
      orgs: action.payload,
    };
  },
});
