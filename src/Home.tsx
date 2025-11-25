import "./App.css";
import ErrorBoundary from "./ErrorBoundary.tsx"
import ChangeLog from "./ChangeLog.tsx"
import { NowPlaying } from "./Music.tsx"
function Home() {
  return (
    <>
      <main>
        <nav>
          <div className="titlewrapper">
            <h1 id="title">markob.dev</h1>
            <div id="notch"></div></div>
          <ul className="nav-container">
            <li id="selected" className="nav-link"><a href="home">home</a></li>
            <li className="nav-link">
              <a href="about">about</a>
            </li>
            <li className="nav-link"><a href="https://music.markob.dev">music</a></li>
            <li className="nav-link">minecraft</li>
          </ul>
        </nav>
        <div className="parent">
          <div className="div1">
            <h2 className="title-line">status</h2>
            <div className="userdate">
              <p>
                <strong>markob</strong></p>
              <p style={{ marginLeft: 50 }}><em>today</em></p>
            </div>
            <p id="status">waiting for status.cafe to send my email...</p>
            <div>
            </div>
          </div>
          <ErrorBoundary fallback={<div>⚠ Listening unavailable</div>}>
            <div className="div2">
              <h2 className="title-line">music</h2>
              <NowPlaying /></div>
          </ErrorBoundary>

          <div className="div3">
            <div className="button-grid"><img src="https://capstasher.neocities.org/88x31Buttons/93.gif" alt="drpeper" />
              <img src="https://capstasher.neocities.org/88x31Buttons/5srvdSo.gif" alt="miku" />
              <img src="https://capstasher.neocities.org/88x31Buttons/59%20(copy%201).gif" alt="playstation" />
              <img src="https://capstasher.neocities.org/88x31Buttons/abcgiant.gif" alt="freegraphics" />
              <img src="https://capstasher.neocities.org/88x31Buttons/anythingbut.gif" alt="nochrome" />
              <img src="https://capstasher.neocities.org/88x31Buttons/anybestviewed.gif" alt="browser" />
              <img src="https://capstasher.neocities.org/88x31Buttons/anthrax.gif" alt="anthrax" />
              <img src="https://capstasher.neocities.org/88x31Buttons/button.jpg" alt="tomato" />
              <img src="https://capstasher.neocities.org/88x31Buttons/imaginaryland.gif" alt="land" />
              <img src="https://capstasher.neocities.org/88x31Buttons/konko.gif" alt="death" />
              <img src="https://capstasher.neocities.org/88x31Buttons/logo_g.gif" alt="panda" />
              <img src="https://capstasher.neocities.org/88x31Buttons/neocities_hosting.gif" alt="neocities" />
              <img src="https://capstasher.neocities.org/88x31Buttons/notperfect.gif" alt="notperfect" />
              <img src="https://capstasher.neocities.org/88x31Buttons/otherbutton.png" alt="cereal" />
              <img src="https://capstasher.neocities.org/88x31Buttons/pseudocinnabar.gif" alt="pseudocinnabar" />
              <img src="https://capstasher.neocities.org/88x31Buttons/rotteen.gif" alt="rotteen" />
            </div>      </div>
          <div className="div4"><iframe src="https://dimden.neocities.org/navlink/" name="neolink"></iframe></div>
          <div className="div5">
            <marquee className="title-line" id="marquee" scrollAmount={25}>
              i like scrolling text | lets all love lain | check out music at music.markob.dev | or don't | we major? | listen to mf doom, talking heads, and simon and garfunkel | i like weather | i like orange | i like blue
            </marquee>
            <div className="lain-container">
              <div id="lain-text"><h1>welcome to markob.dev</h1>
                <p>Stuff coming soon, (wii weather channel remake?)</p></div>
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

          <ErrorBoundary fallback={<div>⚠ Changelog failed to load</div>}>
            <div className="div7"><ChangeLog /></div>
          </ErrorBoundary>

          <div className="div8">
            <a href="https://music.markob.dev">
              <img src="https://img1.picmix.com/output/stamp/normal/3/7/6/4/2384673_abbc3.gif" alt="lain" id="lain" />
            </a>
          </div>
          <div className="div9">
            <a href="https://markob.atabook.org">
              <div className="book-container">
                <h2 id="gbook" className="title-line">sign my guestbook</h2>
                <img id="book" src="https://icons.iconarchive.com/icons/i/power-zaurus/32/guest-book-icon.png" alt="message-book" />
              </div>
            </a>
          </div>

        </div>
      </main >
    </>
  )
}

export default Home;

