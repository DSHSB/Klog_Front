import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import * as P from "./PostStyle";
import LOVE from "../../../assets/image/WriteList/Vector.png";
import Kang from "../../../assets/image/Profile/Kang.jpeg";
import GitHub from "../../../assets/image/Post/GitHub.png";
import Mail from "../../../assets/image/Post/Mail.png";

import { useLocation, useNavigate } from "react-router";

const Post = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [title, setTitle] = useState("강성훈이 천재인 이유");
  const [categorie, setCategorie] = useState(["backend", "forntend"]);
  const [love, setLove] = useState("137");
  const [contnet, setContnet] = useState(
    "dfas&nbsp;&nbsp;&nbsp;dfsafdasdfsafsafsadf\n ## fsadf\n### fsadfsadf\n#### fsadfasd\n# adfsadfasdfsdfadfsad"
  );
  const [writerInfo, setWriterInfo] = useState({
    img: "../../../assets/image/Profile/Kang.jpeg",
    name: "강성훈",
    introduce: "고등학생 천재 주니어 개발자",
    connect: { git: "https://github.com/ksh5324", mail: "ksh5324@gmail.com" },
  });

  useEffect(() => {}, [location]);

  return (
    <P.PostContainer>
      <P.Post>
        <h1>{title}</h1>
        <P.CategoriesContainer>
          {categorie.map((i, idx) => {
            return <P.CategoriesBox key={idx}>{i}</P.CategoriesBox>;
          })}
        </P.CategoriesContainer>
        <P.LoveContainer>
          <img src={LOVE} />
          {love}
        </P.LoveContainer>
        <P.MarkdownContainer>
          <div className="markdown--container">
            <div className="markdown">
              <ReactMarkdown>{contnet}</ReactMarkdown>
            </div>
          </div>
        </P.MarkdownContainer>
        <P.WriterInfo>
          <div>
            <img src={Kang} />
            <div>
              <h3>{writerInfo.name}</h3>
              <p>{writerInfo.introduce}</p>
            </div>
          </div>
        </P.WriterInfo>
        <hr />
        <P.ConnectIconContaier>
          {writerInfo.connect.hasOwnProperty("mail") ? (
            <img title={writerInfo.connect.mail} src={Mail} />
          ) : null}
          {writerInfo.connect.hasOwnProperty("git") ? (
            <img
              id="gitIcon"
              src={GitHub}
              onClick={() => {
                window.open(`${writerInfo.connect.git}`);
              }}
            />
          ) : null}
        </P.ConnectIconContaier>
      </P.Post>
    </P.PostContainer>
  );
};

export default Post;
