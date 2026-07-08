import { useState, useRef, useEffect } from "react";

const PALETTE = [
  "#28716c",
  "#184642",
  "#59c5bd",
  "#292929",
  "#141414",
  "#3d3d3d",
  "#e63946",
  "#f4a261",
  "#e9c46a",
  "#2a9d8f",
  "#264653",
  "#ffffff",
];

type Target = "primary" | "secondary";

function buildBgPattern(color: string) {
  const hex = color.replace("#", "%23");
  const svg = `%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E %3Cpolygon points='0,25 0,75 75,0 25,0' style='fill:${hex};' /%3E %3Cpolygon points='0,125 0,175 175,0 125,0' style='fill:${hex};' /%3E %3Cpolygon points='25,200 75,200 200,75 200,25' style='fill:${hex};' /%3E %3Cpolygon points='125,200 175,200 200,175 200,125' style='fill:${hex};' /%3E %3C/svg%3E`;
  return `url("data:image/svg+xml,${svg}")`;
}
function darken(hex: string, factor: number) {
  const num = parseInt(hex.replace("#", ""), 16);
  const r = Math.round(((num >> 16) & 0xff) * factor);
  const g = Math.round(((num >> 8) & 0xff) * factor);
  const b = Math.round((num & 0xff) * factor);
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
}
function ColorPicker() {
  const [open, setOpen] = useState(false);
  const [primary, setPrimary] = useState("#28716c");
  const [secondary, setSecondary] = useState("#292929");
  const [target, setTarget] = useState<Target>("primary");
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.documentElement.style.setProperty("--primary-color", primary);
    document.documentElement.style.setProperty(
      "--bg-pattern",
      buildBgPattern(darken(primary, 0.61)),
    );
    document.documentElement.style.setProperty("--secondary-color", secondary);
  }, [primary, secondary]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    if (open) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  function pickColor(color: string) {
    if (target === "primary") setPrimary(color);
    else setSecondary(color);
  }

  return (
    <div className="color-picker-wrapper">
      <img
        style={{ width: "100%", height: "auto", cursor: "pointer" }}
        src="/customize.gif"
        alt="Customize the site"
        onClick={() => setOpen((o) => !o)}
      />
      {open && (
        <div className="color-popup" ref={popupRef}>
          <div className="title-line">
            <strong>customize</strong>
          </div>
          <div className="color-popup-body">
            <div className="color-circles">
              <button
                type="button"
                className={`color-circle ${target === "primary" ? "active" : ""}`}
                style={{ backgroundColor: primary }}
                onClick={() => setTarget("primary")}
                title="Primary color"
              />
              <button
                type="button"
                className={`color-circle ${target === "secondary" ? "active" : ""}`}
                style={{ backgroundColor: secondary }}
                onClick={() => setTarget("secondary")}
                title="Secondary color"
              />
            </div>
            <div className="color-labels">
              <span>primary</span>
              <span>secondary</span>
            </div>

            <div className="palette-grid">
              {PALETTE.map((c) => (
                <button
                  key={c}
                  type="button"
                  className="palette-swatch"
                  style={{ backgroundColor: c }}
                  onClick={() => pickColor(c)}
                  aria-label={c}
                />
              ))}
              <label className="palette-swatch custom-swatch">
                <input
                  type="color"
                  value={target === "primary" ? primary : secondary}
                  onChange={(e) => pickColor(e.target.value)}
                />
                +
              </label>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ColorPicker;
