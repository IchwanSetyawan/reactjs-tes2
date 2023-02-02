import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../assets/logo technopartner.png";
import { Avatar } from "@mui/material";
import { makeStyles } from "@mui/styles";


  const useStyles = makeStyles(() => ({
    logo: {
        width: 150,
      },
  }));


const Navbar = () => {
    const classes = useStyles();
  return (
    <>
      <Box sx={{ flexGrow: 1}}  >
        <AppBar position="static" color="transparent">
          <Toolbar>
            
            <img alt="logo" src={logo} className={classes.logo} />
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
