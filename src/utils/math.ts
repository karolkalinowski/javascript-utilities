/**
 * Represents a point in 2D space
 */
export interface Point {
  x: number;
  y: number;
}

/**
 * Unified rectangle representation
 */
export interface Rect {
  left: number;
  top: number;
  right: number;
  bottom: number;
}

// ========================
// Basic Math Operations
// ========================

export const sum = (a: number, b: number): number => a + b;

export const average = (numbers: number[]): number => {
  return numbers.reduce((a, b) => a + b, 0) / numbers.length;
};

export const roundNearest = (value: number, nearest: number): number =>
  Math.round(value / nearest) * nearest;

// ========================
// Linear Operations
// ========================

export const linearScale = (
  value: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number
): number => ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;

export const normalizeRatio = (
  value: number,
  min: number,
  max: number
): number => (value - min) / (max - min);

export const lerp = (a: number, b: number, amount: number): number =>
  (1 - amount) * a + amount * b;

// ========================
// Point Operations
// ========================

export const midpoint = (
  a: Point | [number, number],
  b: Point | [number, number]
): [number, number] => {
  const p1 = Array.isArray(a) ? { x: a[0], y: a[1] } : a;
  const p2 = Array.isArray(b) ? { x: b[0], y: b[1] } : b;
  return [(p1.x + p2.x) / 2, (p1.y + p2.y) / 2];
};

export const distance = (p1: Point, p2: Point): number =>
  Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));

// ========================
// Rectangle Operations
// ========================

/**
 * Creates Rect from corner points
 */
export const createRect = (
  x1: number,
  y1: number,
  x2: number,
  y2: number
): Rect => ({
  left: Math.min(x1, x2),
  top: Math.min(y1, y2),
  right: Math.max(x1, x2),
  bottom: Math.max(y1, y2),
});

/**
 * Checks if two rectangles overlap
 */
export const overlaps = (a: Rect, b: Rect): boolean =>
  a.left < b.right && b.left < a.right && a.top < b.bottom && b.top < a.bottom;

/**
 * Checks if rectangle A contains rectangle B
 */
export const contains = (a: Rect, b: Rect): boolean =>
  a.left <= b.left &&
  a.top <= b.top &&
  a.right >= b.right &&
  a.bottom >= b.bottom;

/**
 * Checks if point is inside rectangle
 */
export const isInside = (point: Point, rect: Rect): boolean =>
  point.x > rect.left &&
  point.x < rect.right &&
  point.y > rect.top &&
  point.y < rect.bottom;

/**
 * Compares two rectangles for equality
 */
export const rectsEqual = (a: Rect, b: Rect): boolean =>
  a.left === b.left &&
  a.top === b.top &&
  a.right === b.right &&
  a.bottom === b.bottom;

// ========================
// Angle Operations
// ========================

export const radsToDegs = (rad: number): number => (rad * 180) / Math.PI;

export const degsToRads = (deg: number): number => (deg * Math.PI) / 180.0;

export const radiansAngle = (p1: Point, p2: Point): number =>
  Math.atan2(p2.y - p1.y, p2.x - p1.x);

export const degreesAngle = (p1: Point, p2: Point): number =>
  radsToDegs(radiansAngle(p1, p2));
