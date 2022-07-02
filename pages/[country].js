import { CountryContext } from "../providers/CountryProvider";
import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import CardDetail from "../components/carddetail";

export default function Country() {
  const [countries] = useContext(CountryContext);
  const router = useRouter();

  const filterCountry = (name) =>
    countries.filter((country) => country.name.common === name)[0];

  return <CardDetail country={filterCountry(router.query.country)} />;
}
