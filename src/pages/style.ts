import styled from "styled-components";

export const PageContainer = styled.div`
  display: grid;
  grid-template-columns:
    [full-start] 1fr [center-start] repeat(8, minmax(min-content, 13rem))
    [center-end] 1fr [full-end];
`;
