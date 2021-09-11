import Header from "./component/Header";
import "./App.css";

import Searchbar from "./component/Searchbar";
import ImageContainer from "./component/ImageContainer";
import Tabs from "./component/Tabs";

  function App() {
    return (
      <div className="App">
        <Header />
        <section className="hero">
          <img
            src="https://images.unsplash.com/photo-1510561467401-91b9835f745e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="hero_image"
            className="hero-image"
          />
          <div className="wrapper">
            <h1>Explore Quality Product Images With The Phantom</h1>
            <p>Powered by unsplash</p>
            <Searchbar />
          </div>
        </section>
        <section>
          <Tabs />
        </section>
        <section className="image-grid">
          <ImageContainer />
        </section>
      </div>
    );
  }

  export default App;
