import React, { useEffect, useState } from "react";
import { ORG } from "../reducers/actions/userActions";
import { useDispatch, useSelector } from "react-redux";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

// LOADING
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function Organizations() {
  const dispatch = useDispatch();
  const userInfo = useSelector(({ users }) => users.user);
  const orgs = useSelector(({ users }) => users.orgs);
  const loading = useSelector(({ users }) => users.loading);

  useEffect(() => {
    dispatch(ORG(userInfo.login));
  }, []);

  return (
    <>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Button variant="outlined">Go Back</Button>
      </Link>
      {loading ? (
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      ) : (
        orgs.map(({ login, url, repos_url, description, avatar_url, id }) => (
          <Card sx={{ maxWidth: 545, flexDirection: "row", mb: 5 }} key={id}>
            <CardMedia
              component="img"
              alt={login}
              height="540"
              image={avatar_url}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {login}
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                {description ? description : "No description"}
              </Typography>
            </CardContent>
          </Card>
        ))
      )}
    </>
  );
}
