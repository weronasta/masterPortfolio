import React from "react";
import "./ProjectIntro.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { projectIntro1 } from "../../portfolio.js";
// import { Fade } from "react-reveal";

export default function ProjectIntro(props) {
  const theme = props.theme;
  const data = props.data;
  return (
    // <Fade bottom duration={1000} distance="40px">
    <div className="greet-main" id="projintro">
      <div className="greeting-main">
        <div className="greeting-text-div">
          <div>
            <h1 className="greeting-text" style={{ color: theme.text }}>
              {data.title}
            </h1>
            {data.nickname && (
              <h2 className="greeting-nickname" style={{ color: theme.text }}>
                {data.nickname}
              </h2>
            )}
            <p
              className="greeting-text-p subTitle"
              style={{ color: theme.secondaryText }}
            >
              {data.subTitle}
            </p>

            {/* <p></p>
              <SocialMedia theme={theme} /> */}

            {/* <div className="button-greeting-div">
              <Button text="Contact me" href="#contact" />
              <Button text="See my resume" newTab={true} href={greeting.resumeLink} />
            </div> */}
          </div>
        </div>

        <div className="greeting-image-div">
          {
            <img
              alt="image"
              src={require(`../../assets/images/${data.imgpath}`)}
            ></img>
          }
          {/* <FeelingProud theme={theme} /> */}
        </div>
      </div>
    </div>
    // </Fade>
  );
}
