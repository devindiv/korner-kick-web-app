interface navbarRoutes {
  label: string;
  href: string;
}

const routes: navbarRoutes[] = [
  { label: "Transfers", href: "/wwe" },
  { label: "Premiere League", href: "/aew" },
  { label: "La Liga", href: "/la-liga" },
];

export { routes };
