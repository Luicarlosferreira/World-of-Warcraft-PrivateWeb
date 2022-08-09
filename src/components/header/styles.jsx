import styled from "styled-components";

export const NavBar = styled.nav`
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 17px;
  position: fixed;
  z-index: 1000;
  background-color: #020b2c;
  width: 100%;

  a {
    text-decoration: none;
  }
  span {
    font-family: "LifeCraft";
    color: white;
    letter-spacing: 2px;
    font-size: 1.7em;
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1em;
  }

  ul a {
    font-size: 15px;
    text-decoration: none;
    color: white;
    padding: 5px 15px;
    transition: all 0.2s linear;
    border-radius: 2px;
    border: none;
    letter-spacing: 1px;
  }
  ul a:hover {
    background-color: #f1f1f1;
    color: #020b2c;
  }
  button {
    display: none;
  }

  .spanAccount {
    color: #ffc400;
    font-family: serif;
    font-size: 15px;
  }
`;
