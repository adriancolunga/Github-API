import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { BY_NAME } from "../reducers/actions/userActions";
import UserDetails from "./UserDetails";

// INPUT
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";


import CircularProgress from "@mui/material/CircularProgress";

// BUTTON
import Button from "@mui/material/Button";
import { Container } from "@mui/material";

export default function Search() {
  const dispatch = useDispatch();
  const [user, setUser] = useState("");
  const loading = useSelector(({ users }) => users.loading);

  const handleInput = (e) => {
    setUser(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(BY_NAME(user));
  };

  return (
    <Container
      sx={{ width: 500, mt: 5, display: "flex", flexDirection: "column" }}
    >
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch", ml: 15 },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSearch}
      >
        <TextField
          id="outlined-basic"
          label="Github Users"
          variant="outlined"
          onChange={handleInput}
        />
      </Box>
      <Button sx={{ mb: 5 }} variant="contained" onClick={handleSearch}>
        search
      </Button>
       <UserDetails />
    </Container>
  );
}
