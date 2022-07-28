import React from "react";

const User = (props) => {
  const { name, email, id, website } = props;

  return (
    <div
      style={{
        background: id % 2 === 0 ? "grey" : "lightgrey",
        margin: "1rem auto",
        padding: "1rem",
        boxShadow : '4px 5px 8px 1px black',
        maxWidth : '80%'
      }}
    >
      <h3>{id}</h3>
      <h1>{name}</h1>
      <h2>{email}</h2>
      <h3>
        <a href={`http://${website}`} target="_blank">
          Website
        </a>
      </h3>
    </div>
  );
};

export default User;
