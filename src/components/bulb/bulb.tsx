import { Box } from "@mui/material";
import useRenderCounter from "../../hooks/useRenderCounter";

type BulbProps = {
  on: boolean;
};

export const Bulb = (props: BulbProps) => {
  const renderCount = useRenderCounter();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: 2,
        background: props.on ? "yellow" : "gray"
      }}
    >
      {renderCount}
    </div>
  );
};
