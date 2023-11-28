import reactImage from "./assets/react-core-concepts.png";
import componentImage from "./assets/components.png";

const reactDescription = ["Fundament", "Crucial", "Core"];

function getRandomNumber(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const description = reactDescription[getRandomNumber(2)];
  return (
    <header>
      <img src={reactImage} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

function CoreConcept(props) {
  return (
    <li>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}

function App() {
  return (
    <div>
      <Header />
      {/* or <Header></Header> */}
      <main>
        <section id="core-concepts">
          <ul>
            <CoreConcept
              title="Components"
              description="The core UI building block."
              image={componentImage}
            />
            <CoreConcept
              title="Components"
              description="The core UI building block."
              image={componentImage}
            />
            <CoreConcept
              title="Components"
              description="The core UI building block."
              image={componentImage}
            />
            <CoreConcept
              title="Components"
              description="The core UI building block."
              image={componentImage}
            />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
