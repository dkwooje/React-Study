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
        {CORE_CONCEPTS.map((conceptItem) => (
          <CoreConceptList key={conceptItem.title} {...conceptItem} />
        ))}
      </ul>
    </section>
  );
}

export default CoreConcepts;
