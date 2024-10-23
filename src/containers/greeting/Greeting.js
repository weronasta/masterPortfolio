import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import FeelingProud from "./FeelingProud";

export default function Greeting(props) {
  const theme = props.theme;
  return (
    // <Fade bottom duration={1000} distance="40px">
    <div className="greet-main" id="greeting">
      <div className="greeting-main">
        <div className="greeting-text-div">
          <div>
            <h1 className="greeting-text" style={{ color: theme.text }}>
              {greeting.title}
            </h1>
            {greeting.nickname && (
              <h2 className="greeting-nickname" style={{ color: theme.text }}>
                {greeting.nickname}
              </h2>
            )}
            <p
              className="greeting-text-p subTitle"
              style={{ color: theme.secondaryText }}
            >
              {greeting.subTitle}
            </p>
            {/* <div className="portfolio-repo-btn-div">
                <Button
                  text="Check my projects"
                  newTab={true}
                  href={greeting.portfolio_repository}
                  theme={theme}
                  className="portfolio-repo-btn"
                />
              </div> */}

            {<p></p>}
            <SocialMedia />
            {/* <div className="button-greeting-div">
              <Button text="Contact me" href="#contact" />
              <Button text="See my resume" newTab={true} href={greeting.resumeLink} />
            </div> */}
          </div>
        </div>

        <div className="greeting-image-div">
          {
            <img
              alt="saad sitting on table"
              src={require("../../assets/images/hero_img.svg")}
            ></img>
          }
          {/* <FeelingProud theme={theme} /> */}
        </div>
      </div>
    </div>
    // </Fade>
  );
}
