import "./character-ratings.css";
import { Character } from "../../../../fma-data";

const headings: string[] = ["Name", "Skillset", "Votes"];

interface CharacterProps {
  characters: Character[];
}

export function CharacterRatings({ characters }: CharacterProps) {
  const orderedData = structuredClone(characters).sort(
    (x, y) => y.votes - x.votes
  );
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
        {sliceData.map((character, index) => {
          const odd = index % 2 === 1;
          return (
            <tr key={index} className={`${odd ? "light" : "dark"}`}>
              <td>{character.name}</td>
              <td>{character.skillset.join(", ")}</td>
              <td>{character.votes}</td>
            </tr>
          );
        })}
      </table>
    </section>
  );
}
