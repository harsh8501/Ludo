import { Typography, Box } from "@mui/material";
import Button from "@mui/material/Button";

import { useNavigate } from "react-router-dom";

const Verification = () => {
  const navigate = useNavigate();

  const clickVerification = () => {
    navigate("/aadhar-verification");
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      paddingTop="2%"
    >
      <Box width="80%" border="1px" borderRadius="10px" bgcolor="#FFCCCB" p={2}>
        <Typography fontWeight="bold" color="brown">
          KYC Verification Pending!! For KYC Verification Please Click Here
        </Typography>
        <Button
          onClick={clickVerification}
          variant="contained"
          style={{ backgroundColor: "brown" }}
        >
          Click here
        </Button>
      </Box>
    </Box>
  );
};

export default Verification;
