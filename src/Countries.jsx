import React, { useState, useEffect } from "react";
import CountryCard from "./components/CountryCard";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const API_URL = "https://xcountries-backend.azurewebsites.net/all";

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data)=> setCountries(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (<div style={{display:"flex", flexWrap: "wrap", justifyContent:"center", alignItems: "center", height: "100vh"}}>
    {countries.map((value)=>(<CountryCard countryName={value.name} CountryFlag={value.flag}/>))}
  </div>)
};

export default Countries;
