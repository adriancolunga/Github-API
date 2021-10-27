import React, { useEffect } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import FolderIcon from "@mui/icons-material/Folder";

import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

import Button from "@mui/material/Button";

import { useDispatch, useSelector } from "react-redux";
import { REPO } from "../reducers/actions/userActions";
import { Link } from "react-router-dom";

export default function Repositories() {
  const dispatch = useDispatch();
  const userInfo = useSelector(({ users }) => users.user);
  const userRepos = useSelector(({ users }) => users.repos);
  const loading = useSelector(({ users }) => users.loading);

  useEffect(() => {
    dispatch(REPO(userInfo.login));
  }, []);

  return (
    <>
      {loading ? (
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      ) : (
        <Grid item xs={12} md={6}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button variant="outlined">Go Back</Button>
          </Link>
          {userRepos
            ? userRepos.map(({ name, language, html_url, id }) => (
                <List key={id}>
                  <Typography
                    sx={{ mt: 4, mb: 2, ml: 4 }}
                    variant="h5"
                    component="div"
                  >
                    Repositories
                  </Typography>
                  <ListItem>
                    <ListItemIcon>
                      <a href={html_url}>
                        <FolderIcon />
                      </a>
                    </ListItemIcon>
                    <ListItemText primary={name} secondary={language} />
                  </ListItem>
                </List>
              ))
            : null}
        </Grid>
      )}
    </>
  );
}
