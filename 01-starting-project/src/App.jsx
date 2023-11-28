import reactImage from "./assets/react-core-concepts.png";

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

function App() {
  return (
    <div>
      <Header />
      {/* or <Header></Header> */}
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
