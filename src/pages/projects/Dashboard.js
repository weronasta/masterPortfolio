import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import ExperienceAccordion from "../../containers/experienceAccordion/ExperienceAccordion.js";
import "../experience/Experience.css";
import { dashboard } from "../../portfolio.js";
// import { Fade } from "react-reveal";
import ExperienceImg from "../experience/ExperienceImg";
import Skills from "../../containers/skills/Skills";
import ProjectIntro from "../../containers/projects/ProjectIntro1.js";

import "./Projects.css";

class Dashboard extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="experience-main">
        <Header theme={theme} />
        <ProjectIntro theme={theme} data={dashboard} />
        <div className="basic-projects">
          {/* <Fade bottom duration={2000} distance="40px"> */}
          <div className="projects-heading-div">
            <div className="projects-heading-text-div">
              <h1
                className="projects-heading-text"
                style={{ color: theme.text }}
              >
                My role
              </h1>
              <p
                className="projects-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {dashboard.myRole}
              </p>
            </div>
          </div>
          {/* </Fade> */}
        </div>
        <Skills theme={theme} data={dashboard} />
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Dashboard;
