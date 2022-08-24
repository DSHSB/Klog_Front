import React, { useCallback, useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import WriteStyle from "./write.style";

const Write = () => {
  const [paper, setPaper] = useState("");
  const [title, setTitle] = useState<string>("");
  const [keyword, setKeyword] = useState<string[]>([]);
  const keyRef = useRef<any>();
  const textRef = useRef<any>();

  useEffect(() => {
    let textarea = document.getElementById("autoTextarea");

    if (textarea) {
      textarea.style.height = "auto";
      let height = textarea.scrollHeight; // 높이
      textarea.style.height = `${height + 96}px`;
    }
  }, [paper]);

  const changePaper = useCallback((e: any) => {
    setPaper(e.target.value);
  }, []);

  const changeTitle = useCallback((e: any) => {
    setTitle(e.target.value);
  }, []);

  const checkEnter = useCallback(
    (e: any) => {
      const value = keyRef.current.value;
      if (e.key === "Enter" && value !== "") {
        setKeyword([...keyword, value]);
        keyRef.current.value = "";
      }
      console.log(e.key);
    },
    [keyword]
  );

  const simpleStruct = useCallback(
    (type: string) => {
      switch (type) {
        case "h1":
          setPaper(paper.concat("\n\n# "));
          textRef.current.focus();
          return;
        case "h2":
          setPaper(paper.concat("\n\n## "));
          textRef.current.focus();
          return;
        case "h3":
          setPaper(paper.concat("\n\n### "));
          textRef.current.focus();
          return;
        case "h4":
          setPaper(paper.concat("\n\n#### "));
          textRef.current.focus();
          return;
        case "bold":
          setPaper(paper.concat("\n\n**텍스트**"));
          textRef.current.focus();
          return;
        case "italic":
          setPaper(paper.concat("\n\n_텍스트_ "));
          textRef.current.focus();
          return;
        case "pre":
          setPaper(paper.concat("\n\n> "));
          textRef.current.focus();
          return;
        case "link":
          setPaper(paper.concat("\n\n[링크텍스트](url) "));
          textRef.current.focus();
          return;
        case "img":
          setPaper(paper.concat("\n\n![]() "));
          textRef.current.focus();
          return;
        case "code":
          setPaper(paper.concat("\n\n```\n``` "));
          textRef.current.focus();
          return;
      }
    },
    [paper]
  );

  return (
    <WriteStyle>
      <div className="writing">
        <input
          className="title"
          value={title}
          placeholder="제목을 입력하세요"
          onChange={changeTitle}
        />
        <div className="tags">
          {keyword.map((v: string) => (
            <div className="tag">{v}</div>
          ))}
          <input
            ref={keyRef}
            type="text"
            placeholder={keyword.length === 0 ? "키워드를 입력하세요" : ""}
            onKeyUp={checkEnter}
          />
        </div>
        <div className="header">
          <div className="h1" onClick={() => simpleStruct("h1")}>
            1
          </div>
          <div className="h2" onClick={() => simpleStruct("h2")}>
            2
          </div>
          <div className="h3" onClick={() => simpleStruct("h3")}>
            3
          </div>
          <div className="h4" onClick={() => simpleStruct("h4")}>
            4
          </div>
          <div className="bold" onClick={() => simpleStruct("bold")}>
            5
          </div>
          <div className="italic" onClick={() => simpleStruct("italic")}>
            6
          </div>
          <div className="pre" onClick={() => simpleStruct("pre")}>
            6
          </div>
          <div className="link" onClick={() => simpleStruct("link")}>
            7
          </div>
          <div className="img" onClick={() => simpleStruct("img")}>
            8
          </div>
          <div className="code" onClick={() => simpleStruct("code")}>
            9
          </div>
        </div>
        <textarea
          id="autoTextarea"
          placeholder="끄적끄적..."
          onChange={changePaper}
          value={paper}
          ref={textRef}
        ></textarea>
      </div>
      <div className="markdown--container">
        <div className="markdown">
          <h1>{title}</h1>
          <ReactMarkdown>{paper}</ReactMarkdown>
        </div>
      </div>
      <footer>
        <button>임시저장</button>
        <button className="blue">내보내기</button>
      </footer>
    </WriteStyle>
  );
};

export default Write;
