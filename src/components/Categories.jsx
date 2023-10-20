import styled from "styled-components";
import { categories } from "../data";
import Categoryitem from "./Categoryitem";

const Container = styled.div`
   display: flex;
   padding: 20px;
   justify-content: space-between;
`;

const Categories = () => {
  return (
    <Container> 
       {categories.map((items)=>(
          <Categoryitem items={items} key={items.id}/> 
       ))}
    </Container>
  )
}

export default Categories