interface navbarRoutes {
  label: string;
  href: string;
}

const routes: navbarRoutes[] = [
  { label: "Transfers", href: "/transfers" },
  { label: "Premiere League", href: "/premiere-league" },
  { label: "Champions League", href: "/champions-league" },
];

export { routes };
