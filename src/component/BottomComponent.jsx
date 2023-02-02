import React, { useState } from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import ListIcon from "@mui/icons-material/List";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  root: {
    zIndex: 1000,
  },
}));

const BottomComponent = ({ children }) => {
  const [value, setValue] = useState(0);
  const classes = useStyles();

  return (
    <Box sx={{ width: 500 }} className={classes.root}>
      {children}
      <BottomNavigation
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          label="Home"
          icon={
            <Link to="/">
              <HomeIcon />
            </Link>
          }
        />
 

        {/* <BottomNavigationAction  label="Menu" icon={<ListIcon />} /> */}
        <BottomNavigationAction
          label="Menu"
          icon={
            <Link to="/menu">
              <ListIcon />
            </Link>
          }
        />
      </BottomNavigation>
    </Box>
  );
};

export default BottomComponent;
