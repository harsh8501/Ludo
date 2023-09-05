import { useEffect, useState, useContext } from "react";
import { UserContext } from "../context/UserProvider";
import Alert from "@mui/material/Alert";
import { Box, Typography } from "@mui/material";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import SportsKabaddiIcon from "@mui/icons-material/SportsKabaddi";
import Paper from "@mui/material/Paper";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { Link } from "@mui/material";

import Header from "./header";
import AadharVerification from "./KYC/verification";
import { checkAadharVerification } from "../service/api";

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    marginBottom: "10px",
    marginTop: "80px",
    marginLeft: "200px",
    marginRight: "200px",
  },
  content: {
    display: "flex",
    alignItems: "center",
  },
  text: {
    fontWeight: "bold",
    transition: "color 0.2s",
    position: "relative",
    cursor: "pointer",
    "&:hover": {
      color: "red",
    },
  },
  description: {
    marginLeft: "100px",
    fontWeight: "bold",
  },
};

function srcset(image, width, height, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${width * cols}&h=${
      height * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const itemData = [
  {
    img: "https://images.yourstory.com/cs/2/dc9aa1302d6c11e9aa979329348d4c3e/LudoKingmain-1588847247029.png?fm=png&auto=format",
    title: "Live Challenges",
    author: "@Ludo",
  },
];

const Home = () => {
  const { phone } = useContext(UserContext);
  const [aadharVerify, setAadharVerify] = useState();

  useEffect(() => {
    const checkAadhar = async () => {
      try {
        const result = await checkAadharVerification(phone);
        setAadharVerify(result.data);
      } catch (error) {
        console.error("Error checking Aadhar verification:", error);
      }
    };
    checkAadhar();
  }, []);

  return (
    <>
      <Header />
      <Alert variant="filled" severity="warning">
        This is an error alert — check it out!
      </Alert>
      {!aadharVerify && <AadharVerification />}
      <Paper elevation={3} sx={styles.container}>
        <div sx={styles.content}>
          <MilitaryTechIcon sx={styles.icon} />
          <Link
            href="/challenges"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Typography sx={styles.text}>CHALLENGES</Typography>
          </Link>
        </div>
        <Box>
          <Typography sx={styles.description}>
            You can create Ludo Battle{" "}
            <SportsKabaddiIcon style={{ color: "red" }} /> and you can also join
            currently running
            <br />
            battle using a unique ID. You can play with your friends by sharing
            your ID.
          </Typography>
        </Box>
      </Paper>
      <LiveTvIcon
        sx={{ display: "flex", marginLeft: "15%", marginTop: "2%" }}
      />
      <Link
        href="/challenges"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <div style={{ marginLeft: "15%" }}>
          <ImageList
            sx={{
              width: 500,
              height: 450,
              transform: "translateZ(0)",
            }}
            rowHeight={200}
            gap={1}
          >
            {itemData.map((item) => {
              const cols = item.featured ? 2 : 1;
              const rows = item.featured ? 2 : 1;

              return (
                <ImageListItem key={item.img} cols={cols} rows={rows}>
                  <img
                    {...srcset(item.img, 250, 200, rows, cols)}
                    alt={item.title}
                    loading="lazy"
                  />
                  <ImageListItemBar
                    sx={{
                      background:
                        "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
                        "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
                    }}
                    title={item.title}
                    position="top"
                    actionIcon={
                      <IconButton
                        sx={{ color: "white" }}
                        aria-label={`star ${item.title}`}
                      >
                        <StarBorderIcon />
                      </IconButton>
                    }
                    actionPosition="left"
                  />
                </ImageListItem>
              );
            })}
          </ImageList>
        </div>
      </Link>
    </>
  );
};

export default Home;
