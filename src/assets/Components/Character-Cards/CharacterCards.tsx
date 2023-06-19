import "./character-cards.css";
import { Component, ReactNode } from "react";
import { Character } from "../../../../fma-data";

interface PropTypes {
  data: Character[];
}

export class CharacterCards extends Component<PropTypes> {
  render(): ReactNode {
    const { data } = this.props;

    const aToZSort = data.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      } else {
        return -1;
      }
    });
    return (
      <section id="character-cards">
        {aToZSort.map((fmaData) => {
          return (
            <div className="card" key={fmaData.name}>
              <div className="card-titles">
                <h3>
                  {fmaData.name === "Alfonse Elrich"
                    ? "Alphonse Elrich"
                    : fmaData.name}
                </h3>
                <h4>{fmaData.nickName}</h4>
              </div>
              <img src={fmaData.imageUrl} alt="" />
              <p>{fmaData.background}</p>
            </div>
          );
        })}
      </section>
    );
  }
}
