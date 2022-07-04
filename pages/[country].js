import { CountryContext } from "../providers/CountryProvider";
import { useContext } from "react";
import { useRouter } from "next/router";
import CardDetail from "../components/carddetail";

export default function Country() {
  const [countries, setCountries, loading, setLoading] =
    useContext(CountryContext);
  const router = useRouter();

  const filterCountry = (name) =>
    countries.filter((country) => country.name.common === name)[0];

  return <CardDetail country={filterCountry(router.query.country)} />;
}
