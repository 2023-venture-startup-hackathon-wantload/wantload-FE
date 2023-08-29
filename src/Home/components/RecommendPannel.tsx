import styled from "styled-components";
import ItemSwiper from "./RecommendPannel/ItemSwiper";
import Tag from "./RecommendPannel/Tag";
import HotItem from "./RecommendPannel/HotItem";
import Bullet from "./RecommendPannel/Bullet";

export default function RecommendPannel() {
  return (
    <StyledRecommendPannel>
      <SwiperContainer>
        <ItemSwiper />
      </SwiperContainer>
      <PaginationContainer>
        <Bullet />
      </PaginationContainer>
      <Tag />
      <HotItemContainer>
        <div
          style={{
            color: "#000",
            fontFamily: "Noto Sans",
            fontSize: "18px",
            fontStyle: "normal",
            fontWeight: 600,
            lineHeight: "normal",
            letterSpacing: "0.018px",
            marginBottom: "13px",
          }}
        >
          블랙프라이데이 인기 상품
        </div>
        <HotItem />
      </HotItemContainer>
    </StyledRecommendPannel>
  );
}

const StyledRecommendPannel = styled.div`
  min-width: 375px;
  max-width: 450px;
  height: 714px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background: red; */
`;

const SwiperContainer = styled.div`
  width: 375px;
  display: "flex";
  /* padding: 22px; */
  /* justify-content: 'center';
  align-items: 'center'; */
  /* background: yellow; */
`;

const PaginationContainer = styled.div`
  width: 375px;
  height: 33px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: red; */
`;

const HotItemContainer = styled.div`
  width: 375px;
  height: 264px;
  padding: 18px 16px;
  /* background: pink; */
`;
