import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/Coreconcept/CoreConcept.jsx";
import { CORE_CONCEPTS } from "./data";
import TabButton from "./components/TabButton.jsx";
import { useState } from "react";

function App() {
  const [selectedTopic, setselectedTopic] = useState("Please click the button");

  function handleSelect(selectedBtn) {
    setselectedTopic(selectedBtn);
    // console.log(selectedBtn);
  }
  return (
    <div>
      <Header />
      {/* or <Header></Header> */}
      <main>
        <section id="core-concepts">
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect("components")}>
              Components
            </TabButton>
            <TabButton onSelect={() => handleSelect("jsx")}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect("props")}>Props</TabButton>
            <TabButton onSelect={() => handleSelect("state")}>State</TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
