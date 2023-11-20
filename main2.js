let garage = [
    { name: 'BMW', model: 'X5', productionYear: 2019, price: 33000, run: 66000, image: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/BMW/X5-2023/10452/1688992642182/front-left-side-47.jpg' },
    { name: 'Mercedes', model: 's-Class', productionYear: 2020, price: 40000, run: 45000, image: 'https://media.ed.edmunds-media.com/mercedes-benz/s-class/2021/oem/2021_mercedes-benz_s-class_sedan_s-500-4matic_fq_oem_1_1600.jpg' },
    { name: 'Toyota', model: 'Camry', productionYear: 2018, price: 25000, run: 78000, image: 'https://scene7.toyota.eu/is/image/toyotaeurope/CAM0001a_21-2:Medium-Landscape?ts=0&resMode=sharp2&op_usm=1.75,0.3,2,0' },
    { name: 'Hyundai', model: 'Accord', productionYear: 2021, price: 35000, run: 30000, image: 'https://www.mississaugahonda.com/wp-content/uploads/2019/04/4daca4fd39e1cb84dce799c3bff1a2cbx-1.jpg' },
    { name: 'Ford', model: 'Fusion', productionYear: 2017, price: 20000, run: 95000, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/2019_Ford_Fusion_Titanium_Energi%2C_front_2.29.20.jpg/1200px-2019_Ford_Fusion_Titanium_Energi%2C_front_2.29.20.jpg' }

];

function displayCars(cars) {
    const carContainer = document.getElementById('carContainer');
    carContainer.innerHTML = '';

    cars.forEach(car => {
        const carElement = document.createElement('div');
        carElement.className = 'car';

        const carImage = document.createElement('img');
        carImage.src = car.image;

        const carInfo = document.createElement('p');
        carInfo.textContent = `${car.name} ${car.model} - ${car.productionYear}`;

        carElement.appendChild(carImage);
        carElement.appendChild(carInfo);
        carContainer.appendChild(carElement);
    });
}

function applyFilters() {
    const sortOption = document.getElementById('sortOptions').value;

    switch (sortOption) {
        case 'all':
            displayAllCars();
            break;
        case 'number':
            displayNumberOfCars();
            break;
        case 'price':
            displayCarsByPrice();
            break;
        case 'year':
            displayCarsByYear();
            break;
        case 'run':
            displayCarsByRun();
            break;
        default:
            console.log('Invalid option');
    }
}

function displayAllCars() {
    console.log("All Cars:");
    garage.sort((a, b) => a.name.localeCompare(b.name));
    displayCars(garage);
}

function displayNumberOfCars() {
    console.log("Number of Cars: " + garage.length);
}

function displayCarsByPrice() {
    console.log("Cars by Price:");
    const sortedCars = garage.slice().sort((a, b) => a.price - b.price);
    displayCars(sortedCars);
}

function displayCarsByYear() {
    console.log("Cars by Year:");
    const sortedCars = garage.slice().sort((a, b) => b.productionYear - a.productionYear);
    displayCars(sortedCars);
}

function displayCarsByRun() {
    console.log("Cars by Run:");
    const sortedCars = garage.slice().sort((a, b) => a.run - b.run);
    displayCars(sortedCars);
}

function addCar() {
    const name = prompt("Enter the car name:");
    const model = prompt("Enter the car model:");
    const productionYear = parseInt(prompt("Enter the production year:"));
    const price = parseInt(prompt("Enter the price:"));
    const run = parseInt(prompt("Enter the run:"));
    const image = prompt("Enter the image link:");

    const newCar = { name, model, productionYear, price, run, image };
    garage.push(newCar);
    console.log("New car added to the garage.");
    applyFilters(); 
}

function deleteCar(index) {
    console.log("Deleting a car by index:", index);
    if (index >= 0 && index < garage.length) {
        garage.splice(index, 1);
        console.log("Car deleted from the garage.");
        applyFilters(); 
    } else {
        console.log("Invalid index. Car not deleted.");
    }
}

function promptToDeleteCar() {
    const indexToDelete = prompt("Enter the index of the car to delete:");
    deleteCar(indexToDelete);
}


displayAllCars(); 