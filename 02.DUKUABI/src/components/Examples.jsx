import { useState } from 'react';
import { EXAMPLES } from '../data';

function TabButton({ children, onClick, isSelected }) {
  return (
    <li>
      <button className={isSelected ? 'active' : undefined} onClick={onClick}>
        {children}
      </button>
    </li>
  );
}

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleClick(selectedButton) {
    setSelectedTopic(selectedButton);
    console.log(selectedButton);
  }

  let tabContent = <p>탭을 선택해주세요</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <section id="examples">
      <h2>예시들</h2>
      <menu>
        <TabButton
          isSelected={selectedTopic === 'components'}
          onClick={() => {
            handleClick('components');
          }}
        >
          컴포넌트
        </TabButton>
        <TabButton
          isSelected={selectedTopic === 'jsx'}
          onClick={() => {
            handleClick('jsx');
          }}
        >
          JSX
        </TabButton>
        <TabButton
          isSelected={selectedTopic === 'props'}
          onClick={() => {
            handleClick('props');
          }}
        >
          Props
        </TabButton>
        <TabButton
          isSelected={selectedTopic === 'state'}
          onClick={() => {
            handleClick('state');
          }}
        >
          State
        </TabButton>
      </menu>
      {tabContent}
    </section>
  );
}
