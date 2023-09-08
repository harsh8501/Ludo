import React from 'react';
import Button from '@mui/material/Button';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


const ShareToUserOnWhatsApp = () => {
  
  const handleWhatsAppShare = () => {
    const phoneNumber = '+917000674954'; 
    const message = 'Hello, I need support with an issue. Can you please assist me?'; 

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Button variant="contained" sx={{ backgroundColor: 'green', color: 'white', '&:hover': { backgroundColor: 'darkgreen' } }} onClick={handleWhatsAppShare}>
      <WhatsAppIcon style={{ marginRight: '8px' }} />
      Talk to Us
    </Button>
  );
};

export default ShareToUserOnWhatsApp;
