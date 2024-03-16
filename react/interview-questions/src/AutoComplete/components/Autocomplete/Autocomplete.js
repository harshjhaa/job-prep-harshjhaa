import React, { useCallback, useEffect, useState } from "react";
// import useInput from "../../customHooks/useInput";
import { debounce } from "../../utils/commonUtils";
import { getFruitAPI } from "../../services/api";

const Autocomplete = () => {
  //   const { inputData, setInputData, handleInput } = useInput("");
  const [inputData, setInputData] = useState("");
  const [autocompleteData, setAutocompleteData] = useState([]);
  const [error, setError] = useState([]);

  //   useEffect(() => {
  //     (async function () {
  //       if (inputData) {
  //         const data = await getFruitAPI(inputData);
  //         console.log(data);
  //         if (data) {
  //           setAutocompleteData(data);
  //         }
  //       } else {
  //         setAutocompleteData([]);
  //       }
  //     })();
  //   }, [inputData]);

  const debouncedMakeApiCall = useCallback(
    debounce(async (text) => {
      if (text) {
        try {
          const data = await getFruitAPI(text);
          // console.log(data);
          if (data) {
            setAutocompleteData(data);
          }
        } catch (err) {
          setError(err);
        }
      } else {
        setAutocompleteData([]);
      }
    }),
    []
  );

  const debounceTextPrinting = useCallback(
    debounce((text) => console.log(text)),
    []
  );

  const handleInput = (e) => {
    const text = e.target.value || "";
    setInputData(text);
    debouncedMakeApiCall(text);
    debounceTextPrinting(text);
  };

  const handleItemSelect = (e) => {
    const selectedValue = e.target.innerHTML;
    setInputData(selectedValue);
    setAutocompleteData([]);
  };

  return (
    <section>
      <input
        type="text"
        placeholder="Enter Text"
        value={inputData}
        onChange={handleInput}
      />
      {autocompleteData?.length > 0 ? (
        <div className="autocomplete-box" onClick={handleItemSelect}>
          {autocompleteData.map((item, i) => {
            return (
              <p className={`item-${item}`} key={i + item}>
                {item}
              </p>
            );
          })}
        </div>
      ) : null}
    </section>
  );
};

export default Autocomplete;
