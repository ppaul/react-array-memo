import React, { useRef } from "react";
import { Box } from "@mui/material";

const useRenderCounter = () => {
  const renderCount = useRef(0);
  renderCount.current = renderCount.current + 1;

  return (
    <Box
      sx={{
        backgroundColor: "hsl(0, 100%, 50%)",
        borderRadius: 6,
        color: "hsl(0, 0%, 100%)",
        fontSize: 20,
        fontWeight: "bold",
        height: 35,
        width: 35,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      {String(renderCount.current)}
    </Box>
  );
};

export default useRenderCounter;
