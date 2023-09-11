import "./MainContainer.css";

import { Button, Grid, Header, Icon, Label, Ref } from "semantic-ui-react";
import {
  Portfolio,
  PortfolioItem,
  PortfolioItemContent,
  PortfolioItemFooter
} from "./Portfolio";
import React, { createRef } from "react";
import { Timeline, TimelineHeader, TimelineItem } from "./Timeline";

import Profile from "./Profile";
import { Section } from "./Section";
import Skill from "./Skill";
import StickySide from "./StickySide";
import config from "../config.json";

const MakeTimeline = experience =>
  experience.map((item, i) => {
    return (
      <TimelineItem key={i} active={item.active}>
        <Header as="h4">
          {item.title}
          <Header.Subheader>
            <Icon name="calendar outline" />
            <span>{item.date}</span>
          </Header.Subheader>
        </Header>
        {item.description.map((descr, i) => (
          <p key={i} className="timeline-description">
            {descr}
          </p>
        ))}
        <Label.Group size="small">
          {item.labels.map((label, i) => (
            <Label key={i}>{label}</Label>
          ))}
        </Label.Group>
      </TimelineItem>
    );
  });

const MakeProfile = profile => (
  <Profile name={profile.name} title={profile.title} avatar={profile.avatarUrl}>
    <Button.Group basic size="small">
      {profile.sites.map((site, i) => (
        <Button
          key={i}
          icon={site.icon}
          href={site.url}
          target="_blank"
          disabled={site.url.length === 0}
        />
      ))}
    </Button.Group>

    <Button.Group vertical color={"blue"}>
      <Button
        labelPosition="right"
        content="Download CV"
        icon="download"
        disabled={profile.resume.url.length === 0}
        href={profile.resume.url}
        download={profile.resume.fileName}
      />
    </Button.Group>
  </Profile>
);

const MakePortfolio = portfolio =>
  portfolio.map((item, i) => (
    <PortfolioItem key={i} image={item.imageUrl}>
      <PortfolioItemContent title={item.title}>
        {item.description.map((desc, i) => (
          <p key={i}>{desc}</p>
        ))}
      </PortfolioItemContent>
      {item.urls.length > 0 ? (
        <PortfolioItemFooter>
          {item.urls.map((site, i) => {
            const regex = /^(?:https?:\/\/)?(?:www\.)?/i;
            return (
              <div>
                <Icon key={i} name={site.icon} />
                <a href={site.url}>{site.url.replace(regex, "")}</a>
              </div>
            );
          })}
        </PortfolioItemFooter>
      ) : null}
      <PortfolioItemFooter>
        <Label.Group size="tiny">
          {item.labels.map((label, i) => (
            <Label key={i}>{label}</Label>
          ))}
        </Label.Group>
      </PortfolioItemFooter>
    </PortfolioItem>
  ));

class MainContainer extends React.Component {
  contentRef = createRef();

  render() {
    return (
      <Grid stackable>
        <Grid.Row centered className="container-view" only="mobile tablet">
          {MakeProfile(config.profile)}
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width={4} only="computer">
            <StickySide stickTo={this.contentRef} offset={25}>
              {MakeProfile(config.profile)}
            </StickySide>
          </Grid.Column>

          <Grid.Column computer={12} mobile={16} className="container-view">
            <Ref innerRef={this.contentRef}>
              <Grid.Row className="container-content">
                <Section title="Experience">
                  <Grid columns={2} stackable stretched>
                    <Grid.Column>
                      <Timeline>
                        <TimelineHeader icon="suitcase" title="Work" />
                        {MakeTimeline(config.experience.work)}
                      </Timeline>
                    </Grid.Column>

                    <Grid.Column>
                      <Timeline>
                        <TimelineHeader icon="graduation" title="Education" />
                        {MakeTimeline(config.experience.education)}
                      </Timeline>
                    </Grid.Column>
                  </Grid>
                </Section>

                <Section title="Projects">
                  <Portfolio>{MakePortfolio(config.projects)}</Portfolio>
                </Section>

                <br />
                <br />
                <br />

                <Section title="Certificates">
                  <Portfolio>{MakePortfolio(config.certificates)}</Portfolio>
                </Section>
                
                <br />
                <br />
                <br />

                <Section title="Skills">
                  <Grid>
                    <Grid.Column width={8}>
                      {config.skills
                        .filter((_, i) => i % 2 === 0)
                        .map((skill, i) => (
                          <Grid.Row key={i}>
                            <Skill name={skill.name} value={skill.value} />
                          </Grid.Row>
                        ))}
                    </Grid.Column>
                    <Grid.Column width={8}>
                      {config.skills
                        .filter((_, i) => i % 2 !== 0)
                        .map((skill, i) => (
                          <Grid.Row key={i}>
                            <Skill name={skill.name} value={skill.value} />
                          </Grid.Row>
                        ))}
                    </Grid.Column>
                  </Grid>
                </Section>
              </Grid.Row>
            </Ref>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default MainContainer;
