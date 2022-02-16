import { useState } from "react";
import { Outlet, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import NavigationBtn from "./components/NavigationBtn";
import Navigation from "./components/Navigation";
import Welcome from "./components/Welcome";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  const [navigationShown, setNavigationShown] = useState(false);

  function navigationToggleHandler() {
    setNavigationShown((state) => {
      return !state;
    });
  }

  return (
    <div className="page-container">
      <Header />
      <main className="main-container">
        <NavigationBtn
          onClick={navigationToggleHandler}
          navState={navigationShown}
        />
        <Navigation toggleClass={navigationShown} />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="projects" element={<Projects />} />
        </Routes>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
