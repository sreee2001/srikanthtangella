import "./App.css";
import NavigationMenuOptions from "./Navigation/NavigationMenu.options";
import NavigationMenu from "./Navigation/NavigationMenu";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { UseTheme } from "./themes/ThemeProvider";
import ThemeSwitcher from "./themes/ThemeSwitcher";
import PageContainer from "./themes/PageContainer";

function App() {
  const { theme } = UseTheme();

  return (
    <PageContainer theme={theme}>
      <StyledThemeProvider theme={theme}>
        <ThemeSwitcher />
        <NavigationMenu menu={Object.values(NavigationMenuOptions)} />
      </StyledThemeProvider>
    </PageContainer>
  );
}

export default App;
