import React, { useEffect, useState, useMemo } from "react";
import THead from "./THead";
import TBody from "./TBody";

const PaginatedTable = ({ header, body, itemPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const start = (currentPage - 1) * itemPerPage;
  const end = start + itemPerPage;

  const currentPageData = useMemo(() => {
    return body.slice(start, end);
  }, [start, end]);

  const handlePrevPage = () => {
    if (start !== 0) setCurrentPage((prev) => prev - 1);
  };

  const handleNextPage = () => {
    if (end !== body.length) setCurrentPage((prev) => prev + 1);
  };

  // const [counter, setCounter] = useState(1);
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setCounter((prev) => prev + 1);
  //   }, 1000);
  //   return () => {
  //     clearInterval(timer);
  //     console.log(counter);
  //   };
  // }, [counter]);

  return (
    <>
      <table>
        <THead header={header} />
        <TBody body={currentPageData} />
      </table>
      <div
        style={{
          display: "flex",
          marginTop: "1rem",
          width: "100%",
          justifyContent: "center",
        }}
      >
        <button disabled={start === 0} onClick={handlePrevPage}>
          Prev
        </button>
        <p style={{ margin: "0 0.5rem" }}>{currentPage}</p>
        <button disabled={end === body.length} onClick={handleNextPage}>
          Next
        </button>
      </div>
    </>
  );
};

export default PaginatedTable;
