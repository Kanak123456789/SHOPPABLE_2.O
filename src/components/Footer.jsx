import styled from "styled-components";
import { mobile } from "../responsive";
import { FacebookOutlined, MailOutlined, PhoneOutlined, RoomOutlined } from "@mui/icons-material";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';

  
  const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection: "column" })}
  `;
  
  const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
  `;
  
  const Logo = styled.h1``;
  
  const Desc = styled.p`
    margin: 20px 0px;
  `;
  
  const SocialContainer = styled.div`
    display: flex;
    
  `;
  
  const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    cursor: pointer;
  `;
  
  const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display: "none" })}
  `;
  
  const Title = styled.h3`
    margin-bottom: 30px;
  `;
  
  const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
     
  `;
  
  const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
    cursor: pointer;
  `;
  
  const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ backgroundColor: "#fff8f8" })}
  
  `;
  
  const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    cursor: pointer;
  `;
  
  const Payment = styled.img`
      width: 50%;
  `;
   
  
  const Footer = () => {
    return (
      <Container>
        <Left>
          <Logo>SHOPPABLE_2.O</Logo>
          <Desc>
           
"Shoppable_2.0: Elevate your online shopping experience with our seamless e-commerce platform that offers a curated selection of high-quality products, intuitive navigation, and secure transactions."
          </Desc>
          <SocialContainer>
            <SocialIcon color="3B5999">
            <a href=" " style={{ color: 'inherit',textdecoration: 'none'}}> <FacebookOutlined /></a>
            </SocialIcon>
            <SocialIcon color="E4405F">
            <a href=" " style={{ color: 'inherit',textdecoration: 'none'}}> <InstagramIcon /></a>
            </SocialIcon>
            <SocialIcon color="55ACEE">
            <a href=" " style={{ color: 'inherit',textdecoration: 'none'}}> <TwitterIcon /></a>
            </SocialIcon>
            <SocialIcon color="E60023">
            <a href=" " style={{ color: 'inherit',textdecoration: 'none'}}> <PinterestIcon /></a>
            </SocialIcon>
          </SocialContainer>
        </Left>
        <Center>
          <Title>Useful Links</Title>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Man Fashion</ListItem>
            <ListItem>Woman Fashion</ListItem>
            <ListItem>Accessories</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Terms</ListItem>
          </List>
        </Center>
        <Right>
          <Title>Contact</Title>
          <ContactItem>
            <RoomOutlined style={{marginRight:"10px"}}/> Villa no.153, Upwan (Ashadeep), near RTO office, N.H. 8 , Behror (Alwar) 301701
          </ContactItem>
          <ContactItem>
            <PhoneOutlined style={{marginRight:"10px"}}/> 6377905236
          </ContactItem>
          <ContactItem>
            <MailOutlined style={{marginRight:"10px"}} /> shoppable_2.O@gamil.com
          </ContactItem>
          <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>
      </Container>
    );
  };
  
  export default Footer;