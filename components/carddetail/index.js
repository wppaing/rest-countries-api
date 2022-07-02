import {
  ImgContainer,
  InfoContainer,
  Wrapper,
  Container,
  BtnContainer,
  BorderContainer,
  Cards,
} from "./Elements";
import { useRouter } from "next/router";
import Image from "next/image";
import CountryInfo from "../CountryInfo";
import React from "react";
import BorderCard from "./BorderCard";

export default function CardDetail({ country }) {
  const router = useRouter();
  const getCurrencies = (obj) => Object.values(obj).map((curr) => curr.name);
  const getLanguages = (lang) => Object.values(lang);
  const getNativeName = (nameObj) =>
    Object.values(nameObj.nativeName)[0]?.common;

  return (
    <Wrapper>
      <BtnContainer>
        <button onClick={() => router.back()}>Back</button>
      </BtnContainer>
      <Container>
        <ImgContainer>
          <Image
            src={country.flags.svg}
            layout="fill"
            objectFit="cover"
            alt={country.name.common}
          />
        </ImgContainer>
        <InfoContainer>
          <h2>{country.name.common}</h2>
          <div>
            <CountryInfo
              title={"Native Name"}
              stat={getNativeName(country.name)}
            />
            <CountryInfo
              title={"Population"}
              stat={Number(country.population).toLocaleString()}
            />
            <CountryInfo title={"Region"} stat={country.region} />
            <CountryInfo title={"Sub Region"} stat={country.subregion} />
            <CountryInfo title={"Capital"} stat={country.capital} />
          </div>
          <div>
            <CountryInfo
              title={"Top Level Domain"}
              stat={country.tld}
              isArray
            />
            <CountryInfo
              title={"Currencies"}
              stat={getCurrencies(country.currencies)}
            />
            <CountryInfo
              title={"Languages"}
              stat={getLanguages(country.languages)}
              isArray
            />
          </div>
          <BorderContainer>
            <div>Border Countries:</div>
            <Cards>
              {country.borders.map((border) => (
                <BorderCard name={border} key={border} />
              ))}
            </Cards>
          </BorderContainer>
        </InfoContainer>
      </Container>
    </Wrapper>
  );
}
