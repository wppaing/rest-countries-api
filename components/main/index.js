import Link from "next/link";
import React, { useState, useContext, useEffect } from "react";
import CountryCard from "../countrycard";
import { CountryContext } from "./../../providers/CountryProvider";
import { Container, CountriesContainer, MenuContainer } from "./Elements";

export default function Main() {
  const [countries, setCountries, loading, setLoading] =
    useContext(CountryContext);
  const [data, setData] = useState();

  useEffect(() => setData(countries), [loading], []);

  const filterCountry = (e) => {
    const filter = e.target.value;
    if (filter) {
      const result = countries.filter((country) =>
        country.name.common.toLowerCase().includes(filter.toLowerCase())
      );
      setData(result);
    } else {
      setData(countries);
    }
  };

  const filterRegion = (e) => {
    let filter = e.target.value.toLowerCase();
    if (filter === "all") {
      setData(countries);
      return;
    }
    const result = countries.filter((country) =>
      country.region.toLowerCase().includes(filter)
    );
    setData(result);
  };

  return (
    <Container>
      <MenuContainer>
        <input
          type="text"
          placeholder="Search for a country..."
          onChange={filterCountry}
        />
        <select onChange={filterRegion}>
          <option defaultChecked style={{ display: "none" }}>
            Filter by Region
          </option>
          <option>All</option>
          <option>Africa</option>
          <option>America</option>
          <option>Asia</option>
          <option>Europe</option>
          <option>Oceania</option>
        </select>
      </MenuContainer>
      <CountriesContainer>
        {data &&
          data.map((country) => (
            <Link href={`${country.name.common}`} key={country.name.common}>
              <a>
                <CountryCard country={country} />
              </a>
            </Link>
          ))}
      </CountriesContainer>
    </Container>
  );
}
