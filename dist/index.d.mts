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
/**
 * Calculates the sum of two numbers
 * @param a First number
 * @param b Second number
 * @returns Sum of a and b
 */
declare const sum: (a: number, b: number) => number;
/**
 * Calculates the average of numbers in an array
 * @param numbers Array of numbers
 * @returns Average value
 */
declare const average: (numbers: number[]) => number;
/**
 * Rounds a number to the nearest specified increment
 * @param value Number to round
 * @param nearest Nearest increment to round to
 * @returns Rounded value
 */
declare const roundNearest: (value: number, nearest: number) => number;
/**
 * Linear scaling function (map value from input range to output range)
 * @param value Input value to scale
 * @param inMin Minimum of input range
 * @param inMax Maximum of input range
 * @param outMin Minimum of output range
 * @param outMax Maximum of output range
 * @returns Scaled value
 */
declare const linearScale: (value: number, inMin: number, inMax: number, outMin: number, outMax: number) => number;
/**
 * Normalizes a value to a 0-1 range based on min/max bounds
 * @param value Value to normalize
 * @param min Minimum boundary
 * @param max Maximum boundary
 * @returns Normalized ratio (0-1)
 */
declare const normalizeRatio: (value: number, min: number, max: number) => number;
/**
 * Linear interpolation between two values
 * @param a Start value
 * @param b End value
 * @param amount Interpolation amount (0-1)
 * @returns Interpolated value
 */
declare const lerp: (a: number, b: number, amount: number) => number;
/**
 * Calculates the midpoint between two points
 * @param a First point or tuple
 * @param b Second point or tuple
 * @returns Midpoint as [x, y] tuple
 */
declare const midpoint: (a: Point | [number, number], b: Point | [number, number]) => [number, number];
/**
 * Calculates the distance between two points
 * @param p1 First point
 * @param p2 Second point
 * @returns Euclidean distance
 */
declare const distance: (p1: Point, p2: Point) => number;
/**
 * Checks if a point is inside a rectangle
 * @param point Point to check
 * @param rect Rectangle boundary
 * @returns True if point is inside the rectangle
 */
declare const isInside: (point: Point, rect: Rect) => boolean;
/**
 * Converts radians to degrees
 * @param rad Angle in radians
 * @returns Angle in degrees
 */
declare const radsToDegs: (rad: number) => number;
/**
 * Converts degrees to radians
 * @param deg Angle in degrees
 * @returns Angle in radians
 */
declare const degsToRads: (deg: number) => number;
/**
 * Calculates angle in radians between two points
 * @param p1 First point
 * @param p2 Second point
 * @returns Angle in radians
 */
declare const radiansAngle: (p1: Point, p2: Point) => number;
/**
 * Calculates angle in degrees between two points
 * @param p1 First point
 * @param p2 Second point
 * @returns Angle in degrees
 */
declare const degreesAngle: (p1: Point, p2: Point) => number;
/**
 * Checks if two rectangles overlap
 * @param a First rectangle
 * @param b Second rectangle
 * @returns True if rectangles overlap
 */
declare const overlaps: (a: Rect, b: Rect) => boolean;
/**
 * Checks if rectangle A contains rectangle B
 * @param a Outer rectangle
 * @param b Inner rectangle
 * @returns True if A contains B
 */
declare const contains: (a: Rect, b: Rect) => boolean;

export { average, contains, degreesAngle, degsToRads, distance, isInside, lerp, linearScale, midpoint, normalizeRatio, overlaps, radiansAngle, radsToDegs, roundNearest, sum };
