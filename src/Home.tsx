import "./App.css";
import ErrorBoundary from "./ErrorBoundary.tsx";
import ChangeLog from "./ChangeLog.tsx";
import { NowPlaying } from "./Music.tsx";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useEffect } from "react";
import NavBar from "./NavBar.tsx";
import ColorPicker from "./ColorPicker.tsx";
import { Link } from "react-router-dom";
import { posts, parseLocalDate } from "./posts";

const images = [
  "https://file.garden/aTofjCD_EwuDgkJP/screenshot_1766469780.png",
  "https://file.garden/aTofjCD_EwuDgkJP/mc.markob.dev.png",
  "https://file.garden/aTofjCD_EwuDgkJP/laingif",
];
function formatShortDate(dateStr: string) {
  const d = parseLocalDate(dateStr);
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  const year = String(d.getFullYear()).slice(-2);
  return `${month}/${day}/${year}`;
}
function StatusCafe() {
  useEffect(() => {
    const s = document.createElement("script");
    s.src = "https://status.cafe/current-status.js?name=markob";
    s.async = true;
    document.body.appendChild(s);

    return () => s.remove();
  }, []);

  return null;
}

function Home() {
  return (
    <>
      <main>
        <NavBar current="home" />
        <div className="parent">
          <div className="div1">
            <div className="title-line">status</div>
            <div id="statuscafe">
              <StatusCafe />
              <div id="statuscafe-username"></div>
              <div id="statuscafe-content"></div>
            </div>
          </div>
          <ErrorBoundary fallback={<div>⚠ Listening unavailable</div>}>
            <div className="div2">
              <h2 className="title-line">music</h2>
              <NowPlaying />
            </div>
          </ErrorBoundary>

          <div className="div3">
            <iframe src="https://nvlk.dimden.dev/" name="neolink"></iframe>
          </div>
          <div className="div4">
            <div className="button-grid">
              <img
                src="https://capstasher.neocities.org/88x31Buttons/93.gif"
                alt="drpeper"
              />
              <img
                src="https://capstasher.neocities.org/88x31Buttons/5srvdSo.gif"
                alt="miku"
              />
              <img
                src="https://capstasher.neocities.org/88x31Buttons/59%20(copy%201).gif"
                alt="playstation"
              />
              <img
                src="https://capstasher.neocities.org/88x31Buttons/abcgiant.gif"
                alt="freegraphics"
              />
              <img
                src="https://capstasher.neocities.org/88x31Buttons/anythingbut.gif"
                alt="nochrome"
              />
              <img
                src="https://capstasher.neocities.org/88x31Buttons/anybestviewed.gif"
                alt="browser"
              />
              <img
                src="https://capstasher.neocities.org/88x31Buttons/anthrax.gif"
                alt="anthrax"
              />
              <img
                src="https://capstasher.neocities.org/88x31Buttons/button.jpg"
                alt="tomato"
              />
              <img
                src="https://capstasher.neocities.org/88x31Buttons/imaginaryland.gif"
                alt="land"
              />
              <img
                src="https://capstasher.neocities.org/88x31Buttons/konko.gif"
                alt="death"
              />
              <img
                src="https://capstasher.neocities.org/88x31Buttons/logo_g.gif"
                alt="panda"
              />
              <img
                src="https://capstasher.neocities.org/88x31Buttons/neocities_hosting.gif"
                alt="neocities"
              />
              <img
                src="https://capstasher.neocities.org/88x31Buttons/notperfect.gif"
                alt="notperfect"
              />
              <img
                src="https://capstasher.neocities.org/88x31Buttons/otherbutton.png"
                alt="cereal"
              />
              <img
                src="https://capstasher.neocities.org/88x31Buttons/pseudocinnabar.gif"
                alt="pseudocinnabar"
              />
              <img
                src="https://capstasher.neocities.org/88x31Buttons/rotteen.gif"
                alt="rotteen"
              />
              <img
                src="https://capstasher.neocities.org/88x31Buttons/eatsteas.gif"
                alt="achtung"
              />
              <img src="markob-83-1.gif" alt="markob" />
            </div>{" "}
          </div>
          <div className="div10">
            <a href="/rss">
              <img
                style={{ width: "100%", height: "auto" }}
                src="/rss-ad.gif"
                alt="rss-ad"
              />
            </a>
          </div>
          <div
            className="div5"
            style={{ display: "flex", flexDirection: "column", height: "98%" }}
          >
            <div
              className="lain-container"
              style={{ flex: 1, width: "100%", minHeight: 0 }}
            >
              <Carousel
                swipeable
                draggable
                showDots
                responsive={{
                  superLargeDesktop: {
                    breakpoint: { max: 4000, min: 0 },
                    items: 1,
                  },
                }}
                infinite
                autoPlay
                autoPlaySpeed={3000}
                keyBoardControl
                containerClass="carousel-container"
                itemClass="carousel-item"
              >
                {images.map((src) => (
                  <div key={src} style={{ width: "100%", height: "100%" }}>
                    <img
                      src={src}
                      alt="slide"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
          <div className="div12">
            <marquee className="title-line" id="marquee" scrollAmount={25}>
              i like scrolling text | lets all love lain | check out music at
              music.markob.dev | or don't | i like blue | we major? | listen to
              mf doom, talking heads, and simon and garfunkel | i like weather |
              i like orange | dude i blog now? | rss feed is real and up | why
              does this exsist again? | 69 | you just lost the game | dude can
              you link me? | i have dj sets! | i also like nujabes
            </marquee>
            <div style={{ display: "flex", marginLeft: 8 }}>
              <p>
                {" "}
                Latest post:{" "}
                <Link to={`/blog/${posts[0].slug}`}>
                  {posts[0].title}
                </Link>, {formatShortDate(posts[0].date)}
              </p>
            </div>
          </div>
          <ErrorBoundary fallback={<div>⚠ Poll unavailable</div>}>
            <div className="div6">
              <h2 className="title-line">poll</h2>
              <form method="post" action="https://poll.pollcode.com/93873326">
                <div className="poll-container">
                  <div className="poll-title">
                    <strong>where do you know me from?</strong>
                  </div>

                  <div className="poll-option">
                    <input type="radio" name="answer" value="1" id="answer1" />
                    <label htmlFor="answer1">school</label>
                  </div>

                  <div className="poll-option">
                    <input type="radio" name="answer" value="2" id="answer2" />
                    <label htmlFor="answer2">family</label>
                  </div>

                  <div className="poll-option">
                    <input type="radio" name="answer" value="3" id="answer3" />
                    <label htmlFor="answer3">internet</label>
                  </div>

                  <div className="poll-option">
                    <input type="radio" name="answer" value="4" id="answer4" />
                    <label htmlFor="answer4">other</label>
                  </div>

                  <div className="poll-buttons">
                    <input type="submit" value="Vote" />
                    <input type="submit" name="view" value="View" />
                  </div>

                  <div className="poll-footer">
                    pollcode.com <a href="https://pollcode.com/">free polls</a>
                  </div>
                </div>
              </form>
            </div>
          </ErrorBoundary>
          <ErrorBoundary>
            <div className="div11">
              <ColorPicker />
            </div>
          </ErrorBoundary>

          <ErrorBoundary fallback={<div>⚠ Changelog failed to load</div>}>
            <div className="div7">
              <ChangeLog />
            </div>
          </ErrorBoundary>

          <div className="div8">
            <a href="https://music.markob.dev">
              <img
                src="https://img1.picmix.com/output/stamp/normal/3/7/6/4/2384673_abbc3.gif"
                alt="lain"
                id="lain"
              />
            </a>
          </div>
          <div className="div9">
            <a href="https://markob.atabook.org">
              <div className="book-container">
                <img
                  id="book"
                  src="https://icons.iconarchive.com/icons/i/power-zaurus/32/guest-book-icon.png"
                  alt="message-book"
                />
              </div>
            </a>
          </div>
        </div>
        <footer>
          <h2 className="title-line" id="footer">
            © 2026 markob. All rights reserved. Third-party images belong to
            their respective authors.
          </h2>
        </footer>
      </main>
    </>
  );
}

export default Home;
