import babyNamesData from "./data/babyNamesData.json";
import "./App.css";

interface BabyNameInfo {
  id: number;
  name: string;
  sex: string;
}

export default function App(): JSX.Element {
  function takeOneBabyName(babyName: BabyNameInfo) {
    return (
      <div className={"BabyName " + babyName.sex} key={babyName.id}>
        {" "}
        {babyName.name}{" "}
      </div>
    );
  }

  function sortBabyNames() {}

  return (
    <>
      <div className="App">
        <h1>Baby Names</h1>
        <h3>Here's a list of Baby Names to choose from:</h3>
        <div>{babyNamesData.map(takeOneBabyName)}</div>
      </div>
    </>
  );
}

// import babyNamesData from "./data/babyNamesData.json";
// import "./App.css";
// import {useState} from "react"

// interface BabyNameInfo {
//   id: number;
//   name: string;
//   sex: string;
// }

// export default function App(): JSX.Element {
//   function takeOneBabyName(babyName: BabyNameInfo) {
//     return (
//       <div className={"BabyName " + babyName.sex} key={babyName.id}>
//         {" "}
//         {babyName.name}{" "}
//       </div>
//     );
//   }

//   function compareBabyNames(
//     babyNameInfoA: BabyNameInfo,
//     babyNameInfoB: BabyNameInfo
//   ) {
//     if (babyNameInfoA.name < babyNameInfoB.name) {
//       return -1;
//     } else if (babyNameInfoA.name > babyNameInfoB.name) {
//       return 1;
//     } else {
//       return 0;
//     }
//   }

//   const sortedByNameBabyNames: BabyNameInfo[] = [...babyNamesData];
//   sortedByNameBabyNames.sort(compareBabyNames);

//   const [searchTerm, setSearchTerm] = useState("")
//     function handleChangeInSearchBar(e:any){
//       setSearchTerm(e.target.value)
//     }

//   function filterBabyNames(babyName: BabyNameInfo): boolean{
//     const regPattern = RegExp (searchTerm, "i");
//     if (searchTerm.match(regPattern)!== null){
//       return true
//     } else{
//       return false;
//     }
//     // if (babyName.toString().toLowerCase().includes(searchTerm.toLowerCase())){
//     //   return true
//     // } else {
//     //   return false
//     // }
//   }

//   const filteredBabyNames = sortedByNameBabyNames.filter(filterBabyNames)


//   return (
//     <>
//       <div className="App">
//         <h1>Baby Names</h1>
//         <input 
//           placeholder="Search for... "
//           value={searchTerm}
//           onChange={handleChangeInSearchBar}
//         /> 
//         <p> Currently searching for: {searchTerm} </p>
//         <h4>Here's a list of Baby Names to choose from:</h4>
//         <hr/>
//         <div>{filteredBabyNames.map(takeOneBabyName)}</div>
//       </div>
//     </>
//   );
// }
