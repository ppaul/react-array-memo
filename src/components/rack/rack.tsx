import { Bulb } from "../bulb/bulb";
import { Box, Switch } from "@mui/material";
import {memo, useState } from "react";

export interface RackProps {
  items: Array<boolean>;
}

export const Rack = ({ items }: RackProps) => {
  const Item = memo(({ index }: { index: number, checked: boolean }) => {
    console.log('render item ', index);
    const [checked, setChecked] = useState(false);
    return <Box sx={{ width: "fit-content", display: "flex" }} key={index}>
        <Bulb on={checked} />
        <Switch
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
      </Box>;
      }
  );

  const renderedItems = items.map((_, index: number) => <Item index={index} key={index} />);

  return renderedItems ? <>{renderedItems}</> : null;
};
