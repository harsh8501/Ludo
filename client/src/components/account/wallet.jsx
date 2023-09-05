import { Box, Typography } from "@mui/material";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Button, CardActionArea, CardActions } from "@mui/material";

import Header from "../header";

const Wallet = () => {
  return (
    <>
      <Header />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "5%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "20vh",
          }}
        >
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <Box
              width="600px"
              bgcolor="grey"
              color="white"
              p={1}
              borderRadius="10px"
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <ReceiptLongIcon style={{ fontSize: "30px" }} />
                <Typography
                  sx={{
                    paddingLeft: "200px",
                    fontSize: "17px",
                    fontWeight: "bold",
                  }}
                >
                  Order History
                </Typography>
              </div>
            </Box>
          </a>
        </div>
      </div>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        paddingLeft="1%"
      >
        <Card
          sx={{
            width: "400px",
            backgroundColor: "lightgrey",
            marginRight: "5%",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
            borderRadius: "10px",
            transition: "transform 0.2s",
            "&:hover": {
              transform: "scale(1.02)",
            },
          }}
        >
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" fontWeight="bold">
                DEPOSIT CASH
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="medium" color="primary" sx={{ fontWeight: 'bold' }}>
              ADD CASH
            </Button>
          </CardActions>
        </Card>
        <Card
          sx={{
            width: "400px",
            backgroundColor: "lightgrey",
            marginLeft: "5%",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
            borderRadius: "10px",
            transition: "transform 0.2s",
            "&:hover": {
              transform: "scale(1.02)",
            },
          }}
        >
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" fontWeight="bold">
                WITHDRAW CASH
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="medium" color="primary" sx={{ fontWeight: 'bold' }}>
              WITHDRAW
            </Button>
          </CardActions>
        </Card>
      </Box>
    </>
  );
};

export default Wallet;
