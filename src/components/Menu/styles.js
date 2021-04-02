import styled from "styled-components";

export const Header = styled.header`
  width: 240px;
  background: #fafbfd;
  position: fixed;
  top: 0;
  bottom: 0;
  padding-top: 5rem;
  padding-left: 5.5rem;

  h1 {
    font-family: "Poppins", sans-serif;
    color: #f7542f;
    font-weight: 600;
    font-size: 1.4rem;

    span {
      color: #000;
    }
  }
`;

export const Menu = styled.nav`
  margin-top: 12rem;
`;

export const List = styled.ul`
  li {
    margin-bottom: 3.5rem;
    font-family: "Noto Sans JP", sans-serif;

    a {
      text-decoration: none;
      font-size: 1.5rem;
      font-weight: 500;
      color: #9e9e9e;
    }
  }
`;
