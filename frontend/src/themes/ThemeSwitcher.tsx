import { UseTheme } from "./ThemeProvider";
import { lightTheme, darkTheme } from "./Themes";

export default function ThemeSwitcher() {
  const { theme, setTheme } = UseTheme();

  return (
    <div style={{ margin: "1rem 0" }}>
      <button
        onClick={() => setTheme(lightTheme)}
        disabled={theme.name === "light"}
      >
        Light
      </button>
      <button
        onClick={() => setTheme(darkTheme)}
        disabled={theme.name === "dark"}
        style={{ marginLeft: "1rem" }}
      >
        Dark
      </button>
    </div>
  );
}
