import styled from "styled-components";

export default function Bullet() {
  return (
    <BulletBox>
      <BulletItem />
      <BulletItem />
      <BulletItem />
    </BulletBox>
  );
}

const BulletBox = styled.div`
  width: 60px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 13px;
  padding: 6px 5px;
  /* background: yellow; */
`;

const BulletItem = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 100px;
  background: #d9d9d9;
`;
