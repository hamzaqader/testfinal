// import ResponsiveAppBar from "../components/header/header";
// import * as React from 'react';
// import PropTypes from 'prop-types';
import Box from "@mui/material/Box";
import cardimage from "../assests/section1_right.png";
import about1 from "../assests/aboutimg.png";
import about2 from "../assests/aboutimg2.png";
import { useState } from "react";


// function 2tem(props) {
//     const { sx, ...other } = props;
//     return (
//       <Box
//         sx={{

//           borderColor: (theme) =>
//             theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
//           p: 1,
//           m: 1,
//           borderRadius: 2,
//           fontSize: '0.875rem',
//           fontWeight: '700',
//           ...sx,
//         }}
//         {...other}
//       />
//     );
//   }

//   Item.propTypes = {
//     /**
//      * The system prop that allows defining system overrides as well as additional CSS styles.
//      */
//     sx: PropTypes.oneOfType([
//       PropTypes.arrayOf(
//         PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool]),
//       ),
//       PropTypes.func,
//       PropTypes.object,
//     ]),
//   };

// export default function home (){
//     return(
//         <div className="mainfirst">

//         <ResponsiveAppBar/>
//         <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' ,}} style={{paddingLeft:80,paddingRight:80,marginTop:150}}>
//   <Item className="parenttext"><h1 className="text1">Top Online</h1><h1 className="text1"> <span className="redtext">Poker Sites</span> Deals</h1>
//   <span className="childtext">Detailed comparisons of each of the best ranked online poker room measured across a range of different features to make the selection process as easy as possible</span>

//   </Item>
//   <Item className="secondrowdiv"> <img style={{width:"100%"}} src={cardimage}/></Item>

// </Box>
//         </div>
//     )
// }
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ResponsiveAppBar from "../components/header/header";

export default function Home() {
  const [buttonColors, setButtonColors] = useState(['black', 'black', 'black']);

  const handleButtonClick = (index) => {
    const newButtonColors = [...buttonColors];
    newButtonColors.forEach((color, i) => {
      if (i === index) {
        newButtonColors[i] = 'red';
      } else {
        newButtonColors[i] = 'black';
      }
    });
    setButtonColors(newButtonColors);
  };
  return (
    <>
      {" "}
      <div className="mainfirst">
        <ResponsiveAppBar />
        <Container className="maincontainer">
          <Row className="parenttext">
            <Col md={6}>
              <h1 className="text1">Top Online</h1>
              <h1 className="text1">
                {" "}
                <span className="redtext">Poker Sites</span> Deals
              </h1>
              <span className="childtext">
                Detailed comparisons of each of the best ranked online poker
                room measured across a range of different features to make the
                selection process as easy as possible
              </span>
            </Col>
            <Col md={6} className="secondrowdiv">
              <img style={{ width: "100%" }} src={cardimage} />
            </Col>
          </Row>
        </Container>
        <div
          style={{
            border: "1px white solid",
            width: "70%",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />
      </div>
      <div className="aboutsection">
        <h1 className="text2" style={{}}>
          ABOUT<span className="redtext"> US</span>
        </h1>
        <p className="aboutext">
          Top15Poker was built by myself, Richard Zikakis and my aim was to
          build a reputable online poker directory and a platform to be able to
          share my understanding and love of the game. The site was first
          launched way back in 2004 and I have been steadily building the
          content ever since. I now have a number of editors and writers who
          contribute to the site as well as a number of freelance developers and
          poker enthusiasts. To be honest it's quite a spectrum - the team all
          do however have one thing in common. We are nuts about poker.
        </p>
        <p className="aboutext">
          {" "}
          I am a professional Software Test Manager with 14 years working in the
          largest Banks in the world (specialising in security and user
          capability). I like to think i know what good software looks like and
          I am keen to share my experience to get you playing on a platform that
          is safe, secure and one that you'll appreciate.
        </p>{" "}
        <p className="aboutext">
          {" "}
          We have tried to add a varied level of content to cater for a wide
          range of players. As well as a huge number of guides and articles - a
          big part of the site is geared towards comparing online poker sites.
          For any old hand, it is well known that there are far more sites that
          players should avoid than those that are worth your time.
          Top15Poker.com strips out the sites to avoid and focuses on comparing
          all the top sites. We have developed a wide range of poker toplists in
          which we compare sites by many different features - head over there
          and take a look. We now compare sites by over 20 different key
          features and use an intelligent scoring mechanism to score each site.
        </p>
        <div
          classname="aboutimage"
          style={{ display: "flex", flexDirection: "row",paddingLeft:"80px",paddingRight:"80px" }}
        >
          <div className="aboutdiv">
            <img src={about1} className="aboutimg"/>
            <p className="aboutthext">Have reviewed over 50 online rooms</p>
          </div>
          <div  className="aboutdiv">
          <img src={about2} className="aboutimg" />
            <p className="aboutthext">Only list trusted and reputable poker rooms</p>
          </div>
          <div  className="aboutdiv">
            <img src={about1} className="aboutimg" />
            <p className="aboutthext">Only list trusted and reputable poker rooms</p>
          </div>
          <div  className="aboutdiv">
          <img src={about2} className="aboutimg" />
            <p className="aboutthext">Only list trusted and reputable poker rooms</p>
          </div>
        </div>
        <div
          style={{
            border: "1px white solid",
            width: "70%",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />
        <div style={{marginTop:"50px"}}>
        <h1 className="text3" style={{}}>
        PREMIUM POKER <span className="redtext">BONUS OFFERS FOR 2023</span>
        </h1>
        <div
          classname=""
          style={{ display: "flex", flexDirection: "row",paddingTop:"30px",paddingLeft:"250px",columnGap:"20px" ,alignItems:"center",}}
        >
          <div className="roundbutton" style={{ backgroundColor: buttonColors[0]}}onClick={() => handleButtonClick(0)}  >
            
            <p className="buttontext">available </p>
          </div>
          <div  className="roundbutton" style={{ backgroundColor: buttonColors[1]}}onClick={() => handleButtonClick(1)}>
        
            <p className="buttontext" onClick={() => handleButtonClick(0)}>800 poker</p>
          </div>
          <div  className="roundbutton">
          
            <p className="buttontext">Best poker</p>
          </div>
          <div  className="roundbutton">
         
            <p className="buttontext">800 poker</p>
          </div>
          <div  className="roundbutton">
         
         <p className="buttontext">800 poker</p>
       </div>
        </div>
        </div>
      </div>
      
      {/* <div className='cardsection'>
hamza
           </div> */}
    </>
  );
}
