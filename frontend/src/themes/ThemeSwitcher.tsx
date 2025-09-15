import { UseTheme } from "./ThemeProvider";
import { lightTheme, darkTheme, type Theme } from "./Themes";

const themes: Theme[] = [
  lightTheme,
  darkTheme,
  // Add more themes here as needed
];

export default function ThemeSwitcher() {
  const { theme, setTheme } = UseTheme();

  return (
    <div style={{ margin: "1rem 0", textAlign: "right" }}>
      <label htmlFor="theme-select" style={{ marginRight: "0.5rem" }}>
        Theme:
      </label>
      <select
        id="theme-select"
        value={theme.name}
        onChange={(e) => {
          const selected = themes.find((t) => t.name === e.target.value);
          if (selected) setTheme(selected);
        }}
      >
        {themes.map((t) => (
          <option
            key={t.name}
            value={t.name}
            style={{
              fontWeight: t.name === theme.name ? "bold" : "normal",
            }}
          >
            {t.name.charAt(0).toUpperCase() + t.name.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
}
