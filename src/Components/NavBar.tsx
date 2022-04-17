import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme();

interface LinkContent {
  name: string;
  text: string;
  href: string;
}

const links: LinkContent[] = [
  { name: "home", text: "Home", href: "/" },
  { name: "cv", text: "CV", href: "/cv" },
  { name: "projects", text: "Projects", href: "/projects" },
];

interface NavBarProps {
  current: string;
}

function NavBar(props: NavBarProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: "wrap" }}>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            Portfolio Morris Boers
          </Typography>
          <nav>
            {links.map((link) => (
              <Link
                key={link.name}
                variant="button"
                color={
                  props.current === link.name
                    ? "text.primary"
                    : "text.secondary"
                }
                underline="none"
                href={link.href}
                sx={{ my: 1, mx: 1.5 }}
              >
                {link.text}
              </Link>
            ))}
          </nav>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

export default NavBar;
