import React from "react";
import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Navigation = ({ value, handleChange, userId }) => {
  const navigationItems = [
    { text: "Songs", to: "/profile/savedsong" },
    { text: "Albums", to: "/profile/savedalbum" },
    { text: "AI Songs", to: `/profile/${userId}` },
  ];

  return (
    <Box display="flex" justifyContent="flex-end" flexGrow={1} gap={2}>
      {navigationItems.map(({ to, text }) => (
        <Link key={to} to={to} style={{ textDecoration: "none" }}>
          <Button color="inherit" size="large" sx={{ textDecoration: "none" }}>
            {text}
          </Button>
        </Link>
      ))}
    </Box>
  );
};

export default Navigation;
