import NavBar from "./nav";

export default function Layout({ children, theme, toggleTheme }) {
  return (
    <>
      <NavBar theme={theme} toggleTheme={toggleTheme} />
      {children}
    </>
  );
}
