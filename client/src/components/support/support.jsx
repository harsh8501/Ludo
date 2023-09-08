import { Box } from "@mui/material";
import ShareToUserOnWhatsApp from "./shareToUserOnWhatsapp";

import Header from "../header";

const imageStyles = {
  maxWidth: "100%",
  height: "227px",
  border: "2px solid #ccc",
  borderRadius: "8px",
  boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.2)",
};

const Support = () => {
  return (
    <Box>
      <Header />
      <h2
        style={{
          textAlign: "center",
          color: "purple",
          fontSize: "24px",
          fontWeight: "bold",
        }}
      >
        Support Help Desk
      </h2>

      <img
        src="https://wpmanageninja.com/wp-content/uploads/2021/03/Untitled-design-1-1-1536x804.png"
        alt="Description of the image"
        style={imageStyles}
      />
       <Box className="App">
      <h2>Support Timing is from 10:00 AM to 8:00 PM</h2>
      <h3>(Monday to Saturday)</h3>
      <ShareToUserOnWhatsApp />
    </Box>
    </Box>
  );
};

export default Support;
