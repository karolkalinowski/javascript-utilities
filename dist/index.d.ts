/**
 * Represents a point in 2D space
 */
interface Point {
    x: number;
    y: number;
}
/**
 * Unified rectangle representation
 */
interface Rect {
    left: number;
    top: number;
    right: number;
    bottom: number;
}
declare const sum: (a: number, b: number) => number;
declare const average: (numbers: number[]) => number;
declare const roundNearest: (value: number, nearest: number) => number;
declare const linearScale: (value: number, inMin: number, inMax: number, outMin: number, outMax: number) => number;
declare const normalizeRatio: (value: number, min: number, max: number) => number;
declare const lerp: (a: number, b: number, amount: number) => number;
declare const midpoint: (a: Point | [number, number], b: Point | [number, number]) => [number, number];
declare const distance: (p1: Point, p2: Point) => number;
/**
 * Creates Rect from corner points
 */
declare const createRect: (x1: number, y1: number, x2: number, y2: number) => Rect;
/**
 * Checks if two rectangles overlap
 */
declare const overlaps: (a: Rect, b: Rect) => boolean;
/**
 * Checks if rectangle A contains rectangle B
 */
declare const contains: (a: Rect, b: Rect) => boolean;
/**
 * Checks if point is inside rectangle
 */
declare const isInside: (point: Point, rect: Rect) => boolean;
/**
 * Compares two rectangles for equality
 */
declare const rectsEqual: (a: Rect, b: Rect) => boolean;
declare const radsToDegs: (rad: number) => number;
declare const degsToRads: (deg: number) => number;
declare const radiansAngle: (p1: Point, p2: Point) => number;
declare const degreesAngle: (p1: Point, p2: Point) => number;

declare class DomElement {
    private ele;
    constructor(element: HTMLElement | string);
    hasOverflow(): boolean;
    hasCssOverflow(): boolean;
    get rect(): Rect;
    intersect(other: DomElement): boolean;
    isContainedIn(container: DomElement): boolean;
    compareRects(other: DomElement): boolean;
    getCenter(): Point;
}
declare const getDistanceToBottom: () => number;

export { DomElement, type Point, type Rect, average, contains, createRect, degreesAngle, degsToRads, distance, getDistanceToBottom, isInside, lerp, linearScale, midpoint, normalizeRatio, overlaps, radiansAngle, radsToDegs, rectsEqual, roundNearest, sum };
