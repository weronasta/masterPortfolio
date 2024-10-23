import React, { Component } from "react";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import Skills from "../../containers/skills/Skills";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import { skills } from "../../portfolio";
import {
  greeting,
  projectsHeader,
  publicationsHeader,
  publications,
  projects,
} from "../../portfolio.js";
import { Fade } from "react-reveal";

import ProjectsData from "../../shared/opensource/projects.json";
import "../projects/Projects.css";
import ProjectsImg from "../projects/ProjectsImg";
import ProjectCard from "../../components/publicationsCard/ProjectCard.js";
import PublicationCard from "../../components/publicationsCard/PublicationCard";

class Home extends Component {
  render() {
    return (
      <div>
        <Header theme={this.props.theme} />
        <Greeting theme={this.props.theme} />
        <div className="basic-projects">
          {/* <Fade bottom duration={2000} distance="40px"> */}
          <div className="projects-heading-div">
            <div className="projects-heading-text-div">
              <h1
                className="projects-heading-text"
                style={{ color: this.props.theme.text }}
              >
                {projectsHeader.title}
              </h1>
              <p
                className="projects-header-detail-text subTitle"
                style={{ color: this.props.theme.secondaryText }}
              >
                {projectsHeader["description"]}
              </p>
            </div>
          </div>
          {/* </Fade> */}
        </div>
        <div className="repo-cards-div-main">
          {projects.data.map((pub) => {
            return <ProjectCard data={pub} theme={this.props.theme} />;
          })}
        </div>
        {/* Publications  */}
        {publications.data.length > 0 ? (
          <div className="basic-projects">
            {/* <Fade bottom duration={2000} distance="40px"> */}
            <div className="publications-heading-div">
              <div className="publications-heading-text-div">
                <h1
                  className="publications-heading-text"
                  style={{ color: this.props.theme.text }}
                >
                  {publicationsHeader.title}
                </h1>
                <p
                  className="projects-header-detail-text subTitle"
                  style={{ color: this.props.theme.secondaryText }}
                >
                  {publicationsHeader["description"]}
                </p>
              </div>
            </div>
            {/* </Fade> */}
          </div>
        ) : null}

        <div className="repo-cards-div-main">
          {publications.data.map((pub) => {
            return <PublicationCard pub={pub} theme={this.props.theme} />;
          })}
        </div>
        <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Home;
