import React, {useState} from "react";
import styled from "styled-components";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import {sliderItems} from "../data"

const Slider = () => {
const [slideIndex, setSlideIndex] = useState(0)
const handleClick = (direction) => {
    if(direction === "left"){
        setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2)
    }
    else{
        setSlideIndex(slideIndex < 2 ? slideIndex+1 : 0)
    }
}

  return (
    <Herobanner>
      <Arrow direction="left" onClick = {() => handleClick("left")}>
        <ArrowBackIosNewOutlinedIcon />
      </Arrow>
      <Wraper slideIndex={slideIndex}>
          {sliderItems.map((item) =>(
        <SlideContainer bgcolor={item.bgcolor}>
          <ImgContainer >
            <Image
              src={item.img}
            />
          </ImgContainer>
          <InfoContainer>
            <Title >{item.title}</Title>
            <Description>
             {item.desc}
            </Description>
            <Button>Shop Now</Button>
          </InfoContainer>
        </SlideContainer>
        ))}
      </Wraper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowForwardIosOutlinedIcon />
      </Arrow>
    </Herobanner>
  );
};

export default Slider;

const Herobanner = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow : hidden;
`;
const Arrow = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50px;
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0px;
  bottom: 0px;
  margin: auto;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  cursor: pointer;
  opacity: 0.5;
  z-index : 2;
`;

const Wraper = styled.div`
  height: 100%;
  display : flex;
  position : relative
  transform : translateX(${props => props.slideIndex * -100}vw)
`;
const SlideContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: canter;
  background-color: #${props => props.bgcolor}
`;
const ImgContainer = styled.div`
height : 100%
flex : 1;
`;
const Image = styled.img`
  height: 80%;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;
const Title = styled.h1`
  font-size: 60px;
`;

const Description = styled.p`
margin : 50px 0px;
  font-size: 20px;
  font-weight : 500;
  letter-spacing : 3px;

`;

const Button = styled.button`
padding : 10px;
font-size : 20px;
background-color : transparent;
cursor : pointer;
`;

// const HeroBanner = styled.div`
// width: 100%;
// height : 100vh;
// display: flex;
// background-color: orange;
// position: relative;
// `
// const Arrow = styled.div `
// width : 50px;
// height : 50px;
// background-color : #757575;
// border-radius : 50%;
// display: flex;
// align-items: center;
// justify-content : center;
// color : white;
// position: absolute;
// top: 0;
// bottom: 0;
// margin: auto;
// left: ${props => props.direction === 'left' && '10px'};
// right: ${props => props.direction === 'right' && '10px'};
// `
