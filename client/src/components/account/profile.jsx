import * as React from "react";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import { useContext, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Typography } from "@mui/material";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import Header from "../header";
import { UserContext } from "../../context/UserProvider";
import { updateUserName, getUserName } from "../../service/api";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, calories) {
  return { name, calories };
}

const rows = [
  createData("Cash Won", `Rs 310`),
  createData("Matches Played", 237),
  createData("Matches Won", 262),
  createData("Matches Lost", 305),
];

const Profile = () => {
  const { phone, setPhone, userName, setUserName, email, setEmail } =
    useContext(UserContext);
  const [newUserName, setNewUserName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [open, setOpen] = useState(false);

  React.useEffect(() => {
    const updateUsername = async () => {
      await updateUserName({ phone: phone, username: newUserName });
    };
    updateUsername();
  }, [setUserName]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setNewUserName("");
    setNewEmail("");
  };

  const handleChangeUserName = () => {
    setUserName(newUserName);
    setEmail(newEmail);
    handleClose();
  };

  return (
    <>
      <Header />
      <Box>
        <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          variant="dot"
        >
          <Avatar
            style={{ width: "100px", height: "100px" }}
            alt="User"
            src="https://www.shareicon.net/data/128x128/2016/05/24/770137_man_512x512.png"
          />
        </StyledBadge>
        <Typography sx={{ paddingTop: "5px", fontWeight: "bold" }}>
          7000674954
        </Typography>
        <Tooltip
          title="Edit"
          arrow
          style={{ fontWeight: "bold", color: "black" }}
        >
          <Box
            style={{
              display: "flex",
              gap: "16px",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <span style={{ fontWeight: "bold" }}>UserName: </span>
              <Button
                variant="contained"
                color="success"
                onClick={handleClickOpen}
              >
                {userName}
              </Button>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <span style={{ fontWeight: "bold" }}>Email: </span>
              <Button
                variant="contained"
                color="success"
                onClick={handleClickOpen}
              >
                {email}
              </Button>
            </div>
          </Box>
        </Tooltip>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Change Username & Email</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="User Name"
              type="text"
              fullWidth
              variant="standard"
              value={newUserName}
              onChange={(e) => setNewUserName(e.target.value)}
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Email Address"
              type="email"
              fullWidth
              variant="standard"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleChangeUserName}>
              Change UserName & Email
            </Button>
          </DialogActions>
        </Dialog>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "3%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              height: "40vh",
              padding: "0 20%",
            }}
          >
            <a href="/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <Box
              width="200px"
              bgcolor="grey"
              color="white"
              p={1}
              borderRadius="10px"
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <AccountBalanceWalletOutlinedIcon
                  style={{ fontSize: "30px" }}
                />
                <Typography
                  sx={{
                    paddingLeft: "10px",
                    fontSize: "17px",
                    fontWeight: "bold",
                  }}
                >
                  My Wallet
                </Typography>
              </div>
            </Box>
            </a>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              height: "40vh",
              padding: "0 20%",
            }}
          >
            <a href="/aadhar-verification" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <Box
              width="200px"
              bgcolor="grey"
              color="white"
              p={1}
              borderRadius="10px"
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <FingerprintIcon style={{ fontSize: "30px" }} />
                <Typography
                  sx={{
                    paddingLeft: "10px",
                    fontSize: "17px",
                    fontWeight: "bold",
                  }}
                >
                  Complete KYC
                </Typography>
              </div>
            </Box>
            </a>
          </div>
        </div>
      </Box>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "1vh",
        }}
      >
        <div style={{ width: "30%" }}>
          <TableContainer component={Paper}>
            <Table aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Career Stats</StyledTableCell>
                  <StyledTableCell align="right"></StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell component="th" scope="row">
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.calories}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </>
  );
};

export default Profile;
