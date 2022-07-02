import styled from "styled-components";
import { useContext } from "react";
import { CountryContext } from "../../providers/CountryProvider";
import Link from "next/link";

const StyledBorderCard = styled.span`
  display: inline-block;
  font-size: 0.8rem;
  font-weight: 300;
  padding: 0.3rem;
  background-color: ${({ theme }) => theme.bgPrimary};
  border-radius: 0.2rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;

  &:hover {
    transform: scale(1.01);
  }
`;

export default function BorderCard({ name }) {
  const [countries] = useContext(CountryContext);
  const fullName = countries.filter((country) => country.cca3 === name)[0].name
    .common;

  return (
    <Link href={`/${fullName}`}>
      <a>
        <StyledBorderCard>{fullName}</StyledBorderCard>
      </a>
    </Link>
  );
}
