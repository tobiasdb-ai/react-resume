import "./Timeline.css";

import { Header, Icon } from "semantic-ui-react";

import React from "react";

const Timeline = ({ children }) => {
  let childrenAsArray = React.Children.toArray(children);
  return (
    <div className="timeline">
      <ul>
        {childrenAsArray.map((c, i) => {
          return <li key={i}>{c}</li>;
        })}
      </ul>
    </div>
  );
};

const TimelineHeader = ({ icon, title }) => {
  return (
    <div className="timeline-header">
      <div className="timeline-header-title">
        <Header as="h2">{title}</Header>
      </div>
      {icon ? (
        <div className="timeline-header-icon">
          <Icon name={icon} size="big" />
        </div>
      ) : null}
    </div>
  );
};

const TimelineItem = ({ active = false, children }) => {
  if (active) {
    return <div className="timeline-item active">{children}</div>;
  }
  return <div className="timeline-item">{children}</div>;
};

export { Timeline, TimelineItem, TimelineHeader };
