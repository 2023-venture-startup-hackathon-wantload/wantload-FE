import React from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getCategoryItems } from "../../../api/itemController";
import {
  CATEGORY_TYPE,
  FortuneProductData,
  MainProductData,
} from "../../../data/type";

const HotItem = ({
  category,
  fortune,
}: {
  category: CATEGORY_TYPE;
  fortune: FortuneProductData[];
}) => {
  const navigate = useNavigate();
  const { data, isLoading, isError } = useQuery<MainProductData[]>(
    ["get-category-items", category],
    () => getCategoryItems(category),
  );

  if (isError) {
    return <div>에러 발생</div>;
  }

  if (isLoading) {
    return <div>Loading..</div>;
  }

  return (
    <HotItemBox>
      {data?.map((item) => (
        <HotItemPiece
          key={item.itemId}
          onClick={() => {
            navigate("/loading", {
              state: { itemId: item.itemId, fortuneItems: fortune },
            });
          }}
        >
          <img
            src={item.itemPhoto}
            style={{ width: "130px", height: "130px", borderRadius: "5px" }}
            alt={item.name}
          />
          <ItemName>{item.name}</ItemName>
          <ItemPrice>{item.price}</ItemPrice>
        </HotItemPiece>
      ))}
    </HotItemBox>
  );
};

const HotItemBox = styled.div`
  width: 359px;
  display: flex;
  gap: 11px;
  overflow-x: scroll;
  /* Hide horizontal scrollbar */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, and Opera */
  }
`;

const HotItemPiece = styled.div`
  width: 130px;
`;

const ItemName = styled.div`
  color: #000;
  font-family: "Pretendard";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.012px;
`;

const ItemPrice = styled.div`
  color: #000;
  font-family: "Pretendard";
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.012px;
`;

export default HotItem;
