import React, { useCallback, useRef, useState } from "react";
import * as P from "./Interest.style";

const Interest = () => {
  const [categories, setCategories] = useState(["frontend", "backend"]);

  const textRef = useRef<HTMLInputElement>(null);

  const deleteCategories = useCallback(
    (e: any) => {
      setCategories((prev) => prev.filter((value) => value !== e.target.id));
    },
    [categories]
  );

  const checkEnter = useCallback(
    (event: { key: string }) => {
      if (event.key === "Enter" && textRef.current?.value.length!! >= 1) {
        setCategories(
          !categories.includes(textRef.current?.value!!)
            ? [...categories, textRef.current?.value!!]
            : categories
        );
        textRef.current && (textRef.current.value = "");
      }
    },
    [categories]
  );

  let makeCategories = categories.map((categorie, i) => {
    return (
      <P.selectedCategoriesBox key={i} id={categorie} onClick={deleteCategories}>
        {categorie}
      </P.selectedCategoriesBox>
    );
  });

  return (
    <>
      <P.Title>관심 분야</P.Title>
      <P.CategoriesContainer>
        <input ref={textRef} placeholder="카테고리" type="text" onKeyDown={checkEnter} />
        <div className="selectedCategoriesContainer">{makeCategories}</div>
      </P.CategoriesContainer>
    </>
  );
};

export default Interest;
