import { useEffect, useRef } from "react";
import "./App.css";
import "bitrain-matrixx";
import DancingLines from "./DancingLines";

function App() {
  const dvdRef = useRef(null);
  const position = useRef({ x: 0, y: 0 });
  const velocity = useRef({ vx: 0, vy: 0 });

  useEffect(() => {
    const dvd = dvdRef.current;
    if (!dvd) return;

    // Random starting position
    position.current.x = Math.random() * (window.innerWidth - dvd.offsetWidth);
    position.current.y = Math.random() * (window.innerHeight - dvd.offsetHeight);

    // Random starting velocity (between 2 and 5 px per frame)
    const getRandomVelocity = () => (Math.random() * 3 + 2) * (Math.random() < 0.5 ? 1 : -1);
    velocity.current.vx = getRandomVelocity();
    velocity.current.vy = getRandomVelocity();

    const animate = () => {
      const screenWidth = window.innerWidth - dvd.offsetWidth;
      const screenHeight = window.innerHeight - dvd.offsetHeight;

      // Update position
      position.current.x += velocity.current.vx;
      position.current.y += velocity.current.vy;

      // Bounce off edges
      if (position.current.x <= 0 || position.current.x >= screenWidth) {
        velocity.current.vx = -velocity.current.vx;
      }
      if (position.current.y <= 0 || position.current.y >= screenHeight) {
        velocity.current.vy = -velocity.current.vy;
      }

      // Apply position to DOM
      dvd.style.left = position.current.x + "px";
      dvd.style.top = position.current.y + "px";

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <>
      <main>
        <DancingLines />
        <div
          className="dvd"
          ref={dvdRef}
          style={{ position: "absolute", left: 0, top: 0 }}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/8/85/Dvd_logo.svg"
            alt="DVD Logo"
          />
        </div>

        <matrixx-canvas
          rain-display="charamask"
          direction="down"
          density="10"
          cell-size="16"
          speed="20"
          tail-min="4"
          tail-max="12"
        ></matrixx-canvas>
        <h1 className="landing_title">markob.dev</h1>
        <p>
          You are really not meant to see this its just a landing page for all
          my stuffs :)
        </p>
      </main>
    </>
  );
}

export default App;

