class Car {
    static #lastId = 0;

    #id;
    #brand;
    #color;
    #maxSpeed;

    #started;
    #gear;
    #acceleratorPedalPosition;
    #brakePedalPosition;

    #liElement;

    constructor(brand, color, maxSpeed) { 
      this.#id = Car.#lastId++;
      this.#brand = brand; 
      this.#color = color; 
      this.#maxSpeed = maxSpeed;

      this.#started = false; 
      this.#gear = 0; 
      this.#acceleratorPedalPosition = 0; // ter info: position is een waarde tussen 0 en 1
      this.#brakePedalPosition = 0; // ter info: position is een waarde tussen 0 en 1
    }

    get id() { return this.#id; }
    get brand() { return this.#brand; }
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

    start() { 
        this.#started = true;
        console.log(`${this.#brand} with ID ${this.id} started.`);
    }  

    stop() {
        this.#started = stop;
        console.log(`${this.#brand} with ID ${this.id} stopped.`);
    } 

    gearUp() {        
        this.#gear++;
        console.log(`Gear up. Gear position of ${this.#brand} with ID ${this.id} is now ${this.gear}.`);
    }

    gearDown() {
        this.#gear--;
        console.log(`Gear down. Gear position of ${this.#brand} with ID ${this.id} is ${this.gear}.`);
    }

    move() {
        if (this.#started) {
            console.log(`Moving ${this.#brand} with ID ${this.id}: gear=${this.gear}, accelerator (%)=${this.#acceleratorPedalPosition * 100}, brake (%)=${this.#brakePedalPosition * 100}.`);
        } else {
            console.log(`${this.#brand} with ID ${this.id} is not started.`);
        }  
    }

    renderOnPage(listElement) {
        if (!this.#liElement) {
            listElement.insertAdjacentHTML("beforeend", `<li id="car${this.#id}"></li>`);
            this.#liElement = document.getElementById(`car${this.#id}`);
        }
        this.#liElement.innerHTML = `<span>${this.#brand} with ID ${this.#id}, color ${this.#color} and max speed ${this.#maxSpeed}.</span><button>X</button>`;
        const removeButton = document.querySelector(`#car${this.#id} button`);
        removeButton.addEventListener('click', (e) => {
            e.currentTarget.parentNode.remove();
        })
    }
  }