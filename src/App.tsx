import babyNamesData from "./data/babyNamesData.json";
import "./App.css";
import sortBabyNames from "./Utils/sortBabyNames";
import { useState } from "react";

interface BabyNameInfo {
  id: number;
  name: string;
  sex: string;
}

export default function App(): JSX.Element {
  const [searchTerm, setSearchTerm] = useState("");

  function handleSearchBar(newSearchTerm: string) {
    setSearchTerm(newSearchTerm);
  }

  function takeOneBabyName(babyName: BabyNameInfo) {
    return (
      <div className={"BabyName " + babyName.sex} key={babyName.id}>
        ` ${babyName.name} `
      </div>
    );
  }

  const sortedBabyNames = babyNamesData.sort((a, b) =>
    sortBabyNames(a.name, b.name)
  );

  function isInSearchBar(babyNameObj: BabyNameInfo) {
    const babyName = babyNameObj.name;
    return babyName.toLowerCase().includes(searchTerm.toLowerCase())
      ? true
      : false;
  }

  return (
    <>
      <section className="App">
        <h1>Baby Names</h1>
        <input
          placeholder="Search for a baby name..."
          value={searchTerm}
          onChange={(e) => handleSearchBar(e.target.value)}
        />
        <p> You're searching for: {searchTerm}</p>
        <h3>Here's a list of Baby Names to choose from:</h3>
        <div>{sortedBabyNames.filter(isInSearchBar).map(takeOneBabyName)}</div>
      </section>
    </>
  );
}
