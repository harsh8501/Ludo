import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./components/user/signup";
import SignIn from "./components/user/signin";
import Home from "./components/home";
import AadharVerification from "./components/KYC/aadhar-verification";
import Profile from "./components/account/profile";
import Wallet from "./components/account/wallet";
import AddMoney from "./components/account/addMoney";
import Challenges from "./components/challenges/challenges";
import Refer from "./components/referral/refer";
import Support from "./components/support/support";
import Start from "./components/start";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Start />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/wallet" element={<Wallet />}></Route>
          <Route path="/add-money" element={<AddMoney />}></Route>
          <Route path="/challenges" element={<Challenges />}></Route>
          <Route path="/game-history" element={<Challenges />}></Route>
          <Route path="/transactions" element={<Challenges />}></Route>
          <Route path="/refer-earn" element={<Refer />}></Route>
          <Route path="/referral-history" element={<Challenges />}></Route>
          <Route path="/penalty-history" element={<Challenges />}></Route>
          <Route path="/notifications" element={<Challenges />}></Route>
          <Route path="/support" element={<Support />}></Route>
          <Route
            path="/aadhar-verification"
            element={<AadharVerification />}
          ></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/login" element={<SignIn />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
