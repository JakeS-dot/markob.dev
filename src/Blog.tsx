
function Blog() {
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
            <li className="nav-link" id="selected"><a href="blog">blog</a></li>
            <li className="nav-link"><a href="https://music.markob.dev">music</a></li>
            <li className="nav-link"><a href="mc">minecraft</a></li>

          </ul>
        </nav>

        <div className="blog-container">
          <div className="side-collum">
            <div className="day">Sunday</div>
            <div className="date">5th of July</div>
            <div className="year">2026</div>
          </div>
          <div className="blog-main">
            <div className="title-line" style={{ padding: "0 7px", marginTop: -20 }}>
              <h1>making a blog</h1>
              <h2 style={{ "fontSize": 18, "marginTop": -15 }}>
                why I'm making a blog, what I want to do with the website, and the struggles of expressing my creativity
              </h2>
            </div>
            <div className="blog-content">
              <p>
                when i tried applying for <a href="https://dimden.dev/navlinkads">navlink ads</a>, i was (seemingly) rejected. thats when i realized that i needed more to my site, so i added this blog. but in doing that it has also made me think about what makes my website unique, and what about me can i add to my website. i have dj sets, an archive of awesome youtube playlists, a minecraft server, a simple about page, a cool landing page - but then i realized, this is all i have. i'm not scared perse of what i want to put on my site. you, the reader, have no clue who i am and i don't have to really worry about my identity in a public way, so i can put whatever i want on my site. i have a love for a lot of things, old tech, music, weather - but for me it's very hard to put on a website my ways of liking these things. for example i tried recreating the wii weather channel in html, which i'm still doing but slowly , <i>because</i> of the fact that it got really boring - it's not who i really want to show on my site. it's cool, sure, but it's not what i want. i dont really know what i want on my site specifically, but i do know i want that feeling you get when you click on one of those navlink ads and feel someone's true personality and creativeness poured out onto a canvas. it's a true form of art, and i'd like to try my best at it. thats why im thinking of adding new stuff to the site, what? i don't know. it's been 211 days since i put this website up, and not a lot has changed. have ideas? email me: <a href="mailto:markob@markob.dev">markob@markob.dev</a> thanks for reading.
              </p>
            </div>
          </div>
        </div>

      </main>
    </>
  )
}
export default Blog;
