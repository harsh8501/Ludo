import * as React from "react";
import { Typography, Box } from "@mui/material";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import Header from "../header";

const AddMoney = () => {

  const [selectedAmount, setSelectedAmount] = React.useState(500);

  const handleChange = (event, newValue) => {
    setSelectedAmount(newValue);
  };

  const handleAddCash = () => {
    console.log(`Adding cash: ${selectedAmount}`);
  };

  const navigate = useNavigate();

  const clickVerification = () => {
    navigate("/aadhar-verification");
  };

  return (
    <>
      <Header />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        paddingTop="2%"
      >
        <Box
          width="80%"
          border="1px"
          borderRadius="10px"
          bgcolor="#FFCCCB"
          p={2}
        >
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
          <Typography fontWeight="bold" color="brown">
            Without KYC Verification You can only add upto 500
          </Typography>
        </Box>
      </Box>
      <Box>
        <TextField
          id="outlined-helperText"
          type="number"
          label="Enter Amount"
          helperText="Min: 10, Max: 20000"
          variant="outlined"
          value={selectedAmount} 
          onChange={(e) => setSelectedAmount(Number(e.target.value))}
          sx={{
            width: "60%",
            marginBottom: "16px",
            marginTop: "50px",
          }}
        />
      </Box>
      <Box
        sx={{ width: "100%" }}
        display="flex"
        justifyContent="center"
        alignItems="center"
        marginBottom="50px"
      >
        <Tabs
           value={selectedAmount}
           onChange={handleChange}
           textColor="secondary"
           indicatorColor="secondary"
           aria-label="secondary tabs example"
        >
          <Tab
            value="100"
            label="100"
            sx={{ fontWeight: "bold", fontSize: "25px" }}
          />
          <Tab value="500" label="500" sx={{ fontWeight: "bold", fontSize: "25px" }}/>
          <Tab value="2000" label="2000" sx={{ fontWeight: "bold", fontSize: "25px" }}/>
          <Tab value="5000" label="5000" sx={{ fontWeight: "bold", fontSize: "25px" }}/>
          <Tab value="10000" label="10000" sx={{ fontWeight: "bold", fontSize: "25px" }}/>
        </Tabs>
      </Box>
      <Button variant="contained" color="success">
        ADD CASH
      </Button>
    </>
  );
};

export default AddMoney;
