import React from "react";
import { Box, Skeleton } from "@mui/material/";

export default function TodoListLoader() {
  return (
    <Box
      sx={{
        width: "250px",
      }}
    >
      <Skeleton animation="wave" />
      <Skeleton animation="wave" />
      <Skeleton animation="wave" />
    </Box>
  );
}
