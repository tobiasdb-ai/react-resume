import "./StickyHeader.css";

import React from "react";
import { Sticky } from "semantic-ui-react";

const StickyHeader = ({ location, stickTo, children }) => {
  return (
    <Sticky context={stickTo} className="sticky-header">
      <div className="sticky-header">{children}</div>
    </Sticky>
  );
};

export default StickyHeader;
