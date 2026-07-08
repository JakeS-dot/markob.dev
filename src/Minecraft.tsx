import NavBar from "./NavBar";
function Mc() {
  return (
    <>
      <main>
        <NavBar current="mc" />
        <div className="parent">
          <div
            style={{
              gridColumnEnd: "7",
              gridColumnStart: "1",
              textAlign: "center",
            }}
          >
            <h1>mc.markob.dev</h1>
            <h2>reasons you should visit:</h2>
            <p>
              <li>its fun</li>
              <li>creative freedom</li>
              <li>its minecraft</li>
            </p>
            <h1
              style={{
                fontSize: "52px",
                animation: "flash 1s steps(1, start) infinite",
              }}
            >
              join today!
            </h1>
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
  );
}
export default Mc;
