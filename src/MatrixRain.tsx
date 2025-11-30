import { useRef, useEffect } from "react";

const katakana =
  "アカサタナハマヤラワイキシチニヒミリウクスツヌフムユルエケセテネヘメレオコソトノホモヨロヲン";

const latin = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const digits = "0123456789";

// Combined alphabet
export const alphabet = katakana + latin + digits;

// Default props (fully typed)
export const defaultProps: Required<MatrixRainProps> = {
  color: "#59c5bd",

  gradient: [],
  uniformGradient: [],
  gradientOrientation: "horizontal",

  backgroundColor: "#292929",

  alphabet,
  font: "1.0rem monospace",

  spaceX: 1.0,
  spaceY: 1.0,

  density: 0.02,
  delay: 50,
  dryRate: 1.0,
  fadeRate: 0.1,

  resolutionX: 0,
  resolutionY: 0,

  zIndex: -1,
};

// Default inline style for canvas
export const defaultStyle: React.CSSProperties = {
  height: "100%",
  width: "100%",
  display: "block",
  verticalAlign: "top",
};
export interface MatrixRainProps {
  alphabet?: string;
  font?: string;
  spaceX?: number;
  spaceY?: number;
  density?: number;
  delay?: number;
  dryRate?: number;
  fadeRate?: number;
  color?: string;
  gradient?: Array<{ offset: number; color: string }>;
  uniformGradient?: string[];
  gradientOrientation?: "horizontal" | "vertical";
  backgroundColor?: string;
  resolutionX?: number;
  resolutionY?: number;
  zIndex?: number;
}

interface RainDrop {
  x: number;
  y: number;
}

interface MatrixState {
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  rainDrops: Set<RainDrop>;
  animationId: number;

  // computed
  alphabetArray: string[];
  font: string;
  spaceX: number;
  spaceY: number;
  density: number;
  delay: number;
  dryRate: number;
  fadeRate: number;

  colorGradient: Array<{ offset: number; color: string }>;
  gradientOrientation: "horizontal" | "vertical";
  backgroundStyle: string;

  containerWidth: number;
  containerHeight: number;

  cellWidth: number;
  cellHeight: number;

  gridCols: number;
  gridRows: number;

  scaleX: number;
  scaleY: number;

  foregroundStyle: CanvasGradient | string;
}

/**
 * Matrix Rain Canvas Animation (TypeScript)
 */
