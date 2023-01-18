import styled from "styled-components";

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 40px;
  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px;
  }
`;

export const CategoryTitle = styled.h2`
  font-size: 38px;
  margin-bottom: 30px;
  text-align: center;
`;