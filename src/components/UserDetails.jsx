import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

// LOADING
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

// CARD
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function UserDetails() {
  const userInfo = useSelector(({ users }) => users.user);
  const loading = useSelector(({ users }) => users.loading);

  return (
    <div>
      {loading ? (
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      ) : (
        [userInfo].map(
          ({
            name,
            location,
            email,
            avatar_url,
            bio,
            created_at,
            blog,
            company,
            followers,
            following,
          }) => (
            <Card sx={{ maxWidth: 545 }}>
              <CardMedia
                component="img"
                alt={name}
                height="540"
                image={avatar_url}
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  {name} - {location}
                </Typography>
                <Typography variant="h6" component="div">
                  {bio}
                </Typography>

                <Typography variant="h6" component="div">
                  {email ? `${email} -` : null}
                </Typography>
                <Typography variant="h6" component="div">
                  {blog}
                </Typography>
                <Typography variant="h6" component="div">
                  {company}
                </Typography>
                <Typography variant="h6" component="div">
                  Followers: {followers}
                </Typography>
                <Typography variant="h6" component="div">
                  Following: {following}
                </Typography>
              </CardContent>
              <CardActions>
                <Link to="/repos" style={{ textDecoration: "none" }}>
                  <Button size="small">Repositories</Button>
                </Link>
                <Link to="/orgs" style={{ textDecoration: "none" }}>
                  <Button size="small">Organizations</Button>
                </Link>
              </CardActions>
            </Card>
          )
        )
      )}
    </div>
  );
}

{
  /* <div>
{loading ? (
  <Box sx={{ display: "flex" }}>
    <CircularProgress />
  </Box>
) : null}
{userInfo ? (
  [userInfo].map(
      ({
        name,
        location,
        email,
        avatar_url,
        bio,
        created_at,
        blog,
        company,
        followers,
        following,
      }) => (
        <Card sx={{ maxWidth: 545 }}>
          <CardMedia
            component="img"
            alt={name}
            height="540"
            image={avatar_url}
          />
          <CardContent>
            <Typography variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="h5" component="div">
              {bio}
            </Typography>

            <Typography variant="h6" component="div">
              {email ? `${email} -` : null} {location}
            </Typography>

            {/* <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with
                  over 6,000 species, ranging across all continents except
                  Antarctica
                </Typography> */
}
//             <Typography variant="h5" component="div">
//               Created: {created_at}
//             </Typography>
//             <Typography variant="h5" component="div">
//               {blog}
//             </Typography>
//             <Typography variant="h5" component="div">
//               {company}
//             </Typography>
//             <Typography variant="h5" component="div">
//               Followers: {followers}
//             </Typography>
//             <Typography variant="h5" component="div">
//               Following: {following}
//             </Typography>
//           </CardContent>
//           <CardActions>
//             <Link to="/repos" style={{ textDecoration: "none" }}>
//               <Button size="small">Repositories</Button>
//             </Link>
//             <Link to="/orgs" style={{ textDecoration: "none" }}>
//               <Button size="small">Organizations</Button>
//             </Link>
//           </CardActions>
//         </Card>
//       )
//     )

// ) : null}
// </div> */}
