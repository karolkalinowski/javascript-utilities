/**
 * Represents a point in 2D space
 */
interface Point {
  x: number;
  y: number;
}

/**
 * Represents a rectangle defined by two corner points (x1,y1) and (x2,y2)
 */
interface Rect {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

// ========================
// Basic Math Operations
// ========================

/**
 * Calculates the sum of two numbers
 * @param a First number
 * @param b Second number
 * @returns Sum of a and b
 */
export const sum = (a: number, b: number): number => a + b;

/**
 * Calculates the average of numbers in an array
 * @param numbers Array of numbers
 * @returns Average value
 */
export const average = (numbers: number[]): number => {
  return numbers.reduce((a, b) => a + b, 0) / numbers.length;
};

/**
 * Rounds a number to the nearest specified increment
 * @param value Number to round
 * @param nearest Nearest increment to round to
 * @returns Rounded value
 */
export const roundNearest = (value: number, nearest: number): number =>
  Math.round(value / nearest) * nearest;

// ========================
// Linear Operations
// ========================

/**
 * Linear scaling function (map value from input range to output range)
 * @param value Input value to scale
 * @param inMin Minimum of input range
 * @param inMax Maximum of input range
 * @param outMin Minimum of output range
 * @param outMax Maximum of output range
 * @returns Scaled value
 */
export const linearScale = (
  value: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number
): number => ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;

/**
 * Normalizes a value to a 0-1 range based on min/max bounds
 * @param value Value to normalize
 * @param min Minimum boundary
 * @param max Maximum boundary
 * @returns Normalized ratio (0-1)
 */
export const normalizeRatio = (
  value: number,
  min: number,
  max: number
): number => (value - min) / (max - min);

/**
 * Linear interpolation between two values
 * @param a Start value
 * @param b End value
 * @param amount Interpolation amount (0-1)
 * @returns Interpolated value
 */
export const lerp = (a: number, b: number, amount: number): number =>
  (1 - amount) * a + amount * b;

// ========================
// Point Operations
// ========================

/**
 * Calculates the midpoint between two points
 * @param a First point or tuple
 * @param b Second point or tuple
 * @returns Midpoint as [x, y] tuple
 */
export const midpoint = (
  a: Point | [number, number],
  b: Point | [number, number]
): [number, number] => {
  const p1 = Array.isArray(a) ? { x: a[0], y: a[1] } : a;
  const p2 = Array.isArray(b) ? { x: b[0], y: b[1] } : b;
  return [(p1.x + p2.x) / 2, (p1.y + p2.y) / 2];
};

/**
 * Calculates the distance between two points
 * @param p1 First point
 * @param p2 Second point
 * @returns Euclidean distance
 */
export const distance = (p1: Point, p2: Point): number =>
  Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));

/**
 * Checks if a point is inside a rectangle
 * @param point Point to check
 * @param rect Rectangle boundary
 * @returns True if point is inside the rectangle
 */
export const isInside = (point: Point, rect: Rect): boolean =>
  point.x > rect.x1 &&
  point.x < rect.x2 &&
  point.y > rect.y1 &&
  point.y < rect.y2;

// ========================
// Angle Operations
// ========================

/**
 * Converts radians to degrees
 * @param rad Angle in radians
 * @returns Angle in degrees
 */
export const radsToDegs = (rad: number): number => (rad * 180) / Math.PI;

/**
 * Converts degrees to radians
 * @param deg Angle in degrees
 * @returns Angle in radians
 */
export const degsToRads = (deg: number): number => (deg * Math.PI) / 180.0;

/**
 * Calculates angle in radians between two points
 * @param p1 First point
 * @param p2 Second point
 * @returns Angle in radians
 */
export const radiansAngle = (p1: Point, p2: Point): number =>
  Math.atan2(p2.y - p1.y, p2.x - p1.x);

/**
 * Calculates angle in degrees between two points
 * @param p1 First point
 * @param p2 Second point
 * @returns Angle in degrees
 */
export const degreesAngle = (p1: Point, p2: Point): number =>
  radsToDegs(radiansAngle(p1, p2));

// ========================
// Rectangle Operations
// ========================

/**
 * Checks if two rectangles overlap
 * @param a First rectangle
 * @param b Second rectangle
 * @returns True if rectangles overlap
 */
export const overlaps = (a: Rect, b: Rect): boolean =>
  a.x1 < b.x2 && b.x1 < a.x2 && a.y1 < b.y2 && b.y1 < a.y2;

/**
 * Checks if rectangle A contains rectangle B
 * @param a Outer rectangle
 * @param b Inner rectangle
 * @returns True if A contains B
 */
export const contains = (a: Rect, b: Rect): boolean =>
  a.x1 <= b.x1 && a.y1 <= b.y1 && a.x2 >= b.x2 && a.y2 >= b.y2;
