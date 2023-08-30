import React from "react";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { getItemDetail } from "../api/itemController";
import { ReactComponent as LeftArrow } from "../assets/icon/icon_arrow_left.svg";
import EnabledButton from "../CardgamePage/components/EnabledButton";
import { ProductDeatil } from "../data/type";
import { ReactComponent as StarFill } from "../assets/icon/icon_star_fill.svg";
import { ReactComponent as StarEmpty } from "../assets/icon/icon_star_empty.svg";

const DetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const { data, isLoading, isError } = useQuery<ProductDeatil>(
    ["get-product-detail", id],
    () => getItemDetail(Number(id)),
  );

  if (isError) {
    return <div>에러 발생</div>;
  }
  if (isLoading) {
    return <div>Loading..</div>;
  }

  return data ? (
    <DetailComponent>
      <div className="prev-header">
        <LeftArrow
          onClick={() => {
            navigate("/");
          }}
        />
      </div>
      <img className="product-img" src={data.itemPhoto} />
      <div className="product-body">
        <div className="market">{data.company}</div>
        <div className="name-score">
          <div>{data.name}</div>
          <div className="score">
            {[...Array(data.starPoint)].map((_, index) => (
              <StarFill key={`filled-${index}`} />
            ))}
            {[...Array(5 - data.starPoint)].map((_, index) => (
              <StarEmpty key={`empty-${index}`} />
            ))}
          </div>
        </div>
        <div className="price">
          <div className="percentage">{`${data.discount}%`}</div>
          <div className="price-result">{data.sellPrice}</div>
          <div className="price-original">{data.oringinPrice}</div>
        </div>
        <div className="sub-content">
          배송정보 <span>샥-배송</span>
        </div>
        <div className="sub-content">
          출발예정 <span>지금 주문하면 내일 출발</span>
        </div>
      </div>
      <div style={{ width: "100%" }}>
        <EnabledButton text="구매하기" onClick={() => {}} />
      </div>
    </DetailComponent>
  ) : (
    <div>데이터 오류</div>
  );
};

const DetailComponent = styled.div`
  padding: 16px;
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;

  & .prev-header {
    width: 100%;
    height: 62px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  & .product-img {
    width: 100%;
    height: 328px;
    border-radius: 15px;
  }

  & .product-body {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    & .market {
      width: 100%;
      font-size: 16px;
      color: #f90;
      font-weight: 500;
    }

    & .name-score {
      margin-top: 13px;
      font-size: 22px;
      font-weight: 500;
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;

      & .score {
        display: grid;
        grid-template-columns: repeat(5, 18px);
        column-gap: 3px;
      }
    }

    & .price {
      margin-top: 8px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      width: 100%;
      & .percentage {
        font-size: 22px;
        font-weight: 600;
        color: #f00;
        margin-right: 8px;
      }
      & .price-result {
        font-size: 22px;
        font-weight: 600;
        margin-right: 8px;
      }
      & .price-original {
        font-size: 15px;
        font-weight: 500;
        color: #868686;
        margin-right: 8px;
      }
    }

    & .sub-content {
      margin-top: 19px;
      font-size: 12px;
      font-weight: 400;
      color: #868686;
      span {
        margin-left: 10px;
        color: #585858;
      }
    }
  }
`;

export default DetailPage;
