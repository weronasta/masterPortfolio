import React from "react";
import "./PublicationCard.css";
import { Fade } from "react-reveal";
import { NavLink, Link } from "react-router-dom";

export default function ProjectCard({ data, theme }) {
  return (
    <div
      className="publication-card-div"
      style={{ backgroundColor: theme.highlight }}
    >
      {/* <Fade bottom duration={2000} distance="40px"> */}
      <NavLink
        to={data.link}
        tag={Link}
        activeStyle={{ fontWeight: "bold" }}
        style={{ color: theme.text, textDecoration: "none" }}
      >
        <div key={data.id}>
          <div className="publication-name-div">
            <p
              className="publication-name"
              style={{ color: theme.text, textDecoration: "underline" }}
            >
              {data.name}
            </p>
          </div>
          <p
            className="publication-description"
            style={{ color: theme.text, textDecoration: "none" }}
          >
            {data.description}
          </p>
          <div className="publication-details">
            <p
              className="publication-creation-date subTitle"
              style={{ color: theme.secondaryText, textDecoration: "none" }}
            >
              Company: {data.createdAt.split("T")[0]}
            </p>
          </div>
        </div>
      </NavLink>

      {/* </Fade> */}
    </div>
  );
}
