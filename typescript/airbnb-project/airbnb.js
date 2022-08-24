// put all code back in one file, because import/export doesn't work
// Tuples challenge
// 1. Add an array to the variable of currentLocation I have added. This array
// must have your current location, time, and degrees celcius of your location
// NOTE: make sure to make this a Tuple, to only allow those types in that
// structure.
// 2. Add this visually to a footer on your site
const propertyContainer = document.querySelector('.properties');
const footer = document.querySelector('.footer');
const returningUserDisplay = document.querySelector('#returning-user');
const userNameDisplay = document.querySelector('#user');
const reviewTotalDisplay = document.querySelector('#reviews');
function showReviewTotal(value, reviewer, isLoyalty) {
    const iconDisplay = isLoyalty ? '⭐' : '';
    reviewTotalDisplay.innerHTML = 'review total ' + value.toString() + '| last reviewed by ' + reviewer + ' ' + iconDisplay;
}
function populateUser(isReturning, userName) {
    if (isReturning) {
        returningUserDisplay.innerHTML = 'back';
    }
    userNameDisplay.innerHTML = userName;
}
let isOpen;
// Reviews
const reviews = [
    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: true,
        date: '01-04-2021'
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: false,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: true,
        date: '27-03-2021'
    },
];
// User
// const you: {
//     firstName: string;
//     lastName: string;
//     isReturning: boolean;
//     age: number;
//     stayedAt: string[]
// } = {
//     firstName: 'Bobby',
//     lastName: 'Brown',
//     isReturning: true,
//     age: 35,
//     stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow']
// }
const ADMIN = 'admin';
const READ_ONLY = 'read-only';
var Permissions;
(function (Permissions) {
    Permissions[Permissions["ADMIN"] = 0] = "ADMIN";
    Permissions[Permissions["READ_ONLY"] = 1] = "READ_ONLY";
})(Permissions || (Permissions = {}));
const you = {
    firstName: 'Bobby',
    lastName: 'Brown',
    permissions: Permissions[ADMIN],
    isReturning: true,
    age: 35,
    stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow']
};
if (you.permissions === Permissions[ADMIN]) {
    //show
    console.log("The custom-type enum for Admin works!");
}
else {
    console.log("You are not an administrator.");
}
// Array of Properties
const properties = [
    {
        image: 'images/colombia-property.jpg',
        title: 'Colombian Shack',
        price: 45,
        location: {
            firstLine: 'shack 37',
            city: 'Bogota',
            code: 45632,
            country: 'Colombia'
        },
        contact: [+112343823978921, 'marywinkle@gmail.com'],
        isAvailable: true
    },
    {
        image: 'images/poland-property.jpg',
        title: 'Polish Cottage',
        price: 34,
        location: {
            firstLine: 'no 23',
            city: 'Gdansk',
            code: 343903,
            country: 'Poland'
        },
        contact: [+1298239028490830, 'garydavis@hotmail.com'],
        isAvailable: false
    },
    {
        image: 'images/london-property.jpg',
        title: 'London Flat',
        price: 23,
        location: {
            firstLine: 'flat 15',
            city: 'London',
            code: 35433,
            country: 'United Kingdom',
        },
        contact: [+34829374892553, 'andyluger@aol.com'],
        isAvailable: true
    }
];
// Functions
showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser);
populateUser(you.isReturning, you.firstName);
// Add the properties
for (let i = 0; i < properties.length; i++) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = properties[i].title;
    const image = document.createElement('img');
    image.setAttribute('src', properties[i].image);
    card.appendChild(image);
    propertyContainer.appendChild(card);
}
// use your location, your current time, and the current temperature of your
//  location
// declare and assign the Tuple
// change the innerHTML in order to be able to handle the Tuple and simply concatenate values from the array as strings
let currentLocation = ['Amsterdam', '20:35', 23];
footer.innerHTML = currentLocation[0] + ' ' + currentLocation[1] + ' ' + currentLocation[2];
//# sourceMappingURL=airbnb.js.map