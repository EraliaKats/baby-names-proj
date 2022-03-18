import babyNamesData from './data/babyNamesData.json'
import './App.css';

interface BabyNameInfo{
    id: number;
    name: string;
    sex: string

}

export default function App(): JSX.Element {
    function takeOneBabyName(babyName: BabyNameInfo) {
        return <div className= {"BabyName " + babyName.sex} key={babyName.id}> {babyName.name} </div>
    }
  return (
    <>
    <div className="App">
      <h1>Baby Names</h1>
      <h3>Here's a list of Baby Names to choose from:</h3>
        <div> 
            {babyNamesData.map(takeOneBabyName)} 
        </div>
    </div>
    </>
  );
}
