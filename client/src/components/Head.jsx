import React from "react";

const Head = (props) => {
  return (
    <div>
      {props.head.map((hea) => (
        <div>
          <img src={hea.url} alt='head' />
          <p>{hea.model}</p>
          <p>{hea.price}</p>
        </div>
      ))}
    </div>
  );
};
export default Head;
