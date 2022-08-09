import styled from "styled-components";

export const Container = styled.div`
  background: #020b2cd3;

  .Content {
    font-weight: 100;
    color: white;
    display: flex;
    justify-content: left;
    align-items: left;
    flex-flow: column wrap;
    padding: 20em 18px;
    gap: 1em;
    background-image: url(/assets/images/bgBody.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    filter: grayscale(55%);
  }

  .Content:nth-child(1) {
    display: flex;
    gap: 3em;
  }

  .title {
    font-size: 2em;
    color: #ffc400;
    letter-spacing: 5px;
  }
  .information {
    display: flex;
    flex-flow: column wrap;
    gap: 5px;
  }
  .information p {
    font-size: 2em;
    background-color: #020b2c9e;
    max-width: 560px;
    padding: 5px;
  }
  button {
    width: 150px;
    padding: 10px 15px;
    border: none;
    border-radius: 2px;
    font-size: 1.4em;
    cursor: pointer;
    font-family: "FuturaEF-Book";
    font-weight: bold;
    letter-spacing: 2px;
    background-color: #020b2c;
    color: white;
    outline: none;
    transition: all 0.2s linear;
  }
  button:hover {
    background-color: white;
    color: #020b2c;
  }
`;
