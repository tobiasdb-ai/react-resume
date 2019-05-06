import "./Profile.css";

import { Grid, Header, Image } from "semantic-ui-react";

import React from "react";

const Profile = ({ name, title, avatar, children }) => {
  const childrenArray = React.Children.toArray(children);

  return (
    <div className="profile">
      <Grid centered container>
        <Grid.Row>
          <Header as="h2" className="profile-title">
            {name}
            <Header.Subheader>{title}</Header.Subheader>
          </Header>
        </Grid.Row>
        <Grid.Row>
          <Image src={avatar} />
        </Grid.Row>

        {childrenArray.map((c, i) => {
          return <Grid.Row key={i}>{c}</Grid.Row>;
        })}
      </Grid>
    </div>
  );
};

export default Profile;
