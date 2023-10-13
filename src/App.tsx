import { Bulb, Rack } from "./components";
import { Box, Switch } from "@mui/material";
import "./styles.css";

/**
 * Requirements
 * 1. Rack component | Line 25
 *    - Should have one prop | items - array of boolean
 *    - This represent initial state of each light bulb
 *    - Should render
 *        - Bulb component, for each item
 *        - Switch component, for each item
 *             - turns the bulb on or off
 *    - Changing one bulb, should not affect other bulbs (no re-renders)
 * 2. Implement general switch
 *    - If one light bulb is on, the switch should be on, otherwise off
 *    - If all lights are on, the switch turns them off, otherwise it will turn all on
 */

export default function App() {
  const items = [false, false, false];
  return (
    <div className="App">
      <h1>Lights bulb rack project</h1>
      <Rack items={items} />

      <Box
        sx={{
          display: "flex",
          marginTop: 20,
          gap: 4,
          flexDirection: "column",
          justifyContent: "flex-start"
        }}
      >
        <h2>Components</h2>
        <Box sx={{ width: "fit-content", display: "flex" }}>
          {/* COMPONENTS */}
          <Bulb on={false} />
          <Bulb on={true} />
          <Switch checked={true} />
          <Switch checked={false} />
        </Box>
      </Box>
    </div>
  );
}
