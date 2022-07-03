import React from "react";

const Input = (props) => {
  const { name, overview } = props.infos;
  return (
    <div className="input-result">
      <input type="radio" value={name} name="serie" />
      <label>{name}</label>
      {overview ? <p>Description : {overview}</p> : ""}
    </div>
  );
};

export default Input;
