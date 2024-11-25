import './CoreConcept.css';
import { CORE_CONCEPTS } from '../data';

function CoreConceptList(props) {
  return (
    <li>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}

function CoreConcepts() {
  return (
    <section id="core-concepts">
      <h2>Time to get started!</h2>
      <ul>
        <CoreConceptList {...CORE_CONCEPTS[0]} />
        <CoreConceptList {...CORE_CONCEPTS[1]} />
        <CoreConceptList {...CORE_CONCEPTS[2]} />
        <CoreConceptList {...CORE_CONCEPTS[3]} />
      </ul>
    </section>
  );
}

export default CoreConcepts;
