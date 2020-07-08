import React, { useState, useEffect } from "react";
import SearchCountry from "./components/SearchCountry";
import NavBarBottom from "./components/NavBarBottom";
import PaperBox from "./components/PaperBox";
import "./App.css";
import NavBar from "./components/NavBar";
function App() {
  const [navItem, setNavItem] = useState(0);
  const [searchItem, setSearchItem] = useState("pakistan");
  const [globalData, setGlobalData] = useState(0);
  console.log(searchItem);
  useEffect(() => {
    fetch("https://covid19.mathdro.id/api")
      .then((res) => res.json())
      .then((data) => setGlobalData(data));
  }, []);
  if (navItem === 0) {
    return (
      <div className="app">
        <NavBar setSearchItem={setSearchItem} setNavItem={setNavItem} />
        <PaperBox title="Global Cases" globalData={globalData} />
        <NavBarBottom setNavItem={setNavItem} />
      </div>
    );
  } else if (navItem === 1) {
    return (
      <div>
        <NavBar setSearchItem={setSearchItem} setNavItem={setNavItem} />
        <SearchCountry searchItem={searchItem} />;
        <NavBarBottom setNavItem={setNavItem} />
      </div>
    );
  }
}

export default App;
