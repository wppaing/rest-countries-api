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
          <i className={`fas ${theme === "light" ? "fa-sun" : "fa-moon"}`}></i>
          {theme === "light" ? "Light Mode" : "Dark Mode"}
        </ThemeToggler>
      </Container>
    </Wrapper>
  );
}
