import React from "react";
import { SelectionWraper, ShirtImage, SweaterImage } from "./style";

const Selection = () => {
  return (
    <SelectionWraper>
      <ShirtImage>
        <h2>Quality Design</h2>
      </ShirtImage>
      <SweaterImage>
        <h2>Innovative Wear</h2>
      </SweaterImage>
    </SelectionWraper>
  );
};

export default Selection;
