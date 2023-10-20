import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import styled from "styled-components";
import { sliderItems } from "../data";
import { useState } from "react";
import { Link } from 'react-router-dom';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  margin-top: 10px;
  overflow: hidden;
`;
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: skyblue;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => (props.direction === "left" ? "10px" : "auto")};
  right: ${(props) => (props.direction === "right" ? "10px" : "auto")};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1s ease;
  transform: translateX(${props=>props.slideIndex*-100}vw);
`;
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${props=>props.bg};
`;
 
const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const Imgcontainer = styled.div`
  flex: 1;
  height: 100%;
`;
const Infocontainer = styled.div`
  flex: 1;
  padding: 50px;
`;
const Title = styled.h1`
  font-size: 70px;
`;
const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;
const Btn = styled.div`
  display: flex;
  gap: 40px;
`;


const Slider = () => {
   const[slideIndex,setslideIndex] = useState(0);
  const handleClick = (direction)=>{
    if(direction==="left"){
      setslideIndex(slideIndex>0?slideIndex-1: 2);
    }
    else{
      setslideIndex(slideIndex<2?slideIndex+1: 0);
    }
  }
  return (
    <Container>
      <Arrow direction="left" onClick={()=>handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((items)=>( 
        <Slide bg={items.bg} key={items.id}>
          <Imgcontainer>
            <Image src= {items.img} />
          </Imgcontainer>
          <Infocontainer>
            <Title> {items.title}</Title>
            <Desc> {items.desc}</Desc>
            <Btn> 
            <Button><Link to="/ProductList" style={{ color: 'inherit', textDecoration: 'none' }}><b>PRODUCT</b></Link></Button>
              
            <Button><Link to="/Product" style={{ color: 'inherit', textDecoration: 'none' }}><b>TODAY'S OFFER ON</b></Link></Button>
            </Btn>
          </Infocontainer>
        </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={()=>handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
