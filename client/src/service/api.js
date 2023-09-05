import axios from "axios";

const url = "http://localhost:8000";

export const addUser = async (data) => {
  try {
    let response = await axios.post(`${url}/api/user/signup`, data);
    return response.data;
  } catch (error) {
    console.log("Error while calling addUser API ", error);
  }
};

export const sendOTP = async (data) => {
  try {
    let response = await axios.post(`${url}/api/otp/send-otp`, data);
    return response.data;
  } catch (error) {
    console.log("Error while sending OTP API ", error);
  }
};

export const checkAadharVerification = async (data) => {
  try {
    let response = await axios.post(`${url}/api/aadhar-verification`, data);
    return response.data;
  } catch (error) {
    console.log("Error in aadhaar verification", error);
  }
};

export const getUserName = async (data) => {
  try {
  } catch (error) {}
};

export const updateUserName = async (data) => {
  try {
  } catch (error) {}
};
