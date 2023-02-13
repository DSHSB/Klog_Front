import styled from "styled-components";
import headerImage from "../../../assets/image/Write/Header.png";

const WriteStyle = styled.div`
  display: flex;
  min-height: 100%;

  .writing {
    min-height: 100vh;
    width: 50%;
    text-align: center;
    font-family: "Arial";

    .header {
      margin: 0 auto;
      margin-top: 34px;
      width: 573px;
      display: flex;
      justify-content: space-between;

      div {
        display: flex;
        justify-content: center;
        align-items: center;

        width: 50px;
      }

      .h1 {
        background: url(${headerImage});
        height: 42px;
        background-position: 10px 0px;
      }
      .h2 {
        background: url(${headerImage});
        height: 42px;
        background-position: 9% 0px;
      }
      .h3 {
        background: url(${headerImage});
        height: 42px;
        background-position: 18% 0px;
      }
      .h4 {
        background: url(${headerImage});
        height: 42px;
        background-position: 27% 0px;
      }
      .bold {
        background: url(${headerImage});
        height: 42px;
        background-position: 36% -1px;
      }
      .italic {
        background: url(${headerImage});
        height: 42px;
        background-position: 48% -1px;
      }
      .pre {
        background: url(${headerImage});
        height: 42px;
        background-position: 60% -1px;
      }
      .link {
        background: url(${headerImage});
        height: 42px;
        background-position: 71% -3px;
      }
      .img {
        background: url(${headerImage});
        height: 42px;
        background-position: 81% -3px;
      }
      .code {
        background: url(${headerImage});
        height: 42px;
        background-position: 90% -3px;
      }
    }

    .title {
      width: 573px;
      font-style: normal;
      font-weight: 700;
      font-size: 60px;
      margin-top: 73px;
      outline: none;
      border: none;
    }

    .tags {
      margin: 0 auto;
      margin-top: 22px;
      width: 573px;
      min-height: 34px;
      display: flex;
      align-items: center;
      flex-wrap: wrap;

      .tag {
        margin-bottom: 5px;
        padding: 0 10px;
        min-width: 20px;
        height: 45px;
        background: #dfdfdf;
        border-radius: 15px;
        margin-right: 19px;

        flex-shrink: 0;

        display: flex;
        justify-content: center;
        align-items: center;

        font-weight: 700;
        font-size: 20px;
        color: #5077de;
      }

      input {
        outline: none;
        border: none;

        min-width: 100px;
        font-weight: 700;
        font-size: 30px;
        line-height: 34px;

        color: rgba(0, 0, 0, 0.5);
      }
    }

    textarea {
      margin-top: 21px;
      font-family: "Arial";

      min-height: 515px;
      width: 573px;
      resize: none;
      outline: none;
      border: none;

      font-style: normal;
      font-weight: 400;
      font-size: 20px;
    }
  }
  .markdown--container {
    background: rgba(54, 121, 253, 0.05);
    width: 50%;
    min-height: 100vh;

    .markdown {
      padding: 50px;

      font-family: "Arial";
      font-style: normal;
      font-weight: 400;
      font-size: 20px;

      h1 {
        font-size: 60px;
      }
    }
  }
  footer {
    background: #ffffff;
    box-shadow: 0px -4px 15px rgba(0, 0, 0, 0.1);

    padding-right: 31px;

    width: 50%;
    height: 67px;

    position: fixed;
    bottom: 0;
    left: 0;

    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 10px;

    button {
      font-family: "Arial";
      font-style: normal;
      font-weight: 700;
      font-size: 20px;

      border: none;
      background: #ffffff;

      border-radius: 10px;
      width: 129px;
      height: 44px;

      color: #5077de;
    }

    .blue {
      color: #ffffff;
      background: #5077de;
      box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.1);
    }
  }
`;

export default WriteStyle;
