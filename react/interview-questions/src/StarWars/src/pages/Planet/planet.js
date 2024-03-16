import { useState, useCallback, useEffect } from "react";
// import { debounce } from "../../utils/commonUtils";
import PlanetsList from "../../commonComponents/PlanetsList/PlanetsList";
import axios from "../../services/api";
import Loading from "../../commonComponents/Loading/Loading";

const Planet = () => {
  const [error, setError] = useState(null);
  const [planets, setPlanets] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // const debouncedGetPlanets = useCallback(
  //   debounce(async (text) => {
  //     try {
  //       const res = await axios.get(
  //         `https://swapi.dev/api/planets/?search=${text.toLowerCase()}`,
  //         {
  //           signal: abortController.signal,
  //         },
  //       );
  //       if (res?.data?.results?.length) {
  //         setPlanets(res.data.results);
  //       } else {
  //         setPlanets([]);
  //       }
  //     } catch (err) {
  //       setError(err);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   }),
  //   [],
  // );

  useEffect(() => {
    let timer;
    const abortController = new AbortController();
    async function fetchData() {
      try {
        if (inputValue) {
          const res = await axios.get(
            `https://swapi.dev/api/planets/?search=${inputValue.toLowerCase()}`,
            {
              signal: abortController.signal,
            },
          );
          if (res?.data?.results?.length) {
            setPlanets(res.data.results);
          } else {
            setPlanets([]);
          }
        } else {
          setPlanets([]);
        }
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }
    timer = setTimeout(fetchData, 300);
    return () => {
      abortController.abort();
      clearTimeout(timer);
    };
  }, [inputValue]);

  const handleSearch = (e) => {
    setIsLoading(true);
    const text = e.target.value;
    setInputValue(text);
    // debouncedGetPlanets(text);
  };

  return (
    <div className="planet-wrapper">
      <h1>Star Wars</h1>
      <div className="title">Search for planets </div>
      <div>
        <input
          id="search"
          type="text"
          placeholder="Please enter"
          onChange={handleSearch}
        />
      </div>
      {isLoading && <Loading />}
      {planets.length > 0 && !isLoading && <PlanetsList planets={planets} />}
      <br />
      {planets.length === 0 && inputValue && !isLoading ? (
        <div className="error">No planet matching search term</div>
      ) : null}
    </div>
  );
};

export default Planet;
