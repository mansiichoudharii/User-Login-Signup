import "./App.css";
import { Box, Card, Grid, Typography } from "@mui/material";
import { LoginPage } from "./components/LoginPage";
import { SignUp } from "./components/SignUp";
import { Route, Routes, Navigate } from "react-router-dom";
import Welcome from "./components/Welcome";
import ProtectedRoute from "./components/ProtectedRoute";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    localStorage.setItem("isLoggedIn", "false");
  }, []);

  return (
    <Box>
      <Grid
        container
        spacing={2}
        direction={"column"}
        sx={{
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          width: "100%",
        }}
      >
        <Card
          id="content-card"
          variant="outlined"
          sixe={8}
          sx={{
            margin: "auto",
            padding: 2,
            alignContent: "center",
            minWidth: "45vh",
          }}
        >
          <Grid
            id="content-heading"
            size={12}
            sx={{ textAlign: "center", padding: 2, justifyContent: "center" }}
          >
            <Typography variant="h4">Auth App</Typography>
          </Grid>
          <Routes>
            <Route path="/" element={<Navigate to="/log-in" />} />
            <Route path="log-in" element={<LoginPage />} />
            <Route path="sign-up" element={<SignUp />} />
            <Route
              path="welcome"
              element={
                <ProtectedRoute>
                  <Welcome />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Card>
      </Grid>
    </Box>
  );
};

export default App;
