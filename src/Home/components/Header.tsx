import React from 'react';
import styled from 'styled-components';

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <div>JinYoung</div>
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
  height: 45px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 16px;
  border-bottom: 1px solid #f0f0f0;
  background: #ff9900;
`;

export default Header;
