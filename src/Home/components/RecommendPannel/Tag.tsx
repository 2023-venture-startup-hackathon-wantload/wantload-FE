import React, { useState } from "react";
import styled from "styled-components";

export default function Tag() {
  const TagList = [
    { id: 1, name: "가전", eng: "HOME" },
    { id: 2, name: "식품", eng: "FOOD" },
    { id: 3, name: "뷰티", eng: "BEAUTY" },
    { id: 4, name: "생활", eng: "LIFE" },
    { id: 5, name: "취미", eng: "HOBBY" },
  ];

  const [selectedTag, setSelectedTag] = useState("가전");

  return (
    <TagBox>
      {TagList.map((item, index) => (
        <TagContainer>
          <TagItem
            key={index}
            isselectedcharacter={selectedTag === item.name}
            onClick={() => {
              setSelectedTag(item.name);
            }}
          >
            <TagEnglish>{item.eng}</TagEnglish>
          </TagItem>
          <TagName>{item.name}</TagName>
        </TagContainer>
      ))}
    </TagBox>
  );
}

const TagBox = styled.div`
  width: 375px;
  height: 109px;
  overflow-x: scroll;
  padding: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  border-bottom: 8px solid #f5f6f8;
`;

const TagContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;
`;

const TagItem = styled.button<{ isselectedcharacter: boolean }>`
  width: 55px;
  height: 55px;
  border-radius: 17px;
  border: 0.5px solid #ff9900;
  color: #ffffff;
  text-align: center;
  font-family: "Noto Sans", sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 140%;
  background: #ff9900;
  cursor: pointer;
`;

const TagEnglish = styled.div`
  color: #fff;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.012px;
`;

const TagName = styled.div`
  color: #f90;
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.013px;
`;
