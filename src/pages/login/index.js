import {
  Box,
  Button,
  Container,
  FormControl,
  InputLabel,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import axios from "axios";
import React, { useContext, useState } from "react";
import { redirect } from "react-router-dom";
import logo from "../../assets/logo technopartner.png";
import { authContext } from "../../context/AuthContext";

const useStyles = makeStyles(() => ({
  logo: {
    width: 250,
  },
  label: {
    marginTop: 10,
  },
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const Login = () => {
  const classes = useStyles();
  const { setIsLogin,setToken, setTokenFunc, isLogin, token, username, setUsername, setUser } =
  useContext(authContext); 

  const defaultData = {
    username: "",
    password: "",
  };
  const [formData, setFormData] = useState({ ...defaultData });

  function handleFormLogin(e) {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  const requestBody = {
    grant_type: "password",
    client_secret: "0a40f69db4e5fd2f4ac65a090f31b823",
    client_id: "e78869f77986684a",
    username: formData.username,
    password: formData.password,
  };

  const getLogin = () => {
    const URL = "https://soal.staging.id/oauth/token";
    axios
      .post(URL, requestBody)
      .then((response) => {
        setIsLogin(true)
        setTokenFunc(response.data.access_token);
        console.log('login sukses')
        redirect("/");
      })
      .catch((err) => {
        setIsLogin(false)
        alert('login failed')
        console.log(err);
      });
  };

  

  function handleSubmit(e) {
    e.preventDefault();
    // console.log(formData);
    // setIsloading(true);
   
    getLogin();
  }
  

  return (
    <Container>
      <Box className={classes.root}>
        <Stack spacing={2}>
          <Box>
            <img src={logo} className={classes.logo} />
          </Box>
          <Box>
            <FormControl
              variant="standard"
              className={classes.root}
              onSubmit={handleSubmit}
            >
              <Typography className={classes.label} variant="h6">
                Username
              </Typography>
              <TextField
                type="email"
                onChange={handleFormLogin}
                variant="outlined"
                margin="dense"
                name="username"
                value={formData.email}
              />
              <Typography className={classes.label} variant="h6">
                Password
              </Typography>
              <TextField
                type="password"
                onChange={handleFormLogin}
                variant="outlined"
                margin="dense"
                name="password"
                value={formData.password}
              />
              <Box>
                <Button onClick={handleSubmit} variant="outlined">
                  Login
                </Button>
              </Box>
            </FormControl>
          </Box>
        </Stack>
      </Box>
    </Container>
  );
};

export default Login;
