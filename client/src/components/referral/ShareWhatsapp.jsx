import React from "react";
import { WhatsappShareButton } from "react-share";
import copy from "clipboard-copy";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { Button } from "@mui/material";

const ShareWhatsapp = ({userName}) => {
  const shareUrl = "https://www.khiladibaaz.com/signup";
  const textToCopy =
    `Play Ludo & Earn 5000 daily. Register now using ${userName} my referral code`;

  const handleCopy = () => {
    copy(textToCopy).then(() => {
      alert("Referral Code copied!!");
    });
  };

  return (
    <div
      style={{
        backgroundColor: '#ccc',
        padding: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '2px solid black'
      }}
    >
      <Button
        variant="contained"
        style={{
          marginRight: "10px",
          backgroundColor: "#191970",
          color: "white",
        }}
      >
        <WhatsappShareButton url={shareUrl} title={textToCopy}>
          Share on WhatsApp
        </WhatsappShareButton>
      </Button>
      <div style={{ cursor: 'pointer' }}>
        <ContentCopyIcon onClick={handleCopy} />
      </div>
    </div>
  );
};

export default ShareWhatsapp;
