import CoreConcepts from './components/CoreConcept';
import Header from './components/header/Header';
import Examples from './components/Examples';

function App() {
  return (
    <div>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </div>
  );
}

export default App;
