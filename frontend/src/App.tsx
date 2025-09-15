import "./App.css";
import "./styles/theme.css";
import NavigationMenuOptions from "./Navigation/NavigationMenu.options";
import NavigationMenu from "./Navigation/NavigationMenu";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { UseTheme } from "./themes/ThemeProvider";
import PageContainer from "./themes/PageContainer";

function App() {
  const { theme } = UseTheme();

  return (
    <PageContainer id="root" className={`theme-${theme.name}`}>
      <StyledThemeProvider theme={theme}>
        <NavigationMenu menu={Object.values(NavigationMenuOptions)} />
      </StyledThemeProvider>
    </PageContainer>
  );
}

export default App;
