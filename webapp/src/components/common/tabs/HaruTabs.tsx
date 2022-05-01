import React from "react";
import { Tab, Tabs } from "@mui/material";
import colors from "styles/colors";

export interface HaruTabsProps {
  tabIndex: number;
  tabItems: string[];
  onChange: (event: React.SyntheticEvent<Element, Event>, value: any) => void;
}

const TabsStyle = () => ({
  height: "36px",
  minHeight: "36px",
  padding: "3px",
  boxSizing: "border-box",
  background: colors.grayscale.gray0,
  borderRadius: "8px",
  "& .MuiTabs-indicator": {
    zIndex: 0,
    bottom: 0,
    height: 30,
    background: colors.grayscale.white,
    borderRadius: "6px",
  },
});

const TabStyle = () => ({
  flex: "1 1",
  zIndex: 1,
  minWidth: 65,
  minHeight: 30,
  height: 30,
  padding: 0,
  backgroundColor: "transparent",
  borderRadius: 6,
  color: colors.grayscale.gray4,
  fontWeight: 500,
  fontSize: 13,
  "&.Mui-selected": {
    color: colors.brand[100],
    fontWeight: "bold",
    "& .MuiTouchRipple-root": {
      color: colors.grayscale.white,
    },
  },
});

const HaruTabs: React.FC<HaruTabsProps> = ({ tabIndex, tabItems, onChange }) => {
  return (
    <Tabs value={tabIndex} sx={TabsStyle} onChange={onChange}>
      {tabItems.map(item => (
        <Tab key={item} label={item} sx={TabStyle} />
      ))}
    </Tabs>
  );
};

export default HaruTabs;
