import { Typography, Grid, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();
  const data = JSON.parse(localStorage.getItem("user"));
  const name =
    String(data.name).charAt(0).toUpperCase() + String(data.name).slice(1);

  const handleLogOut = () => {
    localStorage.setItem("isLoggedIn", "false");
    navigate("/log-in");
  };

  return (
    <>
      <Grid
        id="content-heading"
        size={12}
        sx={{ textAlign: "center", padding: 1, minWidth: "45vh" }}
      >
        <Typography variant="h6">Welcome {name || "Guest"}!!</Typography>
      </Grid>
      <Button variant="outlined" sx={{ margin: 2 }} onClick={handleLogOut}>
        Log Out
      </Button>
    </>
  );
};

export default Welcome;
