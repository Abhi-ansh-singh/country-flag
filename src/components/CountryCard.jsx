import React from "react";

const CountryCard = ({ countryName, CountryFlag }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: "10px",
        margin: "10px",
        border: "1px solid black",
        borderRadius: "8px",
        height: "200px",
        width: "200px",
      }}
    >
      <img
        src={CountryFlag}
        alt="flag img"
        style={{ height: "100px", width: "100px" }}
      />
      <h2>{countryName}</h2>
    </div>
  );
};

export default CountryCard;
