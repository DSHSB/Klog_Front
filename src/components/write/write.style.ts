import styled from "styled-components";

const WriteStyle = styled.div`
  display: flex;
  height: 100%;

  .writing {
    min-height: 100vh;
    width: 50%;
    text-align: center;
    font-family: "Arial";

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
        font-size: 25px;
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
    height: 100vh;

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
`;

export default WriteStyle;
