export class Vector2D {
    #x;
    #y;

    constructor(x, y) {
        this.#x = x;
        this.#y = y;
    }

    get x() {
        return this.#x;
    }

    set x(newX) {
        this.#x = newX;
    }

    get y() {
        return this.#y;
    }

    set y(newY) {
        this.#y = newY;
    }

    toString() {
        return `Vector2D(${this.x}, ${this.y})`;
    }
}