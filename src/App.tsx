import "./App.css";
import "bitrain-matrixx";

function App() {
  return (
    <>
      <main>
        <matrixx-canvas
          rain-display="charamask"
          direction="down"
          density="6"
          cell-size="16"
          speed="20"
          tail-min="4"
          tail-max="12"
        ></matrixx-canvas>
        <h1 class="landing_title">markob.dev</h1>
        <p>
          You are really not meant to see this its just a landing page for all
          my stuffs :)
        </p>
      </main>
    </>
  );
}

export default App;
