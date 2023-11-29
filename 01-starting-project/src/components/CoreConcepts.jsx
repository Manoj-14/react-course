import CoreConcept from "./CoreConcept.jsx";
import { CORE_CONCEPTS } from "../data.js";

export default function CoreConcepts() {
  return (
    <section id="core-concepts">
      <ul>
        {CORE_CONCEPTS.map((coreConceptItem) => (
          <CoreConcept key={coreConceptItem.title} {...coreConceptItem} />
        ))}
      </ul>
    </section>
  );
}
