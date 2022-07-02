import { Card, ImgContainer, Info } from "./Elements";
import Image from "next/image";

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
        <p>
          Population: <span>{getPopulation(country.population)}</span>
        </p>
        <p>
          Region: <span>{country.region}</span>
        </p>
        <p>
          Capital: <span>{country.capital}</span>
        </p>
      </Info>
    </Card>
  );
}
