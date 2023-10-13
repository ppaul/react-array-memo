import { Box } from "@mui/material";
import useRenderCounter from "../../hooks/useRenderCounter";

type BulbProps = {
  on: boolean;
};

export const Bulb = (props: BulbProps) => {
  const renderCount = useRenderCounter();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        p: 2,
        bgcolor: props.on ? "yellow" : "gray"
      }}
    >
      {renderCount}
    </Box>
  );
};
