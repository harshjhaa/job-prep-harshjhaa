import React from "react";

const THead = ({ header }) => {
  return (
    <thead>
      <tr>
        {header?.length > 0
          ? header.map((head) => {
              return <th key={head}>{head}</th>;
            })
          : null}
      </tr>
    </thead>
  );
};

export default React.memo(THead);
