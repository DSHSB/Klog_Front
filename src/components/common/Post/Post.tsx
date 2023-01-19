import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import * as P from "./PostStyle";
import LOVE from "../../../assets/image/WriteList/Vector.png";
import Kang from "../../../assets/image/Profile/Kang.jpeg";
import { useLocation } from "react-router";

const Post = () => {
  const location = useLocation();
  const [title, setTitle] = useState("강성훈이 천재인 이유");
  const [categorie, setCategorie] = useState(["backend", "forntend"]);
  const [love, setLove] = useState("137");
  const [contnet, setContnet] = useState(
    "dfas&nbsp;&nbsp;&nbsp;dfsafdasdfsafsafsadf\n ## fsadf\n### fsadfsadf\n#### fsadfasd\n# adfsadfasdfsdfadfsad"
  );

  useEffect(() => {}, [location]);

  return (
    <P.PostContainer>
      <P.Post>
        <h1>{title}</h1>
        <P.CategoriesContainer>
          {categorie.map((i, idx) => {
            return <P.CategoriesBox>{i}</P.CategoriesBox>;
          })}
        </P.CategoriesContainer>
        <P.LoveContainer>
          <img src={LOVE} />
          {love}
        </P.LoveContainer>
        <P.MarkdownContainer>
          <img src={Kang} />
          <div className="markdown--container">
            <div className="markdown">
              <ReactMarkdown>{contnet}</ReactMarkdown>
            </div>
          </div>
        </P.MarkdownContainer>
      </P.Post>
    </P.PostContainer>
  );
};

export default Post;
