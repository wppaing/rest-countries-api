import { createContext, useEffect, useState } from "react";

export const CountryContext = createContext();

const CountryProvider = (props) => {
  const [countries, setCountries] = useState();

  useEffect(() => {
    (async () => {
      const res = await fetch(
        `https://restcountries.com/v3.1/all?fields=name,population,region,subregion,capital,flags,cca3,continents,tld,currencies,languages,borders`
      );
      const data = await res.json();
      const countriesData = data.sort((a, b) =>
        a.name.common.localeCompare(b.name.common)
      );
      setCountries(countriesData);
    })();
  }, []);

  return (
    <CountryContext.Provider value={[countries]}>
      {props.children}
    </CountryContext.Provider>
  );
};

export default CountryProvider;
