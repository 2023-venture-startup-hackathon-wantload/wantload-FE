import styled from "styled-components";
import ItemSwiper from "./RecommendPannel/ItemSwiper";
import Tag from "./RecommendPannel/Tag";
import HotItem from "./RecommendPannel/HotItem";
import { useEffect, useState } from "react";
import { CATEGORY_TYPE, FortuneProductData } from "../../data/type";
import { useQuery } from "react-query";
import { getFortuneItems } from "../../api/fortuneController";

export default function RecommendPannel() {
  const [category, setCategory] = useState<CATEGORY_TYPE>("HOME");
  const { data, isLoading, isError } = useQuery<FortuneProductData[]>(
    "get-fortune-items",
    () => getFortuneItems(),
  );

  if (isError) {
    console.log("Error while get Fortune Data.");
  }
  if (isLoading) {
    console.log("Loading get Fortune Data...");
  }
  if (data) {
    console.log("get fortune success ====> ", data);
  }

  useEffect(() => {
    {
      console.log("category change : ", category);
    }
  }, [category]);

  return (
    <StyledRecommendPannel>
      <SwiperContainer>
        <ItemSwiper />
      </SwiperContainer>
      <Tag isSelected={category} setIsSelected={setCategory} />
      <HotItemContainer>
        <div
          style={{
            color: "#000",
            fontFamily: "Pretendard",
            fontSize: "18px",
            fontStyle: "normal",
            fontWeight: 600,
            lineHeight: "normal",
            letterSpacing: "0.018px",
            marginBottom: "13px",
            marginTop: "13px",
          }}
        >
          블랙프라이데이 인기 상품
        </div>
        <HotItem category={category} fortune={data !== undefined ? data : []} />
      </HotItemContainer>
    </StyledRecommendPannel>
  );
}

const StyledRecommendPannel = styled.div`
  min-width: 375px;
  max-width: 375px;
  height: 714px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background: red; */
`;

const SwiperContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 22px 0 10px 0;
  /* justify-content: 'center';
  align-items: 'center'; */
  /* background: yellow; */
`;

const HotItemContainer = styled.div`
  width: 375px;
  height: 264px;
  padding: 18px 16px;
  /* background: pink; */
`;
