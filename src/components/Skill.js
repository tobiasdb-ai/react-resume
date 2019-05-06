import { Header, Progress } from "semantic-ui-react";

import React from "react";

const Skill = ({ name, value }) => {
  return (
    <div>
      <Header as="h4">{name}</Header>
      <Progress percent={value} size="tiny" color="blue" />
    </div>
  );
};

export default Skill;
