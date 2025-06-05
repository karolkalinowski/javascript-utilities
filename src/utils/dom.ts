import { Point, Rect, midpoint, overlaps, contains, rectsEqual } from "./math";

/**
 * Converts DOMRect to Rect interface
 */
const domRectToRect = (rect: DOMRect): Rect => ({
  left: rect.left,
  top: rect.top,
  right: rect.right,
  bottom: rect.bottom,
});

export class DomElement {
  private ele: HTMLElement;

  constructor(element: HTMLElement | string) {
    if (typeof element === "string") {
      const el = document.querySelector<HTMLElement>(element);
      if (!el) throw new Error(`Element not found: ${element}`);
      this.ele = el;
    } else {
      this.ele = element;
    }
  }

  hasOverflow() {
    return (
      this.ele.scrollHeight > this.ele.clientHeight ||
      this.ele.scrollWidth > this.ele.clientWidth
    );
  }

  hasCssOverflow() {
    return ["auto", "scroll"].includes(
      window.getComputedStyle(this.ele).overflow
    );
  }

  get rect(): Rect {
    return domRectToRect(this.ele.getBoundingClientRect());
  }

  intersect(other: DomElement) {
    return overlaps(this.rect, other.rect);
  }

  isContainedIn(container: DomElement) {
    return contains(container.rect, this.rect);
  }

  compareRects(other: DomElement) {
    return rectsEqual(this.rect, other.rect);
  }

  getCenter(): Point {
    const rect = this.rect;
    const [x, y] = midpoint(
      { x: rect.left, y: rect.top },
      { x: rect.right, y: rect.bottom }
    );
    return { x, y };
  }
}

export const getDistanceToBottom = (): number =>
  document.body.scrollHeight - window.innerHeight - window.scrollY;
