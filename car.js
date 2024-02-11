import { Vector2D } from "./physics-engine/vector-2d.js";
import { calculateNewSpeed, calculateNewPosition } from "./physics-engine/engine.js";

export const MAX_ACCELERATION_IN_METERS_SEC = 27.8;

export class Car { // de naam begint met een hoofdletter (= conventie)
    static #lastId = 0;

    #id;  // De hashtag (#) geeft aan dat dit ‘private’ attributen zijn
    #brand;
    #color;
    #maxSpeed;

    #gear;
    #started = false;
    #acceleratorPedalPosition;
    #brakePedalPosition;

    #acceleration;
    #position;
    #speed;

    constructor(brand, color, maxSpeed, position) {
      this.#id = Car.#lastId++;
      this.#brand = brand;
      this.#color = color;
      this.#maxSpeed = maxSpeed;

      this.#started = false;
      this.#gear = 0;
      this.#acceleratorPedalPosition = 0;
      this.#brakePedalPosition = 0;

      this.#acceleration = new Vector2D(0,0); // nog geen versnelling
      this.#speed = new Vector2D(0,0); // nog geen snelheid
      this.#position = position;
    }

    get id() { return this.#id; }
    get brand() { return this.#brand; }
    get maxSpeed() { return this.#maxSpeed; }

    get started() { return this.#started; }
    get gear() { return this.#gear; }
    get acceleratorPedalPosition() { return this.#acceleratorPedalPosition; }
    set acceleratorPedalPosition(newValue) {
        if (newValue < 0 || newValue > 1)
            throw "Gelieve een waarde (kommagetal) in het interval [0,1] te kiezen.";
        this.#acceleratorPedalPosition = newValue;
    }
    get brakePedalPosition() { return this.#brakePedalPosition; }
    set brakePedalPosition(newValue) {
        if (newValue < 0 || newValue > 1)
            throw "Gelieve een waarde (kommagetal) in het interval [0,1] te kiezen.";
        this.#brakePedalPosition = newValue;
    }

    get acceleration() { return this.#acceleration; }
    get speed() { return this.#speed; }
    get position() { return this.#position; }

    start() {         
        this.#started = true;
    }  

    stop() {        
        this.#started = false;
    }

    gearUp() {        
        this.#gear++;
        if (this.#gear > 5) this.#gear = 5;
    }

    gearDown() {
        this.#gear--;
        if (this.#gear < 0) this.#gear = 0;
    }

    move(timeSpanInSec) {
        //console.log(this.#speed);
        if (this.#started) {
            // console.log(this.#position.x);
            // De huidige versnelling (acceleration) is afhankelijk van pedaalposities. 
            // Als het rempedaal harder wordt ingedrukt dan is de versnelling negatief (= vertraging).
            // Bemerk dat de versnelling enkel in de X dimensie van toepassing is bij ons.
            this.#acceleration = new Vector2D(
                MAX_ACCELERATION_IN_METERS_SEC * (this.#acceleratorPedalPosition - this.#brakePedalPosition),
                0);

            // Berekenen van nieuwe snelheid op basis van de versnelling of vertraging
            // Er wordt van uitgegaan dat elke gear in 20% extra snelheid zal resulteren.
            // Zo zal bij het bereiken van gear 5 100% van de maxspeed kunnen bereikt worden.
            // Opgelet: maxSpeed is in km/u -> we moeten het dus eerst omzetten naar m/s.
            const maxSpeedInMetersPerSecond = (this.#maxSpeed * 1000) / 3600;
            this.#speed = calculateNewSpeed(this.#speed, this.#acceleration, timeSpanInSec);
            this.#speed.x = Math.min(maxSpeedInMetersPerSecond * (this.#gear / 5.0), this.#speed.x); // aftoppen op max speed afh. van gear ...

            // De nieuwe positie: vorige positie + afstand die afgelegd werd over de timespan.
            this.#position = calculateNewPosition(this.#position, this.#speed, timeSpanInSec);
        } else {
            // Als de auto gestopt wordt tijdens het rijden: dan komt die onmiddellijk tot stilstand.
            this.#acceleration = new Vector2D(0,0)
            this.#speed = new Vector2D(0,0);
        }
    }

    renderOnPage(ctx) {
        ctx.beginPath();
        ctx.moveTo(this.#position.x, this.#position.y);
        ctx.lineTo(this.#position.x + 20, this.#position.y);
        ctx.lineTo(this.#position.x + 20, this.#position.y + 20);
        ctx.lineTo(this.#position.x, this.#position.y + 20);
        ctx.lineTo(this.#position.x, this.#position.y);

        switch (this.#color.toLowerCase()) {
            case "groen":
                ctx.strokeStyle = "green";
                break;
            case "grijs":
                ctx.strokeStyle = "gray";
                break;
            case "wit":
                ctx.strokeStyle = "white";
                break;
            default:
                ctx.strokeStyle = "black";
        }

        ctx.stroke();
    }
  }