function Mc() {
  return (
    <>
      <main>
        <nav>
          <div className="titlewrapper">
            <h1 id="title">markob.dev</h1>
            <div id="notch"></div></div>
          <ul className="nav-container">
            <li className="nav-link"><a href="/">home</a></li>
            <li className="nav-link">
              <a href="about">about</a>
            </li>
            <li className="nav-link"><a href="https://music.markob.dev">music</a></li>
            <li className="nav-link" id="selected"><a href="mc">minecraft</a></li>
          </ul>
        </nav>
        <div className="parent">
          <div style={{ "gridColumnEnd": "7", "gridColumnStart": "1", "textAlign": "center" }}>
            <h1>mc.markob.dev</h1>
            <h2>reasons you should visit:</h2>
            <p>
              <li>its fun</li>
              <li>creative freedom</li>
              <li>its minecraft</li>
            </p>
            <h1 style={{ "fontSize": "52px", "animation": "flash 1s steps(1, start) infinite" }}>join today!</h1>
            <h2>
              IP:{" "}
              <span
                style={{
                  textDecoration: "underline",
                  userSelect: "all", // ensure it’s selectable
                }}
              >
                mc.markob.dev
              </span>
            </h2>
            <footer>(the MOTD [server desciption] dosent work btw)</footer>
          </div>
        </div>
      </main>
    </>
  )
}
export default Mc;
