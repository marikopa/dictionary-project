import "./App.css";

import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">D I C T I O N A R Y</header>
        <main>
          <Dictionary defaultKeyword="dance" />
        </main>
      </div>
      <div className="App-footer">
        <small>
          {" "}
          This project was coded by Mariko Passel and is open-sourced on{" "}
          <a
            href="https://github.com/marikopa/dictionary-project"
            target="blank"
            rel="noreferrer"
          >
            Github
          </a>{" "}
          and hosted on Netlify
        </small>
      </div>
    </div>
  );
}

export default App;
