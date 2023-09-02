import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./components/user/signup";
import SignIn from "./components/user/signin";
import Home from "./components/home";
import AadharVerification from "./components/KYC/aadhar-verification";
import Profile from "./components/account/profile";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/aadhar-verification" element={<AadharVerification />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/login" element={<SignIn />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
