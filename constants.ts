interface navbarRoutes {
  label: string;
  href: string;
}

const routes: navbarRoutes[] = [
  { label: "Transfers", href: "/transfers" },
  { label: "Premiere League", href: "/premiere-league" },
  { label: "La Liga", href: "/la-liga" },
];

export { routes };
