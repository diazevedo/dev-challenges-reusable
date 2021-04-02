import styled, { css } from "styled-components";

import { lighten, darken } from "polished";

const sizes = {
  sm: `0.6rem 1.2rem`,
  md: `0.8rem 1.6rem`,
  lg: `1.2rem 2.2rem`,
};

const fontSizes = {
  sm: `1.2rem`,
  md: `1.6rem`,
  lg: `1.8rem`,
};

const themes = {
  default: {
    background: "#e0e0e0",
    text: "#3F3F3F",
    hover: "#aeaeae",
  },
  primary: {
    background: "#2962ff",
    text: "#fff",
    hover: "#0039CB",
  },
  secondary: {
    background: "#455A64",
    text: "#fff",
    hover: "#1C313A",
  },
  danger: {
    background: "#D32F2F",
    text: "#fff",
    hover: "#9A0007",
  },
};

const colors = (theme) => {
  return css`
    background-color: ${themes[theme].background};
    color: ${themes[theme].text};
    box-shadow: 0px 2px 3px 0px ${lighten(0.2, themes[theme].background)};

    &:hover {
      background-color: ${themes[theme].hover};
    }
  `;
};

const hovers = (theme) =>
  css`
    background-color: ${themes[theme].hover};
  `;

const variants = {
  outline: {
    normal: (color) =>
      css`
        color: ${color};
        background: ${lighten(0.9, color)};
        border: 1px solid ${color};
        box-shadow: none;

        &:hover {
          background: ${lighten(0.4, color)};
        }
      `,
    hover: (color) =>
      css`
        background: ${lighten(0.4, color)};
      `,
  },
  text: {
    normal: (color) => {
      return css`
        color: ${color};
        background: #fff;
        border: 0;
        padding-left: 0;

        &:hover {
          padding-left: 1.6rem;
          background: ${lighten(0.4, color)};
        }
      `;
    },
    hover: (color) => css`
      padding-left: 1.6rem;
      background: ${lighten(0.4, color)};
    `,
  },
};

export const Button = styled.button.attrs((props) => ({
  disabled: props.disabled,
}))`
  font-family: "Noto Sans JP", sans-serif;
  font-weight: 500;
  padding: ${(props) => sizes[props.size]};

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-radius: 6px;
  font-size: 1.4rem;
  cursor: pointer;

  &:disabled {
    opacity: 0.6;
    pointer-events: none;
  }

  ${(props) => colors(props.color)};

  ${(props) =>
    props.variant &&
    variants[props.variant].normal(themes[props.color].background)};

  ${(props) =>
    props.disabledShadow &&
    css`
      box-shadow: none;
    `};

  ${(props) => props.hover && !props.variant && hovers(props.color)};

  ${(props) =>
    props.hover &&
    props.variant &&
    variants[props.variant].hover(themes[props.color].background)};

  ${(props) =>
    props.startIcon &&
    css`
      span {
        font-size: ${(props) => fontSizes[props.size]};
        margin-right: 1rem;
      }
    `}

  ${(props) =>
    props.endIcon &&
    css`
      span {
        font-size: ${(props) => fontSizes[props.size]};
        margin-left: 1rem;
      }
    `}
`;
