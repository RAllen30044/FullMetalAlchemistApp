import "./header.css";

const buttons: string[] = ["about us", "info", "support us"];

export function Header() {
  return (
    <header>
      <h1>Fullmetal Alchemist</h1>
      <nav>
        {buttons.map((button,index) => {
          return <li key={index}>{button}</li>;
        })}
      </nav>
    </header>
  );
}
