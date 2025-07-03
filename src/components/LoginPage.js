import React, { useState } from "react";
import { Grid, TextField, Button, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const navigator = useNavigate();
  const [loginUser, setLoginUser] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setLoginUser((loginUser) => ({
      ...loginUser,
      [id]: value,
    }));
  };

  const handleLogIn = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (
      user &&
      user.email === loginUser.email &&
      user.password === loginUser.password
    ) {
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("isLoggedIn", "true");
      navigator("/welcome");
    } else {
      alert("Invalid email or password");
    }
    setLoginUser({
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
        <Typography variant="h6">Log In</Typography>
      </Grid>
      <Grid
        size={12}
        sx={{ textAlign: "center", minWidth: "45vh", padding: 2 }}
      >
        <Grid size={12} sx={{ textAlign: "center", padding: 1 }}>
          <TextField
            id="email"
            label="Email"
            variant="standard"
            fullWidth
            value={loginUser.email}
            onChange={handleInputChange}
            type="email"
            required
          />
        </Grid>
        <Grid size={12} sx={{ textAlign: "center", padding: 1 }}>
          <TextField
            id="password"
            label="Password"
            variant="standard"
            fullWidth
            value={loginUser.password}
            onChange={handleInputChange}
            type="password"
            required
          />
        </Grid>
        <Button
          variant="outlined"
          sx={{ margin: 2 }}
          disabled={!loginUser.email || !loginUser.password}
          onClick={handleLogIn}
        >
          Log In
        </Button>
      </Grid>
      <Grid
        id="new-user-link"
        size={12}
        sx={{ textAlign: "center", padding: 2 }}
      >
        <Link to="/sign-up">Are you a new user?</Link>
      </Grid>
    </>
  );
};
