import styled from "styled-components";

const Info = styled.p`
  margin: 0.5rem 0rem;

  span {
    font-weight: 300;
    opacity: 0.9;
  }
`;
export default function CountryInfo({ title, stat, isArray }) {
  return (
    <Info>
      {title}: <span>{isArray ? stat.join(", ") : stat}</span>
    </Info>
  );
}
