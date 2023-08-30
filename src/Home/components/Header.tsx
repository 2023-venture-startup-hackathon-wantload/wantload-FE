import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Header: React.FC = () => {
  const navigate = useNavigate();
  return (
    <StyledHeader>
      <HeaderIcon
        src="/assets/icons/logo.svg"
        onClick={() => {
          navigate("/");
        }}
      />
      <HeaderNavigation>
        <img
          src="/assets/icons/menu.svg"
          style={{ width: "27px", height: "27px" }}
        />
        <img
          src="/assets/icons/search.svg"
          style={{ width: "21px", height: "21px" }}
        />
        <img
          src="/assets/icons/cart.svg"
          style={{ width: "25px", height: "25px" }}
        />
      </HeaderNavigation>
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
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 19px;
  z-index: 5;
`;

const HeaderIcon = styled.img`
  width: 114px;
  height: 29px;
`;

const HeaderNavigation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

export default Header;
