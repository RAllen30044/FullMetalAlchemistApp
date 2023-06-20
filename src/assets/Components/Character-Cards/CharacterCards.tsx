import "./character-cards.css";
import { Component, ReactNode } from "react";
import { Character } from "../../../../fma-data";

interface PropTypes {
  characters: Character[];
}

export class CharacterCards extends Component<PropTypes> {
  render(): ReactNode {
    const { characters } = this.props;

    const aToZSort = structuredClone(characters).sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      } else {
        return -1;
      }
    });
    return (
      <section id="character-cards">
        {aToZSort.map((character) => {
          const { name, nickName, imageUrl, background } = character;
          return (
            <div className="card" key={name}>
              <div className="card-titles">
                <h3>{name}</h3>
                <h4>{nickName}</h4>
              </div>
              <img src={imageUrl} alt={`Image of ${name}`} />
              <p>{background}</p>
            </div>
          );
        })}
      </section>
    );
  }
}
