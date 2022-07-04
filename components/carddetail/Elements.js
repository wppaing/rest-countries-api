import styled from "styled-components";

export const BtnContainer = styled.div`
  margin: 2rem 0rem;
  padding: 1rem 0rem;

  @media screen and (max-width: 992px) {
    margin: 1rem 0rem;
  }

  i {
    margin-right: 0.5rem;
  }

  button {
    all: unset;
    padding: 0.7rem 2rem;
    background-color: ${({ theme }) => theme.bgPrimary};
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
      rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
    border-radius: 0.2rem;

    &:hover {
      cursor: pointer;
    }
  }
`;

export const Wrapper = styled.div`
  width: 95%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
`;

export const Container = styled.div`
  display: flex;
  column-gap: 5rem;

  @media screen and (max-width: 992px) {
    column-gap: 2rem;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ImgContainer = styled.div`
  flex: 1;
  position: relative;
  width: 100%;
  min-height: 100%;
  margin-right: 1.5rem;

  @media screen and (max-width: 768px) {
    min-height: 20rem;
  }

  @media screen and (max-width: 576px) {
    min-height: 12rem;
  }
`;

export const InfoContainer = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 3rem auto auto auto;
  gap: 1rem;

  h2 {
    grid-column: 1/3;
    display: flex;
    align-items: center;
  }

  @media screen and (max-width: 992px) {
    div {
      grid-column: 1/3;
    }
  }
`;

export const BorderContainer = styled.div`
  grid-column: 1/3;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-top: 2rem;
`;

export const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;
