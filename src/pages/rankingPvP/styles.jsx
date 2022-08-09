import styled from "styled-components";

export const Container = styled.section`
  padding: 10em;
  background-color: #f1f1f1;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column wrap;
  gap: 2em;

  .tableContainer {
    display: flex;
    justify-content: space-evenly;
    gap: 4em;
    background-color: #020b2c;
    padding: 2em;
    border-radius: 10px;
  }
  .tableContainer div {
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column wrap;
    gap: 18px;
    padding: 10px;
    border-radius: 10px;
  }
  .tableContainer div h1 {
    color: #ffc400;
    border-bottom: solid 1px #020b2c;
  }
  .tableContainer div p {
    border-bottom: solid 1px gray;
  }
`;
