import styled from "styled-components";

interface TabsProps {
  selectedTool: string;
  setSelectedTool: (tool: string) => void;
}

export default function Tabs({ selectedTool, setSelectedTool }: TabsProps) {
  return (
    <Tabbar>
      <TabButton
        isselected={selectedTool === "recommend"}
        onClick={() => setSelectedTool("recommend")}
      >
        원트추천
      </TabButton>
      <TabButton
        isselected={selectedTool === "new"}
        onClick={() => setSelectedTool("new")}
      >
        신상품
      </TabButton>
      <TabButton
        isselected={selectedTool === "best"}
        onClick={() => setSelectedTool("best")}
      >
        베스트
      </TabButton>
    </Tabbar>
  );
}

const Tabbar = styled.div`
  min-width: 375px;
  max-width: 450px;
  height: 36px;
  background: white;
  display: flex;
  justify-content: center;
`;

const TabButton = styled.button<{ isselected: boolean }>`
  width: 120px;
  height: 36px;
  border-bottom: ${(props) =>
    props.isselected ? "2px solid #ff9900" : "1px solid #d9d9d9"};
  color: ${(props) => (props.isselected ? "#ff9900" : "#D9D9D9")};
  text-align: center;
  font-family: "Pretendard";
  font-size: 12px;
  font-style: normal;
  font-weight: ${(props) => (props.isselected ? 700 : 600)};
  line-height: 140%;
`;
