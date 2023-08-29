import React from 'react';
import styled from 'styled-components';

export default function HotItem() {
  const HotItemList = [
    {
      id: 1,
      img: '/assets/swiper/swiper1.jpeg',
      name: '코리안 파스타',
      price: '10,000원',
      delivery: '진영배송',
    },
    {
      id: 2,
      img: '/assets/swiper/swiper2.jpeg',
      name: '코리안 파스타2',
      price: '20,000원',
      delivery: '진영배송',
    },
    {
      id: 3,
      img: '/assets/swiper/swiper3.jpeg',
      name: '코리안 파스타',
      price: '30,000원',
      delivery: '진영배송',
    },
  ];
  return (
    <HotItemBox>
      {HotItemList.map((item) => (
        <HotItemPiece key={item.id}>
          <img
            src={item.img}
            style={{ width: '130px', height: '130px' }}
            alt={item.name}
          />
          <ItemName>{item.name}</ItemName>
          <ItemPrice>{item.price}</ItemPrice>
          <ItemDelivery>{item.delivery}</ItemDelivery>
        </HotItemPiece>
      ))}
    </HotItemBox>
  );
}

const HotItemBox = styled.div`
  width: 359px;
  height: 185px;
  display: flex;
  gap: 11px;
  overflow-x: scroll;
`;

const HotItemPiece = styled.div`
  width: 130px;
  height: 185px;
`;

const ItemName = styled.div`
  color: #000;
  font-family: 'Noto Sans', sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.012px;
`;

const ItemPrice = styled.div`
  color: #000;
  font-family: 'Noto Sans', sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.012px;
`;

const ItemDelivery = styled.div`
  color: #f90;
  font-family: 'Noto Sans', sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.012px;
`;
