import babyNamesData from './data/babyNamesData.json'

interface BabyNameInfo{
    id: number;
    name: string;
    sex: string

}

export default function App(): JSX.Element {
    function takeOneBabyName(babyName: BabyNameInfo) {
        return <div key={babyName.id}> {babyName.name} </div>
    }
  return (
    <>
      <h1>Baby Names</h1>
      <h2>Here's a list of Baby Names to choose from:</h2>
        <div>
            {babyNamesData.map(takeOneBabyName)} 
        </div>
    </>
  );
}
