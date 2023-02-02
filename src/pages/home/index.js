import React, { useContext, useEffect, useState } from "react";
import Layout from "../../layout";
import Box from "@mui/material/Box";

import { makeStyles } from "@mui/styles";
import CardComponent from "../../component/CardComponent";
//import image
import Image from "../../assets/motif.png";
import ImageSlider from "../../assets/logo technopartner.png";
import axios from "axios";
import { authContext } from "../../context/AuthContext";
import { userContext } from "../../context/UserContext";
import Carousel from "react-material-ui-carousel";

const useStyles = makeStyles(() => ({
  qr: {
    fontSize: "48px",
    borderRadius: "50%",
  },

  paperContainer: {
    backgroundImage: `url(${Image})`,
    padding: "30px",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
}));

const Home = () => {
  const classes = useStyles();
  const { token } = useContext(authContext);
  const { users, setUsers } = useContext(userContext);

  const getData = () => {
    const URL = "https://soal.staging.id/api/home";
    const tokenAuth = localStorage.getItem("token");

    axios
      .get(URL, {
        headers: { authorization: `Bearer ${tokenAuth}` },
      })
      .then((response) => {
        setUsers(response.data.result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getData();
  }, []);


  return (
    <Layout>
      <Box className={classes.paperContainer}>
        <CardComponent />
      </Box>
      <Carousel>
        {users?.banner?.map((val, i) => (
          <img key={i} src={val} alt="logo" />
        ))}
      </Carousel>

    </Layout>
  );
};

export default Home;
