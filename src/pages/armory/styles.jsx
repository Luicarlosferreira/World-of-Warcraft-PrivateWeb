import styled from "styled-components";

export const ArmoryContainer = styled.div`
  padding: 8em 0;

  #armory_stats {
    color: white;
    background-size: center;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column wrap;
    padding: 10px;
    max-width: 700px;
    height: 300px;
    gap: 1px;
    margin: auto;
  }
  #armory_stats div b {
    font-size: 1.5em;
    font-weight: bolder;
    letter-spacing: 2px;
  }
  #armory_stats div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
  }
  #armory_stats div p {
    color: #ffc400;
  }
`;

export const Template = styled.div`
  #wrapper {
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  }
  .title {
    color: #deb601;
  }
  .center {
    text-align: center;
  }
  .center span {
    color: white;
    font-size: 1.5em;
    letter-spacing: 2px;
  }
  .item {
    width: 70px;
    height: 70px;
  }
  .item a {
    background-image: url("/assets/images/item_frame.png");
    width: 68px;
    height: 68px;
    margin-top: -6px;
    margin-left: -6px;
    position: absolute;
    z-index: 999;
    display: block;
  }
  #armory {
    max-width: 700px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-flow: wrap;
    margin-left: auto;
    margin-right: auto;
    background-size: 60%;
    background-position: top center;
    background-repeat: no-repeat;
    /* border: solid 1px #deb60142; */
    border-radius: 5px;
    padding: 1px;
  }
  #armory_left {
    float: left;
    margin-left: 40px;
    margin-top: 15px;
  }
  #armory_right {
    float: left;
    margin-top: 15px;
    margin-right: 20px;
  }
  #armory_bottom .item {
    float: left;
  }
  #armory_bottom {
    clear: both;
    margin: auto;
    width: 222px;
    height: 70px;
  }
`;
