import { useEffect, useState, useContext } from "react";
import { UserContext } from "../context/UserProvider";
import Alert from "@mui/material/Alert";


import Header from "./header";
import AadharVerification from "./KYC/verification";
import { checkAadharVerification } from "../service/api";

const Home = () => {
  const { phone } = useContext(UserContext);
  const [aadharVerify,setAadharVerify] = useState();

  useEffect(()=>{
    const checkAadhar = async()=>{
      try {
        const result = await checkAadharVerification(phone);
        setAadharVerify(result.data);
      } catch (error) {
        console.error("Error checking Aadhar verification:", error);
      }
    }
    checkAadhar();
  },[])

  return (
    <>
      <Header />
      <Alert variant="filled" severity="error">
        This is an error alert — check it out!
      </Alert>
      {!aadharVerify && <AadharVerification />}
    </>
  );
};

export default Home;
