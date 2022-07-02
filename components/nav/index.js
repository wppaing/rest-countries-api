import { Container, ThemeToggler, Wrapper } from "./Elements";
import Link from "next/link";

export default function NavBar({ theme, toggleTheme }) {
  return (
    <Wrapper>
      <Container>
        <Link href={"/"}>
          <a>Where in the world?</a>
        </Link>
        <ThemeToggler onClick={toggleTheme}>
          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </ThemeToggler>
      </Container>
    </Wrapper>
  );
}
