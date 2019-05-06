import "./StickySide.css";

import React from "react";
import { Sticky } from "semantic-ui-react";

const StickySide = ({ stickTo, offset, children }) => {
  return (
    <Sticky context={stickTo} offset={offset}>
      <div className="sticky-side">{children}</div>
    </Sticky>
  );
};

export default StickySide;
