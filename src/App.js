import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./component/Header";
import Main from "./pages/Main";
import SearchedImage from "./pages/SearchedImage";
import ImageProvider from "./context/ImageProvider";
import Collections from "./pages/Collections";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <ImageProvider>
          <Switch>
            <Route path="/" exact>
              <Main />
            </Route>
            <Route path="/photos/:slug">
              <SearchedImage />
            </Route>
            <Route path="/photos/:slug/:id">
              <SearchedImage />
            </Route>
            <Route path="/collections">
              <Collections />
            </Route>
          </Switch>
        </ImageProvider>
      </Router>
    </div>
  );
}

export default App;
