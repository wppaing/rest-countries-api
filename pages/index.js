import { useContext, useEffect } from "react";
import Main from "../components/main";
import { CountryContext } from "../providers/CountryProvider";

const Home = ({ countriesData }) => {
  const [countries, setCountries, loading, setLoading] =
    useContext(CountryContext);

  useEffect(() => {
    setCountries(countriesData);
    setLoading(false);
  }, [countriesData]);

  return <Main />;
};

export async function getStaticProps() {
  const res = await fetch(
    `https://restcountries.com/v3.1/all?fields=name,population,region,subregion,capital,flags,cca3,continents,tld,currencies,languages,borders`
  );
  const data = await res.json();
  const countriesData = data.sort((a, b) =>
    a.name.common.localeCompare(b.name.common)
  );

  return {
    props: {
      countriesData,
    },
  };
}

export default Home;
