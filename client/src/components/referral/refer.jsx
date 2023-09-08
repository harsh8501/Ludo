import React from 'react';
import styled from 'styled-components';
import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import Diversity2Icon from '@mui/icons-material/Diversity2';
import RedeemIcon from '@mui/icons-material/Redeem';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

import { UserContext } from "../../context/UserProvider";
import Header from "../header";
import ShareWhatsapp from './ShareWhatsapp';

const imageStyles = {
  maxWidth: "100%",
  height: "227px",
  border: "2px solid #ccc",
  borderRadius: "8px",
  boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.2)",
};

const BoxContainer = styled.div`
  background-color: #eeeeee; 
  padding: 20px; 
  display: flex; 
  justify-content: space-around; 
  align-items: center; 
`;

const IconWrapper = styled.div`
  font-size: 40px; 
  margin: 0 10px; 
  color: #333;
  align-items: center;
`;

const Refer = () => {
  const { userName } = useContext(UserContext);
  return (
    <Box>
      <Header />
      <h2 style={{ textAlign: "center", color: "purple", fontSize: "24px", fontWeight: "bold" }}>
  Refer & Earn Money
</h2>

      <img
        src="https://cdn.dribbble.com/users/1647667/screenshots/5930117/media/c2c604762eb8f31ecbb916a15aa35ccb.jpg"
        alt="Description of the image"
        style={imageStyles}
      />
      <BoxContainer>
      <IconWrapper>
        <Diversity2Icon style={{fontSize: '50px'}}/>
        <Typography variant="h6" style={{fontSize: '20px'}}>Refer a friend</Typography>
        <Typography>Refer your friends and <br /> you will get Rewarded</Typography>
      </IconWrapper>
      <IconWrapper>
        <RedeemIcon style={{fontSize: '50px'}}/>
        <Typography variant="h6" style={{fontSize: '20px'}}>Refer & Earn Rules</Typography>
        <Typography>Once your friend signup using your Referral link <br /> you will get <span style={{ color: 'darkgreen',fontWeight: 'bolder' }}>2%</span> each time on winnings</Typography>
      </IconWrapper>
      <IconWrapper>
        <EmojiEventsIcon style={{fontSize: '50px'}}/>
        <Typography variant="h6" style={{fontSize: '20px'}}>You get Rewarded</Typography>
        <Typography>Suppose your referral plays a battle for <span style={{ color: 'darkgreen',fontWeight: 'bolder' }}>5000</span> <br /> you will get <span style={{ color: 'darkgreen',fontWeight: 'bolder' }}>100</span> ruppes Rewarded </Typography>
      </IconWrapper>
    </BoxContainer>
    <Box>
        <ShareWhatsapp userName={userName}/>
    </Box>
    </Box>
  );
};

export default Refer;
