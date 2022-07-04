import { Card, ImgContainer, Info } from "./Elements";
import Image from "next/image";
import CountryInfo from "../CountryInfo";

export default function CountryCard({ country }) {
  const getPopulation = (num) => Number(num).toLocaleString();

  return (
    <Card>
      <ImgContainer>
        <Image
          src={country.flags.svg}
          layout="fill"
          objectFit="cover"
          alt={country.name.common}
        />
      </ImgContainer>
      <Info>
        <h2>{country.name.common}</h2>
        <CountryInfo
          title={"Population"}
          stat={getPopulation(country.population)}
        />
        <CountryInfo title={"Region"} stat={country.region} />
        <CountryInfo title={"Capital"} stat={country.capital} />
      </Info>
    </Card>
  );
}
