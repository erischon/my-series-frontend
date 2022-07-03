import React from "react";

const Input = (props) => {
  const { name, overview } = props.infos;
  return (
    <div>
      <input type="radio" value={name} name="serie" />
      <label>{name}</label>
      {overview ? <p>Description : {overview}</p> : ""}
    </div>
  );
};

export default Input;
