import otp from "../modal/otp.js";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const generateOtp = () => {
  return Math.floor(100000 + Math.random() * 900000);
};

const hashOtp = (otp) => {
  const hash = crypto.createHash("sha256");
  hash.update(otp.toString());
  return hash.digest("hex");
};

export const sendOTP = async (req, resp) => {
  const opt = generateOtp();
  const hashedOtp = hashOtp(opt);

  //storing hash otp to DB
  const data = {
    phone: req.body.phone,
    otp: hashedOtp,
    createdAt: Date.now().toString(),
    expiresAt: `${Date.now() + 300000}`,
  };

  try {
    const newOtp = new otp(data);
    await newOtp.save();
  } catch (error) {
    console.log(error.message)
  }
  
  const url = `https://2factor.in/API/V1/${process.env.OTP_API_KEY}/SMS/${process.env.SENDER_MOBILE}/${hashedOtp}/OTP1`;

  var config = {
    method: "get",
    maxBodyLength: Infinity,
    url: url,
    headers: {},
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      resp.status(200).json(response.data);
    })
    .catch(function (error) {
      console.log(error);
      resp.status(500).json(error.message);
    });
};
