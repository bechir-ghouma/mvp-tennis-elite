import React from "react";

const Babolat = (props) => {
  return (
    <div>
      {props.babolat.map((babo) => (
        <div>
          <img src={babo.url} alt='babolat'/>
          <p>{babo.model}</p>
          <p>{babo.price}</p>
        </div>
      ))}
    </div>
  );
};
export default Babolat;
