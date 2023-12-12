let amLate = false;
let cuaca = 'hujan'

if (amLate) {
    console.log('Bawa Bento')
}
else {
    console.log('Beli di Konbini')
}
// if (cuaca === 'hujan') {
//     console.log('masukkan payung ke tas');
// } else if (cuaca === 'dingin') {
//     console.log('masukkan jaket ke tas');
// }
switch (cuaca) {
    case 'hujan':
        console.log('masukkan payung ke tas');
        break;
    case 'dingin':
        console.log('masukkan jaket ke tas');
}

console.log('berangkat ke kantor');

const name = 'Dicoding';
const language = 'JavaScript';

console.log(`Hello $name. Welcome to $language!`);

const oneTwoThree = [1, 2, 3];
const sevenEightNine = [7, 8, 9];

const result = [4, 5, 6, ...oneTwoThree, ...sevenEightNine];

console.log(result);

const artistsAndSongs = {
    "Keyakizaka46": ["Silent Majority"],
    "Blackpink": ["How You Like That", "Ice Cream"],
    "JKT48": ["Rapsodi", "Heavy Rotation"],
    "Twice": ["What is Love?"],
}

artistsAndSongs["Babymetal"] = ["Gimme chocolate"];
delete artistsAndSongs["Keyakizaka46"];
artistsAndSongs["Blackpink"].push("Rose - Gone");

console.log(artistsAndSongs);

function minMax(arrayOfNumbers) {
    let currentMin = arrayOfNumbers[0];
    let currentMax = arrayOfNumbers[0];
    for (value of arrayOfNumbers) {
        if (value < currentMin) {
            currentMin = value;
        } else if (value > currentMax) {
            currentMax = value;
        }
    }

    console.log(`currentMin: ${currentMin}, currentMax: ${currentMax}`);
}

minMax([8, -6, 0, 9, 40, 2, 23, 50, 2, -3, -15, 15, -23, 71]);

class Car { }
const car = new Car();
console.log(typeof Car);

try {
    const arr = [1, 2, 3, 4];
    for (let i = 0; i <= 4; i++) {
        console.log(arr[i]);
    }
} catch(e) {
    console.log("Out of bounds");
}

class MyCustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "MyError";
    }
}

try {
    throw new MyCustomError("This is an error");
} catch (e) {
    console.log(e.message);
}