import React from "react";
import Button from '@mui/material/Button';
import img1 from "./images/b2.jpeg"
import img2 from "./images/b3.jpeg"
import ButtonGroup from '@mui/material/ButtonGroup';
const Home = () => {
    return (
        <>
        <img src={img1} alt="" width="100" />
      <img src={img2} alt="" width="100" />
        <br></br>
      <Button>Primary</Button>
      <Button disabled>Disabled</Button>
      <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>
        </>
        
    );
  };
  
  export default Home;