import { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import NavigationBtn from "./components/NavigationBtn";
import Navigation from "./components/Navigation";
import Welcome from "./components/Welcome";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  const [welcomePageShown, setWelcomePageShown] = useState(true);
  const [navigationShown, setNavigationShown] = useState(false);

  function welcomeNavigationHandler() {
    setWelcomePageShown(true);
  }

  function projectsNavigationHandler() {
    setWelcomePageShown(false);
  }

  function navigationToggleHandler() {
    setNavigationShown((state) => {
      return !state;
    });
  }

  return (
    <div className="page-container">
      <Header pageHeader={welcomePageShown} />
      <main className="main-container">
        <NavigationBtn onClick={navigationToggleHandler} />
        <Navigation
          onWelcome={welcomeNavigationHandler}
          onProjects={projectsNavigationHandler}
          toggleClass={navigationShown}
        />
        {welcomePageShown && <Welcome />}
        {!welcomePageShown && <Projects />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
