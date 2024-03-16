import React from "react";
import THead from "./THead";
import TBody from "./TBody";

const Table = ({ header, body }) => {

  return header && body ? (
    <table>
      <THead header={header} />
      <TBody body={body} />
    </table>
  ) : null;
};

export default React.memo(Table);
