import HomeIcon from '@mui/icons-material/Home';
import { Button } from '@mui/material';

const Start = ()=>{
    return(
        <>
        <h1 style={{ textAlign: "center", color: "black", fontSize: "24px", fontWeight: "bold" }}>
  Welcome to KhiladiBaaz
</h1>
<Button
        variant="contained"
        style={{
          marginRight: "10px",
          backgroundColor: "#191970",
          color: "white",
          justifyContent: 'center',
          alignItems: 'center'
        }}
        href='/home'
      >
        <HomeIcon />
        Go to Homepage
      </Button>
      </>
    )
}
export default Start;