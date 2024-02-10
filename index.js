let honda = new Car("Honda", "Groen", 145); // Het ‘new’ keyword maakt een object aan van class
let audi = new Car("Audi", "Grijs", 220);
let vw = new AutomaticCar("Volkswagen", "Wit", 180);

let cars = [honda, audi, vw];
let carsList = document.getElementById("cars");
cars.forEach((car) => {
    car.renderOnPage(carsList);
});

const form = document.querySelector("form");
const brand = document.getElementById("brand");
const color = document.getElementById("color");
const maxSpeed = document.getElementById("maxSpeed");
form.addEventListener("submit", (e) => {
    e.preventDefault();

    let newCar = new Car(brand.value, color.value, parseFloat(maxSpeed.value));
    newCar.renderOnPage(carsList);
    cars.push(newCar);
})