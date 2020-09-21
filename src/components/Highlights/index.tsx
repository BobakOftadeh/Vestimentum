import React from "react";
import { StyledHighlights, HighlightItem } from "./style";
import { IoIosBody } from "react-icons/io";
import { IoMdTrophy } from "react-icons/io";
import { IoIosBasketball } from "react-icons/io";
import { IoMdCar } from "react-icons/io";

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
        <h4>Award Winning</h4>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
          libero excepturi provident dolor aliquid, itaque reprehenderit.
        </p>
      </HighlightItem>
      <HighlightItem>
        <IoIosBasketball />
        <h4>Sports Ready</h4>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
          libero excepturi provident dolor aliquid, itaque reprehenderit.
        </p>
      </HighlightItem>
      <HighlightItem>
        <IoMdCar />
        <h4>Fast Shipping</h4>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
          libero excepturi provident dolor aliquid, itaque reprehenderit.
        </p>
      </HighlightItem>
    </StyledHighlights>
  );
};

export default Highlights;
