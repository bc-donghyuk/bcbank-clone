import React from "react";
import { Tab, Tabs } from "@mui/material";
import colors from "styles/colors";

export interface HaruTabsProps {
  tabIndex: number;
  tabItems: string[];
  onChange: (event: React.SyntheticEvent<Element, Event>, value: any) => void;
}

const TabsStyle = () => ({
  //   height: "36px",
  minHeight: "36px",
  padding: 0,
  //   boxSizing: "border-box",
  //   backgroundColor: colors.grayscale.gray0,
  //   borderRadius: 8,
  //   "& .MuiTabs-indicator": {
  //     bottom: 0,
  //     zIndex: 0,
  //     height: 30,
  //     backgroundColor: colors.grayscale.white,
  //     borderRadius: 6,
  //   },
});

const TabStyle = () => ({
  minWidth: "65px",
  padding: 0,
  //   zIndex: 1,
  //   minWidth: 65,
  //   height: 30,
  //   minHeight: 30,
  //   backgroundColor: "transparent",
  //   borderRadius: 6,
  //   color: colors.grayscale.gray4,
  //   fontWeight: 500,
  //   fontSize: 13,
  //   "& .Mui-selected": {
  //     color: colors.brand[100],
  //     fontWeight: "bold",
  //   },
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
