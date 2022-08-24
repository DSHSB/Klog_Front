import React, { useCallback, useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import WriteStyle from "./write.style";

const Write = () => {
  const [paper, setPaper] = useState("끄적끄적...");
  const [title, setTitle] = useState<string>("제목을 입력하세요");
  const [keyword, setKeyword] = useState<string[]>([]);
  const keyRef = useRef<any>();

  useEffect(() => {
    let textarea = document.getElementById("autoTextarea");

    if (textarea) {
      textarea.style.height = "auto";
      let height = textarea.scrollHeight; // 높이
      textarea.style.height = `${height + 8}px`;
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

  return (
    <WriteStyle>
      <div className="writing">
        <input
          className="title"
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
        <div className="header"></div>
        <textarea
          id="autoTextarea"
          placeholder="끄적끄적..."
          onChange={changePaper}
        ></textarea>
      </div>
      <div className="markdown--container">
        <div className="markdown">
          <h1>{title}</h1>
          <ReactMarkdown>{paper}</ReactMarkdown>
        </div>
      </div>
    </WriteStyle>
  );
};

export default Write;
