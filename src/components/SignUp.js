import React from "react";

import { Grid, TextField, Button, Typography } from "@mui/material";
import { useNavigate, Link } from "react-router-dom";

export const SignUp = () => {
  const navigate = useNavigate();
  const [newUser, setNewUser] = React.useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setNewUser((newUser) => ({
      ...newUser,
      [id]: value,
    }));
  };

  const handleSignUp = () => {
    localStorage.setItem("user", JSON.stringify(newUser));
    localStorage.setItem("isLoggedIn", "true");
    navigate("/welcome");
    setNewUser({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <>
      <Grid
        id="content-heading"
        size={12}
        sx={{ textAlign: "center", padding: 1 }}
      >
        <Typography variant="h6">Sign Up</Typography>
      </Grid>
      <Grid
        size={12}
        sx={{ textAlign: "center", minWidth: "45vh", padding: 2 }}
      >
        <Grid size={12} sx={{ textAlign: "center", padding: 1 }}>
          <TextField
            id="name"
            label="Name"
            variant="standard"
            type="text"
            required
            fullWidth
            value={newUser.name}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid size={12} sx={{ textAlign: "center", padding: 1 }}>
          <TextField
            id="email"
            label="Email"
            variant="standard"
            type="email"
            required
            fullWidth
            value={newUser.email}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid size={12} sx={{ textAlign: "center", padding: 1 }}>
          <TextField
            id="password"
            label="Password"
            variant="standard"
            type="password"
            required
            fullWidth
            value={newUser.password}
            onChange={handleInputChange}
          />
        </Grid>
        <Button
          variant="outlined"
          sx={{ margin: 2 }}
          onClick={handleSignUp}
          disabled={!newUser.name || !newUser.email || !newUser.password}
        >
          Sign Up
        </Button>
      </Grid>
      <Grid
        id="new-user-link"
        size={12}
        sx={{ textAlign: "center", padding: 2 }}
      >
        <Link to="/log-in">Already existing user?</Link>
      </Grid>
    </>
  );
};
