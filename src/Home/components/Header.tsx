import React from 'react';
import styled from 'styled-components';

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <HeaderIcon>JinYoung</HeaderIcon>
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  min-width: 375px;
  max-width: 450px;
  height: 54px;
  border-bottom: 1px solid #f0f0f0;
  background-color: #ff9900;
  display: flex;
  padding: 12px 12px 12px 14px;
`;

const HeaderIcon = styled.div`
  color: #fff;
  // font-family 미적용
  /* font-family: Righteous; */
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.024px;
`;

export default Header;
