import styled from "styled-components";

export const Container = styled.div`
  background-image: url(/assets/images/bgBody.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  filter: grayscale(55%);
  padding: 11em 2em;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;

  .signIn_path {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
  .signIn_path a {
    color: white;
  }
  .signIn_path span {
    transition: all 0.2s linear;
    cursor: pointer;
    border-bottom: 2px solid red;
  }
  .signIn_path span:hover {
    color: red;
  }
  .container_form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column wrap;
    padding: 60px;
    background-image: url(/assets/images/login_wnd_bg.jpg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    filter: hue-rotate(220deg);
    transition: all 0.2s linear;
    gap: 25px;
  }
`;
