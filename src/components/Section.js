import "./Section.css";

import { Divider, Header } from "semantic-ui-react";

import React from "react";

const Section = ({ title, subtitle, children }) => {
  return (
    <div className="section">
      <div className="section-header">
        <div className="section-title">
          {title}
          <span />
        </div>
        <div className="section-subtitle">{subtitle}</div>
      </div>

      <Divider />

      {children}
    </div>
  );
};

const SubSection = ({ title, children }) => {
  return (
    <div className="sub-section">
      <Header as="h3">{title}</Header>
      {children}
    </div>
  );
};

export { Section, SubSection };
