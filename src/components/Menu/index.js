import React from "react";
import { Link } from "react-router-dom";
import * as Styled from "./styles";

const routes = [
  {
    label: "Colors",
    path: "colors",
  },
  {
    label: "Typography",
    path: "typography",
  },
  {
    label: "Spaces",
    path: "spaces",
  },
  {
    label: "Buttons",
    path: "buttons",
  },
  {
    label: "Inputs",
    path: "inputs",
  },
  {
    label: "Grid",
    path: "grid",
  },
];

const Menu = () => {
  return (
    <Styled.Header>
      <h1>
        Dev<span>challenges.io</span>
      </h1>
      <Styled.Menu>
        <Styled.List>
          {routes.map(({ path, label }) => (
            <li key={path}>
              <Link to={`/${path}`}>{label}</Link>
            </li>
          ))}
        </Styled.List>
      </Styled.Menu>
    </Styled.Header>
  );
};

export default Menu;
