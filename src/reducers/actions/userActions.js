import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const BY_NAME = createAsyncThunk("BY_NAME", async (user) => {
  const r = await axios.get(`https://api.github.com/users/${user}`);
  return r.data;
});

export const REPO = createAsyncThunk("REPO", async (user) => {
  const r = await axios.get(`https://api.github.com/users/${user}/repos`);
  return r.data;
});

export const ORG = createAsyncThunk("ORG", async (user) => {
  const r = await axios.get(`https://api.github.com/users/${user}/orgs`);
  return r.data;
});
