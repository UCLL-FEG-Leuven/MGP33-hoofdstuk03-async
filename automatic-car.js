import { Car } from "./car.js";

export class AutomaticCar extends Car { // overerven gebeurt via het ‘extends’ keyword
    #gearMode; // ter info: mogelijke waarden zijn Park, Reverse, Neutral, Drive, ...
    constructor(brand, color, fuelType, position) {
      super(brand, color, fuelType, position); // verplicht: super roept de constructor van parent class Car aan.
      this.#gearMode = "Park";
    }
    get gearMode() { // Properties beginnen ook met een kleine letter (= conventie)
        return this.#gearMode; 
    } 
    set gearMode(newGearMode) { // Een ‘property setter’ voor schrijftoegang.
        this.#gearMode = newGearMode; 
    } 
    move(timeSpanInSec) { 
        // Iets intelligentere schakelbak ... -> als de huidige horizontale snelheid in de buurt komt van de 80% van de maximale snelheid van de huidige gear -> schakelen!
        // Opgelet: maxSpeed is in km/u -> omzetten naar m/s is nodig.
        if (this.speed.x >= (this.gear / 5.0) * ((this.maxSpeed * 1000) / 3600) * 0.8) {
            this.gearUp();
        }
        super.move(timeSpanInSec);
    } 
  } 