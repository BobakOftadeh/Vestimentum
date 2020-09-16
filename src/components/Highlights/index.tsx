import React from "react";
import styled from "styled-components";
import { IoIosBody } from "react-icons/io";
import { IoMdTrophy } from "react-icons/io";
import { IoIosBasketball } from "react-icons/io";
import { IoMdCar } from "react-icons/io";

const StyledHighlights = styled.section`
  grid-column: center-start/center-end;
  color: var(--color-orange);
  padding: 3rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(22rem, 1fr));
  grid-gap: 3rem;
  text-align: center;

  svg {
    font-size: 3rem;
  }
`;

const HighlightItem = styled.div`
  padding: 2rem;
  height: 18rem;
  background-color: var(--color-orange-light);
  transition: all 0.3s;
  backface-visibility: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);

  & > *:not(:last-child) {
    margin-bottom: 0.5rem;
  }

  &:hover {
    transform: scale(1.15);
  }
`;

const Highlights = () => {
  return (
    <StyledHighlights>
      <HighlightItem>
        <IoIosBody />
        <h4>Great Fit</h4>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
          libero excepturi provident dolor aliquid, itaque reprehenderit.
        </p>
      </HighlightItem>
      <HighlightItem>
        <IoMdTrophy />
        <h4>Great Fit</h4>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
          libero excepturi provident dolor aliquid, itaque reprehenderit.
        </p>
      </HighlightItem>
      <HighlightItem>
        <IoIosBasketball />
        <h4>Great Fit</h4>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
          libero excepturi provident dolor aliquid, itaque reprehenderit.
        </p>
      </HighlightItem>
      <HighlightItem>
        <IoMdCar />
        <h4>Great Fit</h4>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
          libero excepturi provident dolor aliquid, itaque reprehenderit.
        </p>
      </HighlightItem>
    </StyledHighlights>
  );
};

export default Highlights;
