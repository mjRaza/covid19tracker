import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { Public, Search } from "@material-ui/icons";

const useStyles = makeStyles({
  root: {
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
  },
});

const NavBarBottom = ({ setNavItem }) => {
  const classes = useStyles();

  return (
    <BottomNavigation
      onChange={(event, newValue) => {
        setNavItem(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Global" icon={<Public />} />
      <BottomNavigationAction label="Search" icon={<Search />} />
    </BottomNavigation>
  );
};
export default NavBarBottom;
