import React from "react";

const Diadora = (props) => {
  return (
    <div>
      {props.diadora.map((dia) => (
        <div>
          <img src={dia.url} alt='diadora'/>
          <li>{dia.model}</li>
          <li>{dia.price}</li>
        </div>
      ))}
    </div>
  );
};
export default Diadora;
