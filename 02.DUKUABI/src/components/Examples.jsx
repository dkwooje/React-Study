function TabButton({ children, onClick }) {
  return (
    <li>
      <button onClick={onClick}>{children}</button>
    </li>
  );
}

export default function Examples() {
  function handleClick() {
    console.log('탭버튼이 클릭 되었습니다.');
  }

  return (
    <section id="examples">
      <h2>예시들</h2>
      <menu>
        <TabButton onClick={handleClick}>컴포넌트</TabButton>
        <TabButton onClick={handleClick}>JSX</TabButton>
        <TabButton onClick={handleClick}>Props</TabButton>
        <TabButton onClick={handleClick}>State</TabButton>
      </menu>
    </section>
  );
}
