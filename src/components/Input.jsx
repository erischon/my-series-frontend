import React from "react";

const Input = (props) => {
  const { name, overview, backdrop_path } = props.infos;

  let imgUrl =
    "https://images.unsplash.com/photo-1573399054516-90665ecc44be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1975&q=80";

  if (backdrop_path) {
    imgUrl = `https://image.tmdb.org/t/p/w500${backdrop_path}`;
  }

  return (
    <div className="input-result">
      <input type="radio" value={name} name="serie" />
      <div className="input-result__image">
        <img src={imgUrl} alt={name} />
        <label>{name}</label>
      </div>
      {overview ? <p>Description : {overview}</p> : ""}
    </div>
  );
};

export default Input;
