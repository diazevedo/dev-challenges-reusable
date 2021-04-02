import React from "react";
import { NavLink } from "react-router-dom";
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

const activeStyle = {
  fontWeight: "600",
  color: "#3F3F3F",
};
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
              <NavLink activeStyle={activeStyle} to={`/${path}`}>
                {label}
              </NavLink>
            </li>
          ))}
        </Styled.List>
      </Styled.Menu>
    </Styled.Header>
  );
};

export default Menu;
