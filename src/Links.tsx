import NavBar from "./NavBar.tsx";
const buttons = import.meta.glob("/src/buttons/other/*", {
  eager: true,
  import: "default",
}) as Record<string, string>;
// Source - https://stackoverflow.com/a/52033479
// Posted by Gary Vernon Grubb, modified by community. See post 'Timeline' for change history
// Retrieved 2026-07-07, License - CC BY-SA 4.0

function Links() {
  return (
    <>
      <main>
        <NavBar current="links" />
        <div className="parent-links">
          <div className="div1-l">
            <div className="title-line">
              these are all my buttons, feel free{" "}
              <u>
                <i>to</i>
              </u>{" "}
              hotlink!{" "}
              <span style={{ float: "right", marginRight: 8 }}>
                click a button to copy its code!
              </span>
            </div>
            <div className="button-rack">
              <img
                onClick={() => {
                  navigator.clipboard.writeText(
                    `<a href="https://markob.dev"><img src="https://markob.dev/markob-83-1.gif" alt="markob.dev button" /></a>`,
                  );
                }}
                src="markob-83-1.gif"
                alt="markob.dev button"
              />
              <img
                onClick={() => {
                  navigator.clipboard.writeText(
                    `<a href="https://markob.dev"><img src="https://markob.dev/markob-83-2.gif" alt="markob.dev button" /></a>`,
                  );
                }}
                src="markob-83-2.gif"
                alt="markob.dev button"
              />
              <img
                onClick={() => {
                  navigator.clipboard.writeText(
                    `<a href="https://markob.dev"><img src="https://markob.dev/markob-32-1.gif" alt="markob.dev button" /></a>`,
                  );
                }}
                src="markob-32-1.gif"
                alt="markob.dev button"
              />
              <img
                onClick={() => {
                  navigator.clipboard.writeText(
                    `<a href="https://markob.dev"><img src="https://markob.dev/markob-32-2.gif" alt="markob.dev button" /></a>`,
                  );
                }}
                src="markob-32-2.gif"
                alt="markob.dev button"
              />
            </div>
          </div>
          <div className="div2-l">
            <h2 className="title-line">
              these are some of my favorite websites
            </h2>
            <div className="buttonl-grid">
              <a href="https://mystsaphyr.art">
                <img src="buttons/myst_equalizer.gif" alt="button" />
              </a>
              <a href="https://knoxstation.neocities.org">
                <img src="buttons/knoxstation.gif" alt="button" />
              </a>
              <a href="https://the64thsanctum.net">
                <img src="buttons/64thsanctum.gif" alt="button" />
              </a>
              <a href="https://pombogay.neocities.org">
                <img
                  height={31}
                  width={85}
                  src="buttons/button-pombogay.gif"
                  alt="button"
                />
              </a>
              <a href="https://juuyondaime.net">
                <img src="buttons/button.png" alt="button" />
              </a>
              <a href="https://chicagosoftcore.net">
                <img src="buttons/CSCbutton.gif" alt="button" />
              </a>
              <a href="https://00s.neocities.org">
                <img src="buttons/button.gif" alt="button" />
              </a>
              <a href="https://controlcoreangel.neocities.org">
                <img src="buttons/cca_neocities_button.gif" alt="button" />
              </a>
              <a href="https://tectrix.neocities.org">
                <img src="buttons/button.gif" alt="button" />
              </a>
              <a href="https://maehat.neocities.org">
                <img src="buttons/mae_miku.png" alt="button" />
              </a>
              <a href="https://slushiecafe.neocities.org">
                <img src="buttons/slushiecafebutton.gif" alt="button" />
              </a>
              <a href="https://respiradordemostaza.neocities.org">
                <img src="buttons/gif.gif" alt="button" />
              </a>
              <a href="https://makoenergy.neocities.org">
                <img src="buttons/sitebutton1.gif" alt="button" />
              </a>
              <a href="https://koinuko.pink">
                <img src="buttons/btn_site2.gif" alt="button" />
              </a>
              <a href="https://inkposting.neocities.org">
                <img src="buttons/inkposting.png" alt="button" />
              </a>
              <a href="https://ne0nbandit.github.io">
                <img src="buttons/nbbanner.png" alt="button" />
              </a>
              <a href="https://twelvemen.neocities.org">
                <img src="buttons/12men.gif" alt="button"></img>
              </a>
              <a href="https://serecky.neocities.org">
                <img src="buttons/sereckybutton.gif" alt="button"></img>
              </a>
              <a href="https://ita.toys">
                <img src="buttons/ita-button.gif" alt="button" />
              </a>
              <a href="https://pixelmoondust.neocities.org">
                <img src="buttons/pixelmoondust.gif" alt="button" />
              </a>
              <a href="https://ruralrose.neocities.org">
                <img src="buttons/newbutton.gif" alt="button" />
              </a>
              <a href="https://amriel.neocities.org">
                <img src="buttons/5f2d434eb3100d2.gif" alt="button" />
              </a>
              <a href="https://hayleymulch.neocities.org">
                <img src="buttons/sdo_button.gif" alt="button" />
              </a>
              <a href="https://literaturegirl.neocities.org">
                <img src="buttons/button.png" alt="button" />
              </a>
              <a href="https://melankorin.net">
                <img src="buttons/button-1.gif" alt="button" />
              </a>
              <a href="https://newlambda.neocities.org">
                <img src="buttons/nlbutton1.gif" alt="button" />
              </a>
              <a href="https://blog.prismatic.pink">
                <img src="buttons/88x31prismaticpink3.gif" alt="button" />
              </a>
              <a href="https://bonsbakery.neocities.org">
                <img src="buttons/BonsBakeryButton.gif" alt="button" />
              </a>
              <a href="https://cadnomori.neocities.org">
                <img src="buttons/cypressbutton.png" alt="button" />
              </a>
              <a href="https://eggramen.neocities.org">
                <img src="buttons/eggramen_button2_simple.png" alt="button" />
              </a>
              <a href="https://vencake.neocities.org">
                <img src="buttons/websitebutton.png" alt="button" />
              </a>
              <a href="https://joro.nu">
                <img src="buttons/joroki-para8831.png" alt="button" />
              </a>
              <a href="https://dimden.dev">
                <img src="buttons/88x31.gif" alt="button" />
              </a>
              <a href="https://milfgod.net">
                <img src="buttons/MILFGOD.gif" alt="button" />
              </a>
              <a href="https://lifeinthe4thdimension.neocities.org">
                <img src="buttons/button.gif" alt="button" />
              </a>
              <a href="https://armonicnoise.neocities.org">
                <img src="buttons/armonicnoiseicon1.png" alt="button" />
              </a>
              <a href="https://lu.tiny-universes.net">
                <img src="buttons/lulu.gif" alt="button" />
              </a>
              <a href="https://beanbottles.neocities.org">
                <img src="buttons/beangrunge.gif" alt="button" />
              </a>
              <a href="https://plumbum.neocities.org">
                <img src="buttons/Button.png" alt="button" />
              </a>
              <a href="https://crows-nest.neocities.org">
                <img src="buttons/cnbutton.gif" alt="button" />
              </a>
              <a href="https://strawberryreverie.neocities.org">
                <img src="buttons/sr_bypom.gif" alt="button" />
              </a>
              <a href="https://humanfinny.neocities.org">
                <img src="buttons/humanfinny_88x31_3.jpg" alt="button" />
              </a>
              <a href="https://plasticdino.net">
                <img src="buttons/plasticdinogif.gif" alt="button" />
              </a>
              <a href="https://lazer-bunny.neocities.org">
                <img src="buttons/Button_88x31.gif" alt="button" />
              </a>
              <a href="https://daily.tsurunomundo.com.br">
                <img src="buttons/ewmOK1ghSQ-88.gif" alt="button" />
              </a>
              <a href="https://eyeorb.net">
                <img src="buttons/site_button3.gif" alt="button" />
              </a>
              <a href="https://wasongo.art">
                <img src="buttons/Button01.gif" alt="button" />
              </a>
              <a href="https://zonaplankton.net">
                <img
                  src="buttons/zonabutton3-errorinprogress.gif"
                  alt="button"
                />
              </a>
              <a href="https://rabbitnet.neocities.org">
                <img src="buttons/rabbitnetbutton.png" alt="button" />
              </a>
              <a href="https://mediastudies.online">
                <img src="buttons/msnow.gif" alt="button" />
              </a>
              <a href="https://moxiemoshpit.com">
                <img src="buttons/mm02.png" alt="button" />
              </a>
              <a href="https://unicodeangel.neocities.org">
                <img src="buttons/UnicodeAngelButton2.gif" alt="button" />
              </a>
              <a href="https://emeowly.gay">
                <img src="buttons/emeowly_alt1.gif" alt="button" />
              </a>
              <a href="https://inspiremari.nl">
                <img src="buttons/88x31-button-03.png" alt="button" />
              </a>
              <a href="https://midifreak.online">
                <img src="buttons/midi-button.gif" alt="button" />
              </a>
              <a href="https://www.itinerae.org/">
                <img src="buttons/itinerae.jpg" alt="button" />
              </a>
            </div>
          </div>
          <div className="div3-l">
            <marquee style={{ display: "flex", alignItems: 'center', backgroundColor: "var(--secondary-color)" }} className="title-line" id="marquee" scrollAmount={10}>
              {Object.entries(buttons).map(([path, src]) => (
                <img
                  style={{ marginLeft: 10 }}
                  key={path}
                  src={src}
                  alt={path.split("/").pop() ?? ""}
                />
              ))}
            </marquee>
          </div>
          {/*<div className="div4-l">4</div>*/}
          {/*<div className="div5-l">5</div>*/}
        </div>
      </main>
    </>
  );
}
export default Links;