export default function MatrixRain(props: MatrixRainProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const stateRef = useRef<MatrixState | null>(null);

  const mergedProps = { ...defaultProps, ...props };
  const style = { ...defaultStyle, zIndex: mergedProps.zIndex };

  useEffect(() => {
    if (stateRef.current) {
      updateState(mergedProps, stateRef.current);
    } else if (canvasRef.current) {
      stateRef.current = initializeState(mergedProps, canvasRef.current);
    }
  }, [props]);

  useEffect(() => {
    if (stateRef.current) fillBackground(stateRef.current, false);
  }, [props.resolutionX, props.resolutionY]);

  useEffect(() => {
    if (stateRef.current) return observeContainerResize(stateRef.current);
  }, []);

  useEffect(() => {
    if (stateRef.current) return createAnimationLoop(stateRef.current);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={style}
      width={props.resolutionX ?? window.screen.width}
      height={props.resolutionY ?? window.screen.height}
    />
  );
}

/* -------------------------------------- */
/* INIT & UPDATE                           */
/* -------------------------------------- */

function initializeState(props: MatrixRainProps, canvas: HTMLCanvasElement): MatrixState {
  const context = canvas.getContext("2d");
  if (!context) throw new Error("CanvasRenderingContext2D not supported");

  const state: MatrixState = {
    canvas,
    context,
    rainDrops: new Set(),
    animationId: 0,

    alphabetArray: [],
    font: "",
    spaceX: 1,
    spaceY: 1,
    density: 1,
    delay: 0,
    dryRate: 0,
    fadeRate: 0,

    colorGradient: [],
    gradientOrientation: "vertical",
    backgroundStyle: "black",

    containerWidth: 0,
    containerHeight: 0,

    cellWidth: 0,
    cellHeight: 0,

    gridCols: 0,
    gridRows: 0,

    scaleX: 1,
    scaleY: 1,

    foregroundStyle: "green",
  };

  updateContainerSize(state);
  updateState(props, state);

  return state;
}

function updateState(props: MatrixRainProps, state: MatrixState) {
  state.alphabetArray = Array.from(props.alphabet || "");
  state.font = props.font!;
  state.spaceX = props.spaceX!;
  state.spaceY = props.spaceY!;
  state.density = props.density!;
  state.delay = props.delay!;
  state.dryRate = props.dryRate!;
  state.fadeRate = props.fadeRate!;
  state.colorGradient = getColorGradient(props);
  state.gradientOrientation = props.gradientOrientation!;
  state.backgroundStyle = props.backgroundColor!;

  updateForegroundStyle(state);
  updateCellSize(state);
  updateGridSize(state);
  updateScale(state);
}

/* -------------------------------------- */
/* LAYOUT / RESIZING                       */
/* -------------------------------------- */

function observeContainerResize(state: MatrixState) {
  const observer = new ResizeObserver((entries) => {
    updateContainerSize(state, entries[0].contentRect);
    updateForegroundStyle(state);
    updateGridSize(state);
    updateScale(state);
  });

  observer.observe(state.canvas);
  return () => observer.disconnect();
}

function updateContainerSize(state: MatrixState, size?: DOMRectReadOnly) {
  const rect = size ?? state.canvas.getBoundingClientRect();
  state.containerWidth = rect.width;
  state.containerHeight = rect.height;
}

function updateCellSize(state: MatrixState) {
  state.context.font = state.font;
  const metrics = state.context.measureText("j");
  const h = metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent;

  state.cellWidth = state.spaceX * h;
  state.cellHeight = state.spaceY * h;
}

function updateGridSize(state: MatrixState) {
  state.gridCols = Math.round(state.containerWidth / state.cellWidth);
  state.gridRows = Math.round(state.containerHeight / state.cellHeight);
}

function updateScale(state: MatrixState) {
  state.scaleX = state.canvas.width / (state.cellWidth * state.gridCols);
  state.scaleY = state.canvas.height / (state.cellHeight * state.gridRows);
}

/* -------------------------------------- */
/* ANIMATION LOOP                          */
/* -------------------------------------- */

function createAnimationLoop(state: MatrixState) {
  const start = performance.now();
  updateAnimationLoop(state, start, start);
  return () => cancelAnimationFrame(state.animationId);
}

function updateAnimationLoop(state: MatrixState, time: number, nextUpdate: number) {
  if (time > nextUpdate) {
    updateRainDrops(state);
    animateNextFrame(state);
  }

  const delta = time - nextUpdate;
  const adjust = Math.ceil(delta / state.delay);
  nextUpdate += state.delay * adjust;

  state.animationId = requestAnimationFrame((t) =>
    updateAnimationLoop(state, t, nextUpdate)
  );
}

function updateRainDrops(state: MatrixState) {
  const target = state.density * state.gridCols * state.gridRows;
  const missing = target - state.rainDrops.size;
  const dryProb = state.dryRate / state.gridRows;

  for (let i = 0; i < missing; i++) {
    if (Math.random() < state.density) {
      state.rainDrops.add({ x: randomRange(state.gridCols), y: -1 });
    }
  }

  for (const drop of Array.from(state.rainDrops)) {
    drop.y++;
    if (drop.x >= state.gridCols || drop.y >= state.gridRows || Math.random() < dryProb) {
      state.rainDrops.delete(drop);
    }
  }
}

function animateNextFrame(state: MatrixState) {
  fillBackground(state, true);

  state.context.scale(state.scaleX, state.scaleY);
  state.context.fillStyle = state.foregroundStyle;
  state.context.font = state.font;
  state.context.textAlign = "center";
  state.context.textBaseline = "middle";

  for (const drop of state.rainDrops) {
    const char = pickRandom(state.alphabetArray);
    const x = (drop.x + 0.5) * state.cellWidth;
    const y = (drop.y + 0.5) * state.cellHeight;
    state.context.fillText(char, x, y);
  }

  state.context.resetTransform();
}

/* -------------------------------------- */
/* COLORS / GRADIENTS                      */
/* -------------------------------------- */

function fillBackground(state: MatrixState, useAlpha: boolean) {
  state.context.globalAlpha = useAlpha ? state.fadeRate : 1;
  state.context.fillStyle = state.backgroundStyle;
  state.context.fillRect(0, 0, state.canvas.width, state.canvas.height);
  state.context.globalAlpha = 1;
}


function getColorGradient(
  props: MatrixRainProps,
): MatrixState["colorGradient"] {
  if (props.gradient && props.gradient.length > 0) {
    return structuredClone(props.gradient);
  }

  if (!props.uniformGradient || props.uniformGradient.length === 0) {
    return [{ offset: 0, color: props.color! }];
  }

  const base = 1 / Math.max(1, props.uniformGradient.length - 1);

  return props.uniformGradient.map((c, i) => ({
    offset: i * base,
    color: c,
  }));
}


function updateForegroundStyle(state: MatrixState) {
  const endX = state.gradientOrientation === "horizontal" ? state.containerWidth : 0;
  const endY = state.gradientOrientation === "vertical" ? state.containerHeight : 0;

  const gradient = state.context.createLinearGradient(0, 0, endX, endY);
  for (const { offset, color } of state.colorGradient) {
    gradient.addColorStop(offset, color);
  }

  state.foregroundStyle = gradient;
}

/* -------------------------------------- */
/* UTIL                                   */
/* -------------------------------------- */

function randomRange(limit: number) {
  return Math.floor(Math.random() * limit);
}

function pickRandom<T>(arr: T[]): T {
  return arr[randomRange(arr.length)];
}
