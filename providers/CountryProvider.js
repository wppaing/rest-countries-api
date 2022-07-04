import { createContext, useState } from "react";

export const CountryContext = createContext();

const CountryProvider = (props) => {
  const [countries, setCountries] = useState();
  const [loading, setLoading] = useState(true);

  return (
    <CountryContext.Provider
      value={[countries, setCountries, loading, setLoading]}
    >
      {props.children}
    </CountryContext.Provider>
  );
};

export default CountryProvider;
