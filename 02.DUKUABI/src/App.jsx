import reactImg from './assets/react-core-concepts.png';
import { CORE_CONCEPTS } from './data';

const reactDescriptions = ['근본적인', '치명적인', '핵심'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const description = reactDescriptions[genRandomInt(2)];

  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        당신이 작성하는 거의 모든 앱을 위해 필요한 리액트의 {description}컨셉!
      </p>
    </header>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            <li>
              <img src={CORE_CONCEPTS[0].image} alt={CORE_CONCEPTS[0].title} />
              <h3>{CORE_CONCEPTS[0].title}</h3>
              <p>{CORE_CONCEPTS[0].description}</p>
            </li>
            <li>
              <img src={CORE_CONCEPTS[1].image} alt={CORE_CONCEPTS[1].title} />
              <h3>{CORE_CONCEPTS[1].title}</h3>
              <p>{CORE_CONCEPTS[1].description}</p>
            </li>
            <li>
              <img src={CORE_CONCEPTS[2].image} alt={CORE_CONCEPTS[2].title} />
              <h3>{CORE_CONCEPTS[2].title}</h3>
              <p>{CORE_CONCEPTS[2].description}</p>
            </li>
            <li>
              <img src={CORE_CONCEPTS[3].image} alt={CORE_CONCEPTS[3].title} />
              <h3>{CORE_CONCEPTS[3].title}</h3>
              <p>{CORE_CONCEPTS[3].description}</p>
            </li>
          </ul>
        </section>
      </main>
    </div>
  ); //컴포넌트 사용 <Header />
}

export default App;
