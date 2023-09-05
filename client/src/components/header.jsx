import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import AddCardIcon from "@mui/icons-material/AddCard";
import Avatar from "@mui/material/Avatar";
import { deepPurple } from "@mui/material/colors";
import Grid from "@mui/material/Grid";
import WineBarIcon from "@mui/icons-material/WineBar";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import ReceiptIcon from "@mui/icons-material/Receipt";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import DoNotDisturbOnIcon from "@mui/icons-material/DoNotDisturbOn";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import { Link } from "@mui/material";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export default function Header() {
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        open={open}
        style={{ backgroundColor: "whiteSmoke" }}
      >
        <Toolbar>
          <IconButton
            color="black"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Avatar
            sx={{
              bgcolor: deepPurple[500],
              marginLeft: "1%",
              fontSize: "14px",
            }}
          >
            Ludo
          </Avatar>
          <Box style={{ marginLeft: "85%" }}>
            <Link
              href="/add-money"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <AddCardIcon style={{ color: "black", fontSize: "34px" }} />
              <Typography
                style={{ color: "black", fontWeight: "bold", fontSize: "10px" }}
              >
                ADD CASH
              </Typography>
            </Link>
            <Typography
              style={{ color: "Green", fontWeight: "bold", fontSize: "15px" }}
            >
              Balance: {500}
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Grid item xs={12} md={6}>
          <Demo>
            <List dense={dense}>
              <ListItem
                secondaryAction={
                  <IconButton edge="end">
                    <ArrowForwardIosIcon
                      sx={{ color: "black", fontSize: "10px" }}
                    />
                  </IconButton>
                }
              >
                <Link
                  href="/profile"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <div style={{ display: "flex" }}>
                    <AccountCircleIcon
                      sx={{ color: "black", fontSize: "30px" }}
                    />
                    <ListItemText sx={{ paddingLeft: "15px" }}>
                      <Typography variant="h10" fontWeight="bold">
                        My Profile
                      </Typography>
                      {secondary ? (
                        <Typography variant="body2">Secondary text</Typography>
                      ) : null}
                    </ListItemText>
                  </div>
                </Link>
              </ListItem>
              <Divider />
              <ListItem
                secondaryAction={
                  <IconButton edge="end">
                    <ArrowForwardIosIcon
                      sx={{ color: "black", fontSize: "10px" }}
                    />
                  </IconButton>
                }
              >
                <Link
                  href="/"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <div style={{ display: "flex" }}>
                    <WineBarIcon sx={{ color: "black", fontSize: "30px" }} />
                    <ListItemText sx={{ paddingLeft: "15px" }}>
                      <Typography variant="h10" fontWeight="bold">
                        Win cash
                      </Typography>
                      {secondary ? (
                        <Typography variant="body2">Secondary text</Typography>
                      ) : null}
                    </ListItemText>
                  </div>
                </Link>
              </ListItem>
              <Divider />
              <ListItem
                secondaryAction={
                  <IconButton edge="end">
                    <ArrowForwardIosIcon
                      sx={{ color: "black", fontSize: "10px" }}
                    />
                  </IconButton>
                }
              >
                <Link
                  href="/wallet"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <div style={{ display: "flex" }}>
                    <AccountBalanceWalletIcon
                      sx={{ color: "black", fontSize: "30px" }}
                    />
                    <ListItemText sx={{ paddingLeft: "15px" }}>
                      <Typography variant="h10" fontWeight="bold">
                        My Wallet
                      </Typography>
                      {secondary ? (
                        <Typography variant="body2">Secondary text</Typography>
                      ) : null}
                    </ListItemText>
                  </div>
                </Link>
              </ListItem>
              <Divider />
              <ListItem
                secondaryAction={
                  <IconButton edge="end">
                    <ArrowForwardIosIcon
                      sx={{ color: "black", fontSize: "10px" }}
                    />
                  </IconButton>
                }
              >
                <Link
                  href="/profile"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <div style={{ display: "flex" }}>
                    <EmojiEventsIcon
                      sx={{ color: "black", fontSize: "30px" }}
                    />
                    <ListItemText sx={{ paddingLeft: "15px" }}>
                      <Typography variant="h10" fontWeight="bold">
                        Games History
                      </Typography>
                      {secondary ? (
                        <Typography variant="body2">Secondary text</Typography>
                      ) : null}
                    </ListItemText>
                  </div>
                </Link>
              </ListItem>
              <Divider />
              <ListItem
                secondaryAction={
                  <IconButton edge="end">
                    <ArrowForwardIosIcon
                      sx={{ color: "black", fontSize: "10px" }}
                    />
                  </IconButton>
                }
              >
                <Link
                  href="/profile"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <div style={{ display: "flex" }}>
                    <ReceiptIcon sx={{ color: "black", fontSize: "30px" }} />
                    <ListItemText sx={{ paddingLeft: "15px" }}>
                      <Typography variant="h10" fontWeight="bold">
                        Transaction
                      </Typography>
                      {secondary ? (
                        <Typography variant="body2">Secondary text</Typography>
                      ) : null}
                    </ListItemText>
                  </div>
                </Link>
              </ListItem>
              <Divider />
              <ListItem
                secondaryAction={
                  <IconButton edge="end">
                    <ArrowForwardIosIcon
                      sx={{ color: "black", fontSize: "10px" }}
                    />
                  </IconButton>
                }
              >
                <Link
                  href="/profile"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <div style={{ display: "flex" }}>
                    <PersonAddAlt1Icon
                      sx={{ color: "black", fontSize: "30px" }}
                    />
                    <ListItemText sx={{ paddingLeft: "15px" }}>
                      <Typography variant="h10" fontWeight="bold">
                        Refer & Earn
                      </Typography>
                      {secondary ? (
                        <Typography variant="body2">Secondary text</Typography>
                      ) : null}
                    </ListItemText>
                  </div>
                </Link>
              </ListItem>
              <Divider />
              <ListItem
                secondaryAction={
                  <IconButton edge="end">
                    <ArrowForwardIosIcon
                      sx={{ color: "black", fontSize: "10px" }}
                    />
                  </IconButton>
                }
              >
                <Link
                  href="/profile"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <div style={{ display: "flex" }}>
                    <GroupAddIcon sx={{ color: "black", fontSize: "30px" }} />
                    <ListItemText sx={{ paddingLeft: "15px" }}>
                      <Typography variant="h10" fontWeight="bold">
                        Referral History
                      </Typography>
                      {secondary ? (
                        <Typography variant="body2">Secondary text</Typography>
                      ) : null}
                    </ListItemText>
                  </div>
                </Link>
              </ListItem>
              <Divider />
              <ListItem
                secondaryAction={
                  <IconButton edge="end">
                    <ArrowForwardIosIcon
                      sx={{ color: "black", fontSize: "10px" }}
                    />
                  </IconButton>
                }
              >
                <Link
                  href="/profile"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <div style={{ display: "flex" }}>
                    <DoNotDisturbOnIcon
                      sx={{ color: "black", fontSize: "30px" }}
                    />
                    <ListItemText sx={{ paddingLeft: "15px" }}>
                      <Typography variant="h10" fontWeight="bold">
                        Penalty History
                      </Typography>
                      {secondary ? (
                        <Typography variant="body2">Secondary text</Typography>
                      ) : null}
                    </ListItemText>
                  </div>
                </Link>
              </ListItem>
              <Divider />
              <ListItem
                secondaryAction={
                  <IconButton edge="end">
                    <ArrowForwardIosIcon
                      sx={{ color: "black", fontSize: "10px" }}
                    />
                  </IconButton>
                }
              >
                <Link
                  href="/profile"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <div style={{ display: "flex" }}>
                    <NotificationsActiveIcon
                      sx={{ color: "black", fontSize: "30px" }}
                    />
                    <ListItemText sx={{ paddingLeft: "15px" }}>
                      <Typography variant="h10" fontWeight="bold">
                        Notification
                      </Typography>
                      {secondary ? (
                        <Typography variant="body2">Secondary text</Typography>
                      ) : null}
                    </ListItemText>
                  </div>
                </Link>
              </ListItem>
              <Divider />
              <ListItem
                secondaryAction={
                  <IconButton edge="end">
                    <ArrowForwardIosIcon
                      sx={{ color: "black", fontSize: "10px" }}
                    />
                  </IconButton>
                }
              >
                <Link
                  href="/profile"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <div style={{ display: "flex" }}>
                    <LiveHelpIcon sx={{ color: "black", fontSize: "30px" }} />
                    <ListItemText sx={{ paddingLeft: "15px" }}>
                      <Typography variant="h10" fontWeight="bold">
                        Support
                      </Typography>
                      {secondary ? (
                        <Typography variant="body2">Secondary text</Typography>
                      ) : null}
                    </ListItemText>
                  </div>
                </Link>
              </ListItem>
              <Divider />
            </List>
          </Demo>
        </Grid>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
      </Main>
    </Box>
  );
}
