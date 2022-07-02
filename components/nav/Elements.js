import styled from "styled-components";

export const Wrapper = styled.nav`
  font-size: 1.3rem;
  font-weight: 800;
  background-color: ${({ theme }) => theme.bgPrimary};
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
`;

export const Container = styled.div`
  width: 95%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 1rem;
`;

export const ThemeToggler = styled.div`
  font-size: 1rem;

  :hover {
    cursor: pointer;
  }
`;
