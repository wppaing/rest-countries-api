import { createContext, useEffect, useState } from "react";

export const CountryContext = createContext();

const CountryProvider = (props) => {
  const [countries, setCountries] = useState();
  const [loading, setLoading] = useState(true);

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
      setLoading(false);
    })();
  }, []);

  return (
    <CountryContext.Provider value={[countries, loading]}>
      {props.children}
    </CountryContext.Provider>
  );
};

export default CountryProvider;
