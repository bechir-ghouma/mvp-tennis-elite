import React from "react";

const Wilson = (props) => {
  console.log(props);
  return (
    <div className="box">
      {props.wilson.map((wils) => (
        <div>
          <img src={wils.url} alt='wilson' />
          <p className='type'>{wils.model}</p>
          <p className="price">{wils.price}</p>
        </div>
      ))}
    </div>
  );
};
export default Wilson;
