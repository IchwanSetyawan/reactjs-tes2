import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Avatar, Grid } from "@mui/material";
import QrCode2Icon from "@mui/icons-material/QrCode2";
import { userContext } from "../context/UserContext";

const CardComponent = () => {
  const { users, setUsers } = useContext(userContext);
  const convertRupiah = (angka) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(angka);
  };
  return (
    <>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {users.greeting}
          </Typography>

          <Typography sx={{ mb: 1.5, fontWeight: 600 }} color="text.secondary">
            {users.name}
          </Typography>
          <Box>
            <Grid container spacing={3}>
              <Grid item xs>
                <Box className={"border-dotted border-r border-slate-600"}>
                  <Box className=" rounded-full p-4 ">
                    <img
                      className="w-[100px]   shadow-lg "
                      src={users.qrcode}
                      alt="qr"
                    />
                  </Box>
                </Box>
              </Grid>
              <Grid item xs>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Saldo
                </Typography>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Points
                </Typography>
              </Grid>
              <Grid item xs>
                <Typography sx={{ fontWeight: 600 }} color="text.secondary">
                  {convertRupiah(users.saldo)}
                </Typography>
                <Typography sx={{ fontWeight: 500 }} color="text.success">
                  {users.point}
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </CardContent>
      </Card>
    </>
  );
};

export default CardComponent;
