import { Box, Container } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import BottomComponent from "../component/BottomComponent";
import Navbar from "../component/Navbar";

const useStyles = makeStyles(() => ({
  
}));

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <Container maxWidth='xs'  >
      <Navbar />
      <Box className={classes.root}>
        {children}
      </Box>
        <BottomComponent />
    </Container>
  );
};

export default Layout;
