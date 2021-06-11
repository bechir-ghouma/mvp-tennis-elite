import React from "react";

const Nike = (props) => {
  return (
    <div>
      {props.nike.map((nik) => (
        <ul>
          <img src={nik.url} alt='nike'/>
          <p>{nik.model}</p>
          <p>{nik.price}</p>
        </ul>
      ))}
    </div>
  );
};
export default Nike;
