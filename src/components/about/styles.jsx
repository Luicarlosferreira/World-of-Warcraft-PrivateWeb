import styled from "styled-components";

export const Content = styled.section`
  text-align: center;
  position: relative;
`;

export const Container = styled.section`
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 35px;
  padding: 10em 10px;
  flex-flow: wrap;

  .ContainerInformation {
    color: #020b2c;
    display: flex;
    flex-flow: column wrap;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 30px;
    max-width: 400px;
    overflow: hidden;
  }
  div img {
    border-radius: 5px;
    max-width: 400px;
    min-width: 200px;
    background-size: cover;
    background-repeat: no-repeat;
    cursor: pointer;
    transition: all 0.9s linear;
  }
  div img:hover {
    transform: rotate(-5deg) scale(1.2);
    -webkit-box-shadow: -10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000,
      5px 5px 4px 5px rgba(0, 0, 0, 0);
    box-shadow: -10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000,
      5px 5px 4px 5px rgba(0, 0, 0, 0);
  }
`;

export const Container_Information = styled.section`
  background-color: #020b2c;
  display: flex;
  align-items: center;
  justify-content: center;

  .Content_information {
    max-width: 1220px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column wrap;
    gap: 10px;
    position: relative;
    padding: 10em;
  }
  .Content_information hr {
    width: 30%;
    color: white;
    height: 1px;
  }
  .Content_information div {
    /* background-color: red; */
    color: white;
  }
  .container_Image img {
    max-width: 500px;
    transition: all 0.2s linear;
    cursor: pointer;
  }

  .Container_actions {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5em;
  }
  .Container_actions div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column wrap;
    gap: 10px;
    padding: 10px;
  }
  .Container_actions div h1 {
    color: #ffc400;
  }

  .Container_actions div p {
    letter-spacing: 2px;
  }
`;
