import React from "react";

const TBody = ({ body }) => {
  // console.log("tbody rendered");
  return (
    <tbody>
      {body?.length > 0
        ? body.map((row) => {
            return (
              <tr key={row.id}>
                <td>{row.title}</td>
                <td>{row.description}</td>
                <td>{row.price}</td>
              </tr>
            );
          })
        : null}
    </tbody>
  );
};

export default React.memo(TBody);
