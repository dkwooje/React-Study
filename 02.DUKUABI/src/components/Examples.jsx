import { useState } from 'react';
import { EXAMPLES } from '../data';

function TabButton({ children, onClick }) {
  return (
    <li>
      <button onClick={onClick}>{children}</button>
    </li>
  );
}

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState('components');

  function handleClick(selectedButton) {
    setSelectedTopic(selectedButton);
    console.log(selectedButton);
  }

  return (
    <section id="examples">
      <h2>예시들</h2>
      <menu>
        <TabButton
          onClick={() => {
            handleClick('components');
          }}
        >
          컴포넌트
        </TabButton>
        <TabButton
          onClick={() => {
            handleClick('jsx');
          }}
        >
          JSX
        </TabButton>
        <TabButton
          onClick={() => {
            handleClick('props');
          }}
        >
          Props
        </TabButton>
        <TabButton
          onClick={() => {
            handleClick('state');
          }}
        >
          State
        </TabButton>
      </menu>
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    </section>
  );
}
