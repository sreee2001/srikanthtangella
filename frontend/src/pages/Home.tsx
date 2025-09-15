import { Link } from "react-router-dom";
import NavigationMenuOptions from "../Navigation/NavigationMenu.options";

export default function Home() {
  type GridItem = {
    title: string;
    url: string;
    children?: string[];
  };

  //   const gridDisplayItems: GridItem[] = [
  //     { title: "Machine Learning" },
  //     { title: "Web UI", children: ["React", "Asp.Net"] },
  //     { title: "Desktop UI", children: ["WPF", "Winforms", "Swift", "Cocoa"] },
  //     {
  //       title: "Cybersecurity",
  //       children: ["Network", "Identifying phishing, vishing, etc"],
  //     },
  //     // Add more items as needed to fill 3x3 (9 items)
  //     { title: "Cloud Computing" },
  //     { title: "DevOps" },
  //     { title: "Mobile Apps", children: ["Android", "iOS"] },
  //     { title: "Data Science" },
  //     { title: "APIs" },
  //   ];

  const gridDisplayItems: GridItem[] = Object.values(NavigationMenuOptions).map(
    (item) => ({
      title: item.name,
      url: item.url,
    })
  );

  gridDisplayItems.push(
    { title: "GitHub", url: "/github" },
    { title: "Tutorials", url: "/tutorials" },
    { title: "Machine Learning", url: "/machinelearning" },
    { title: "Cybersecurity", url: "/cybersecurity" },
    { title: "Cloud Computing", url: "/cloudcomputing" }
  );

  return (
    <div style={{ paddingTop: "2rem" }}>
      <h1>Welcome to my world!</h1>
      <h2> ~ Srikanth Tangella ~ </h2>

      {/* <h3>Table of Contents</h3> */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1rem",
          marginTop: "2rem",
        }}
      >
        {gridDisplayItems.map((item) => (
          <Link
            key={item.title}
            to={item.url}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "1rem",
              background: "var(--background-bg)",
            }}
          >
            <strong>{item.title}</strong>
            {item.children && (
              <ul style={{ marginTop: "0.5rem" }}>
                {item.children.map((child) => (
                  <li key={child}>{child}</li>
                ))}
              </ul>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
