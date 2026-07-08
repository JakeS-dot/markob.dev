type NavBarProps = {
  current?: string;
};

export default function NavBar({ current }: NavBarProps) {
  return (
    <nav>
      <div className="titlewrapper">
        <h1 id="title">markob.dev</h1>
        <div id="notch"></div>
      </div>

      <ul className="nav-container">
        <li
          id={current === "home" ? "selected" : undefined}
          className="nav-link"
        >
          <a href="/">home</a>
        </li>

        <li
          id={current === "about" ? "selected" : undefined}
          className="nav-link"
        >
          <a href="/about">about</a>
        </li>

        <li
          id={current === "blog" ? "selected" : undefined}
          className="nav-link"
        >
          <a href="/blog">blog</a>
        </li>

        <li
          id={current === "music" ? "selected" : undefined}
          className="nav-link"
        >
          <a href="https://music.markob.dev">music</a>
        </li>

        <li
          id={current === "links" ? "selected" : undefined}
          className="nav-link"
        >
          <a href="/links">links</a>
        </li>

        <li id={current === "mc" ? "selected" : undefined} className="nav-link">
          <a href="/mc">minecraft</a>
        </li>
      </ul>
    </nav>
  );
}
