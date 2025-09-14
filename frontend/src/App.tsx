import "./App.css";
import NavigationMenuOptions from "./Navigation/NavigationMenu.options";
import NavigationMenu from "./Navigation/NavigationMenu";

function App() {
  return (
    <>
      <NavigationMenu menu={Object.values(NavigationMenuOptions)} />
    </>
  );
}

export default App;
