export type NavigationMenuItem = {
  name: string;
  url: string;
  route: string;
};

export type NavigationMenuProps = {
  menu: NavigationMenuItem[];
};
