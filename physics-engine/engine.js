import { Vector2D } from "./vector-2d.js";

export function calculateNewSpeed(currentSpeedVector, accelerationVector, timeSpanInSec) {
    return new Vector2D(
        currentSpeedVector.x + accelerationVector.x * timeSpanInSec,
        currentSpeedVector.y + accelerationVector.y * timeSpanInSec
    );
} 

export function calculateNewPosition(currentPosition, speedVector, timeSpanInSec) {
    return new Vector2D(
        currentPosition.x + speedVector.x * timeSpanInSec,
        currentPosition.y + speedVector.y * timeSpanInSec
    );
}