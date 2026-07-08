import NavBar from "./NavBar.tsx";

function Rss() {
  return (
    <>
      <main>
        <NavBar />
        <div className="parent">
          <div
            style={{
              gridColumnEnd: "7",
              gridColumnStart: "1",
              display: "flex",
              flexDirection: "column",
              height: "100%",
            }}
          >
            <div
              className="title-line"
              style={{
                margin: 0,
                textAlign: "center",
              }}
            >
              <h1>subscribe to my RSS feed</h1>
            </div>

            <div style={{ textAlign: "left", margin: 8 }}>
              <h2>what is it?</h2>
              <p>
                rss (really simple sindication) is a way for text and news
                content to be distrubuted in a really easy way, my rss feed will
                just contain my blog posts (for now). i want to have this
                because its a cool thing that i dont see alot of other websites
                have. more websites should use rss!
              </p>

              <h2>cool! how do i subscribe?</h2>

              <p>easy! just:</p>

              <ol>
                <li>pick your rss software of choice</li>
                <li>
                  subscribe using the link{" "}
                  <span
                    style={{
                      userSelect: "all",
                      WebkitUserSelect: "all",
                      MozUserSelect: "all",
                      cursor: "text",
                    }}
                  >
                    <u>rss.markob.dev</u>
                  </span>
                </li>
                <li>enjoy!</li>
              </ol>

              <h3>a small disclaimer...</h3>

              <p>
                the chances of me making a blog post on a random day are low,
                and it may stay inactive for a while - but ill try my best to
                keep it alive
              </p>
            </div>

            <div
              className="title-line"
              style={{
                color: "white",
                marginTop: "auto",
              }}
            >
              <h1
                style={{
                  textAlign: "center",
                  padding: 0,
                  animation: "flash 1s steps(1, start) infinite",
                }}
              >
                rss.markob.dev
              </h1>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Rss;
