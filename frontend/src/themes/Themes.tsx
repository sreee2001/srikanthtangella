export interface Theme {
  name: string;
  background: string;
  color: string;
  accent: string;
  backgroundColor: string;
  // Add more properties as needed
}

export const lightTheme: Theme = {
  name: "light",
  background: "#fff",
  color: "#222",
  accent: "#007bff",
  backgroundColor: "#ffffff",
  // Add more properties as needed
};

export const darkTheme: Theme = {
  name: "dark",
  background: "#181818",
  color: "#f5f5f5",
  accent: "#ff4081",
  backgroundColor: "#242424",
  // Add more properties as needed
};
