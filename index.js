import { Vector2D } from "./physics-engine/vector-2d.js";

import { Car } from "./car.js";
import { AutomaticCar } from "./automatic-car.js";

let honda = new Car("Honda","Groen", 145, new Vector2D(100, 100));
let audi = new Car("Audi","Grijs", 220, new Vector2D(100, 300));
let vw = new AutomaticCar("Volkswagen","Wit", 180, new Vector2D(100, 500));

// Een 2D context aanmaken om op de canvas te kunnen tekenen.
const canvas = document.getElementById("race-circuit");
const ctx = canvas.getContext("2d");

let cars = [honda, audi, vw];

setInterval(() => {
    // Canvas terug leegmaken
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Auto's tekenen
    cars.forEach((car) => {

        // game logic
        car.move(0.033); // 0.033 seconden = 33 msec (+/- 30 keer per seconde)

        // rendering. 
        car.renderOnPage(ctx);
    });
}, 33);

