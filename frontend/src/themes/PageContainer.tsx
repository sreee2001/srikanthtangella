import styled from "styled-components";
import { type Theme } from "./Themes";

const PageContainer = styled.div<{ theme: Theme }>`
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
  min-height: 100vh;
`;

export default PageContainer;
