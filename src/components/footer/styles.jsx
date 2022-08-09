import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: #f1f1f1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column wrap;
  padding: 4em;
  gap: 1em;

  .list_footer {
    padding: 10px;
  }
  .list_footer ul {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2em;
  }
  .list_footer ul a {
    color: #020b2c;
    font-size: 1.3em;
    transition: all 0.2s linear;
    cursor: pointer;
  }
  .list_footer ul a:hover {
    color: #ffc400;
    transform: scale(1.1);
  }

  .social_media {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }

  .social_media svg {
    width: 30px;
    height: 30px;
    color: #020b2c;
    transition: all 0.2s linear;
  }
  .social_media svg:hover {
    color: #ffc400;
    transform: scale(1.1);
  }
`;
