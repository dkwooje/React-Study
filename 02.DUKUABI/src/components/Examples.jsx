function TabButton({ children, onClick }) {
  return (
    <li>
      <button onClick={onClick}>{children}</button>
    </li>
  );
}

export default function Examples() {
  function handleClick(selectedButton) {
    console.log(`${selectedButton}버튼이 클릭 되었습니다.`);
  }

  return (
    <section id="examples">
      <h2>예시들</h2>
      <menu>
        {/*
        <TabButton onClick={function(){handleClick('컴포넌트')}}>컴포넌트</TabButton>
        <TabButton onClick={function(){handleClick('제이액스')}}>JSX</TabButton>
        <TabButton onClick={function(){handleClick('프롬프')}}>Props</TabButton>
        <TabButton onClick={function(){handleClick('스테이트')}}>State</TabButton>
        */}
        <TabButton
          onClick={() => {
            handleClick('컴포넌트');
          }}
        >
          컴포넌트
        </TabButton>
        <TabButton
          onClick={() => {
            handleClick('제이액스');
          }}
        >
          JSX
        </TabButton>
        <TabButton
          onClick={() => {
            handleClick('프롬프');
          }}
        >
          Props
        </TabButton>
        <TabButton
          onClick={() => {
            handleClick('스테이트');
          }}
        >
          State
        </TabButton>
      </menu>
    </section>
  );
}
