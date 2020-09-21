import React from "react";
import { StyledCard, StyledImg } from "./style";

interface cardProps {
  image: string;
  name: string;
  price: string;
  id: string;
}

const Card: React.FC<cardProps> = (props) => {
  return (
    <StyledCard to={`/product/${props.id}`}>
      <StyledImg src={props.image} alt="" />
      <div>{props.name}</div>
      <div>${props.price}</div>
    </StyledCard>
  );
};

export default Card;
