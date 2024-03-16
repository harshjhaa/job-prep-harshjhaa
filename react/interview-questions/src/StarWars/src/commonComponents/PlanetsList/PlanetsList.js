// import "../index.css";
import { generatePopulationIcons } from "../../utils/commonUtils";

const PlanetsList = ({ planets = [] }) => {
  return (
    <section className="list-wrapper">
      <header className="header-wrapper">
        <div className="col">Name</div>
        <div className="col">Population</div>
      </header>
      {planets?.map((planet) => {
        return (
          <div key={planet.created}>
            <p className="col name-wrapper">{planet.name}</p>
            <div title={planet.population} className="col icons-wrapper">
              {generatePopulationIcons(planet.population) || ""}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default PlanetsList;
