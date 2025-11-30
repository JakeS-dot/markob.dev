import "./App.css"
import "./About.css"
import logo from './image.png'
import MatrixRain from "./MatrixRain.tsx"

export default function About() {
  return (
    <>
      <main>
        <nav>
          <div className="titlewrapper">
            <h1 id="title">markob.dev</h1>
            <div id="notch"></div></div>
          <ul className="nav-container">
            <li className="nav-link"><a href="/">home</a></li>
            <li className="nav-link" id="selected" >
              <a href="about">about</a>
            </li>
            <li className="nav-link"><a href="https://music.markob.dev">music</a></li>
            <li className="nav-link">minecraft</li>
          </ul>
        </nav>
        <div className="about-grid">
          <div className="adiv1">
            <div>❯ fastfetch</div>

            <div className="term">
              <div className="logo"><img src={logo} alt="arch-logo" /></div>
              <div className="info">
                <div><span className="items-title">markob</span>@<span className="items-title">archlinux</span></div>
                <div><span className="items-title">os</span>       Arch Linux x86_64</div>
                <div><span className="items-title">de</span>       Hyprland 0.52.1 (Wayland)</div>
                <div><span className="items-title">pkgs</span>     1258 (pacman)</div>
                <div><span className="items-title">shell</span>    fish 4.2.1</div>
                <div><span className="items-title">kernel</span>   Linux 6.17.8-arch1-1</div>
                <div><span className="items-title">uptime</span>   6h 29m</div>
                <div><span className="items-title">os age</span>   94 days</div>
                <div><span className="items-title">memory</span>   6.09 GiB / 15.31 GiB</div>
                <br />
                <div>● ● ● ● ● ● ● ●</div>
              </div>
            </div>
            <div>❯ cmatrix</div>
            <div className="matrix">
              <MatrixRain
                density={0.07}
                fadeRate={0.1}
              />
            </div>
          </div>
          <div className="adiv2">
            <p>hey im <u id="markob">markob</u>, which is a combination of "jac<em>ob"</em> and <em>"mark</em> zuckerburg". my friends came up with it when i was in middle school. although i can code (some), i want to work in meteorology in the future. i do in fact daily drive arch linux (no i dont hate myself), and i also listen to a lot of music. i say ill listen to anything but thats not true because my likes are split amongst 4 pretty basic genres: breakcore, rap, jazz, and alt rock (ish), thats about it. <strong> thanks for visiting my website!</strong></p>
            <p id="email">contact me at: <a href="mailto:markob@markob.dev">markob@markob.dev</a></p>
          </div>
          <div className="adiv3">
            <marquee className="title-line" scrollAmount={15}>but wait: where do you get these awesome playlists at <a href="https://music.markob.dev">music.markob.dev</a>???</marquee>
          </div>
          <div className="adiv4">
            <p>im glad you asked! all of these playlists are downloaded automaticaly from the youtube channel <a href="https://youtube.com/@mai_dq">mai</a>, who is a youtube playlist creator. been listening to mai since 2023, and one day i decided that i wanted to archive these. alot of playlists are removed and privated because of copyright. tacklists and desciptions of each playlist are avaibable on mai's doc <a href="https://docs.google.com/document/d/1ZBTsQ05rEUskPTNWz4--2dNgBV1-ydPIZLDnSnHRbvk/edit?usp=sharing">here</a>. filenames are not updated if the title changes. there are also all of the <a href="https://www.youtube.com/@otonashiyana">second channel</a> playlists there too.</p>
          </div>
          <div className="adiv5">
            <p>this website is open source! view code <a href="https://github.com/JakeS-dot/markob.dev#">here</a></p>
          </div>
          <div className="adiv6">
            <p>share my website:            <span>              <u>markob.dev</u>

            </span>
            </p>
            <div className="button-box">
              <div>
                <img style={{ margin: 5 }} src={`${import.meta.env.BASE_URL}markob.gif`} alt="markob.dev button" />
              </div>
              <div id="button-code">
                <pre>
                  <code>
                    {`<a href="https://markob.dev"><img src="https://markob.dev/markob.gif" alt="markob.dev button" /></a>`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
          <div className="adiv7">
            <p>listen to mai at <a href="https://music.markob.dev">music.markob.dev</a></p>
          </div>
        </div>
      </main >
    </>
  )
}
