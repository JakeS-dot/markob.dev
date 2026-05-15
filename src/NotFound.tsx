import "./App.css";

function NotFound() {
  return <>
    <div
      className="parent"
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ width: "35vw", textAlign: "center" }}>
        <div className="title-line" style={{ marginBottom: 10, }}>404  -  Not Found!</div>
        <p style={{ marginBottom: 10 }}>This page could not be found</p>
      </div>
    </div>
  </>
}
export default NotFound
