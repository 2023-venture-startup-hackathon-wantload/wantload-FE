import React, { useState } from 'react';
import styled from 'styled-components';

export default function Tag() {
  const TagList = [
    { id: 1, name: '가전' },
    { id: 2, name: '식품' },
    { id: 3, name: '뷰티' },
    { id: 4, name: '생활' },
    { id: 5, name: '취미' },
    { id: 6, name: '건강' },
  ];

  const [selectedTag, setSelectedTag] = useState('가전');

  return (
    <TagBox>
      {TagList.map((item, index) => (
        <TagItem
          key={index}
          isselectedcharacter={selectedTag === item.name}
          onClick={() => {
            setSelectedTag(item.name);
          }}
        >
          {item.name}
        </TagItem>
      ))}
    </TagBox>
  );
}

const TagBox = styled.div`
  width: 375px;
  height: 54px;
  overflow-x: scroll;
  padding: 12px;
  display: flex;
  gap: 12px;
  /* background: green; */
`;

const TagItem = styled.button<{ isselectedcharacter: boolean }>`
  width: 64px;
  height: 30px;
  border-radius: 3px;
  border: 0.5px solid #ff9900;
  color: ${(props) => (props.isselectedcharacter ? '#ffffff' : '#ff9900')};
  text-align: center;
  font-family: 'Noto Sans', sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 140%;
  background: ${(props) => (props.isselectedcharacter ? '#ff9900' : '#ffffff')};
  cursor: pointer;

  &:hover {
    background: ${(props) =>
      props.isselectedcharacter ? '#ff9900' : '#f0f0f0'};
  }
`;
