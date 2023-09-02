import * as React from "react";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import { useContext,useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import Header from "../header";
import { UserContext } from "../../context/UserProvider";
import { Typography } from "@mui/material";

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

const Profile = () => {
  const { phone, setPhone, userName, setUserName } = useContext(UserContext);
  const [newUserName, setNewUserName] = useState("");
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setNewUserName("");
  };

  const handleChangeUserName = () => {
    setUserName(newUserName);
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
        <Tooltip title="Edit" arrow style={{ fontWeight: 'bold', color: 'black' }}>
          <Button variant="outlined" onClick={handleClickOpen} >{userName}</Button> </Tooltip>
          <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Change Username</DialogTitle>
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
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleChangeUserName}>Change UserName</Button>
        </DialogActions>
      </Dialog>
        
      </Box>
    </>
  );
};

export default Profile;
