import { Card, Image } from "semantic-ui-react";

import React from "react";

const Portfolio = ({ children }) => {
  return <Card.Group centered>{children}</Card.Group>;
};

const PortfolioItem = ({ image, children }) => {
  return (
    <Card>
      <Image src={image} />
      {children}
    </Card>
  );
};

const PortfolioItemContent = ({ title, children }) => {
  return (
    <Card.Content>
      <Card.Header>{title}</Card.Header>
      <Card.Description>{children}</Card.Description>
    </Card.Content>
  );
};

const PortfolioItemFooter = ({ children }) => {
  return <Card.Content extra>{children}</Card.Content>;
};

export { Portfolio, PortfolioItem, PortfolioItemContent, PortfolioItemFooter };
