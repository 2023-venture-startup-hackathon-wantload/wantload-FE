import React from "react";
import styled from "styled-components";
import { CATEGORY_TYPE } from "../../../data/type";

export default function Tag({
  isSelected,
  setIsSelected,
}: {
  isSelected: string;
  setIsSelected: (item: CATEGORY_TYPE) => void;
}) {
  const TagList: { id: number; name: string; eng: CATEGORY_TYPE }[] = [
    { id: 1, name: "가전", eng: "HOME" },
    { id: 2, name: "식품", eng: "FOOD" },
    { id: 3, name: "뷰티", eng: "BEAUTY" },
    { id: 4, name: "생활", eng: "LIFE" },
    { id: 5, name: "취미", eng: "HOBBY" },
  ];

  return (
    <TagBox>
      {TagList.map((item, index) => (
        <TagContainer>
          <TagItem
            key={index}
            isselectedcharacter={isSelected === item.eng}
            onClick={() => setIsSelected(item.eng)}
          >
            <TagEnglish>{item.eng}</TagEnglish>
          </TagItem>
          <TagName isselectedcharacter={isSelected === item.eng}>
            {item.name}
          </TagName>
        </TagContainer>
      ))}
    </TagBox>
  );
}

const TagBox = styled.div`
  width: 375px;
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
  color: #ffffff;
  text-align: center;
  font-family: "Noto Sans", sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 140%;
  cursor: pointer;

  background-color: ${({ isselectedcharacter }) =>
    isselectedcharacter ? "rgba(255, 153, 0, 1)" : "rgba(255, 153, 0, 0.4)"};
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

const TagName = styled.div<{ isselectedcharacter: boolean }>`
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.013px;
  color: ${({ isselectedcharacter }) =>
    isselectedcharacter ? "rgba(255, 153, 0, 1)" : "rgba(255, 153, 0, 0.4)"};
`;
