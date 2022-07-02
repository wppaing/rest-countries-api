import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: ${({ theme }) => theme.bgPrimary};
  border-radius: 0.2rem;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
  transition: all 0.2s;
  transition-property: transform, box-shadow;

  &:hover {
    transform: scale(1.01);
    box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  }
`;

export const ImgContainer = styled.div`
  position: relative;
  width: 100%;
  height: 11rem;
`;

export const Info = styled.div`
  padding: 1.5rem;

  h2 {
    font-weight: 800;
    font-size: 1.3rem;
    margin-bottom: 1rem;
  }

  p {
    font-weight: 600;
    margin: 0.2rem 0;
  }

  span {
    font-weight: 300;
    opacity: 0.85;
  }
`;
