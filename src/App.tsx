import "../reset.css";
import "../style.css";
import { Header } from "./assets/Components/Header/Header";
import { CharacterRatings } from "./assets/Components/Character-Ratings/Character-Ratings";
import { CharacterCards } from "./assets/Components/Character-Cards/CharacterCards";
import {  data} from "../fma-data";


function App() {

  return (
   
    <>
      <Header  />
    <CharacterRatings data={data} />
      <CharacterCards  data={data}/>
      </>
 
  );
}

export default App;
