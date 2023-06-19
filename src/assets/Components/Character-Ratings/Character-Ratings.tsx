import "./character-ratings.css";
import { Character } from "../../../../fma-data";

const headings: string[] = ["Name", "Skillset", "Votes"];

interface CharacterProps {
  
    data:Character[]
}



export function CharacterRatings(
{data}:CharacterProps) {
  const orderedData = data.sort((x, y) => y.votes - x.votes);
const sliceData = orderedData.slice(0, 5);
  
  return (



    <section id="character-ratings">
      <h4>Top Characters</h4>
      <table>
        <tr>
          {headings.map((heading, index) => {
            return <th key={index}>{heading}</th>;
          })}
        </tr>
        {sliceData.map((fmaData, index) => {
          const odd = index % 2 === 1;

          return (
            <tr key={index} className={`${odd ? "light" : "dark"}`}>
              <td>
                {index < 2
                  ? fmaData.name === "Edward Elrich"
                    ? `${fmaData.name} "Full Metal Alchemist"`
                    : fmaData.name:fmaData.nickName==="Major Armstrong"?"Mj. Armstrong"
                  : fmaData.name === "Nina Tucker"
                  ? "Nina"
                  : fmaData.nickName}
              </td>
              <td>{fmaData.skillset.join(", ")}</td>
              <td>{fmaData.votes}</td>
            </tr>
          );
        })}
      </table>
    </section>
  );
}
