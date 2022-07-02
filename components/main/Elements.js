import styled from "styled-components";

export const Container = styled.main`
  width: 95%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
`;

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.8rem;
  margin: 1rem 0rem 2rem;

  input {
    all: unset;
    width: 16rem;
    padding: 1rem 1.5rem;
    border-radius: 0.2rem;
    background-color: ${({ theme }) => theme.bgPrimary};
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
      rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;

    &::placeholder {
      color: ${({ theme }) => theme.primary};
    }
  }

  select {
    padding: 1rem 1rem;
    border: none;
    outline: none;
    color: ${({ theme }) => theme.primary};
    background-color: ${({ theme }) => theme.bgPrimary};
    border-radius: 0.2rem;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
      rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  }

  @media screen and (max-width: 576px) {
    flex-direction: column;
    align-items: flex-start;
    row-gap: 1rem;

    input {
      width: -webkit-fill-available;
    }
  }
`;

export const CountriesContainer = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, 16rem);
  gap: 3rem;

  @media screen and (max-width: 1200px) {
    gap: 2rem;
  }
`;
