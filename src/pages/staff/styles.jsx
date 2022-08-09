import styled from "styled-components";

export const Content = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column wrap;
  padding: 21.2em 0;
  background-image: url(/assets/images/bgBody.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  filter: grayscale(55%);

  div {
    background-color: #020b2c;
    display: flex;
    align-items: center;
    flex-flow: column wrap;
    justify-content: center;
    padding: 25px;
    color: #ffc400;
    max-width: 600px;
    text-align: center;
    border-radius: 5px;
    gap: 15px;
  }

  div p {
    letter-spacing: 1px;
    font-family: serif;
    font-weight: 500;
  }

  div span {
    color: white;
  }
`;
