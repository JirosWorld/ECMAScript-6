// put all code back in one file, because import/export doesn't work
// END INTERFACES
// START UTILS
const reviewTotalDisplay = document.querySelector('#reviews');
const returningUserDisplay = document.querySelector('#returning-user');
const userNameDisplay = document.querySelector('#user');
function showReviewTotal(value, reviewer, isLoyalty) {
    const iconDisplay = LoyaltyUser.GOLD_USER ? '⭐' : '';
    reviewTotalDisplay.innerHTML = value.toString() + ' review' + makeMultiple(value) + ' | last reviewed by ' + reviewer + ' ' + iconDisplay;
}
function populateUser(isReturning, userName) {
    if (isReturning == true) {
        returningUserDisplay.innerHTML = 'back';
    }
    userNameDisplay.innerHTML = userName;
}
function showDetails(value, element, price) {
    if (value) {
        const priceDisplay = document.createElement('div');
        priceDisplay.innerHTML = price.toString() + '/night';
        element.appendChild(priceDisplay);
    }
}
function makeMultiple(value) {
    if (value > 1 || value == 0) {
        return 's';
    }
    else
        return '';
}
// this is an interface where the result is another array, and coincidentally the same array
function getTopTwoReviews(reviews) {
    const sortedReviews = reviews.sort((a, b) => b.stars - a.stars);
    return sortedReviews.slice(0, 2);
}
// END UTILS
// START ENUMS
var Permissions;
(function (Permissions) {
    Permissions["ADMIN"] = "ADMIN";
    Permissions["READ_ONLY"] = "READ_ONLY";
})(Permissions || (Permissions = {}));
var LoyaltyUser;
(function (LoyaltyUser) {
    LoyaltyUser["GOLD_USER"] = "GOLD_USER";
    LoyaltyUser["SILVER_USER"] = "SILVER_USER";
    LoyaltyUser["BRONZE_USER"] = "BRONZE_USER";
})(LoyaltyUser || (LoyaltyUser = {}));
// END TYPES
const propertyContainer = document.querySelector('.properties');
const reviewContainer = document.querySelector('.reviews');
const container = document.querySelector('.container');
const button = document.querySelector('button');
const footer = document.querySelector('.footer');
let isLoggedIn;
// Reviews
// example of nice way to use an interface instead of many Keys
const reviews = [
    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: LoyaltyUser.GOLD_USER,
        date: '01-04-2021'
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: LoyaltyUser.BRONZE_USER,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: LoyaltyUser.SILVER_USER,
        date: '27-03-2021',
    },
];
const you = {
    firstName: 'Bobby',
    lastName: 'Brown',
    permissions: Permissions.ADMIN,
    isReturning: true,
    age: 35,
    stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow']
};
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
        price: 35,
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
        price: 25,
        location: {
            firstLine: 'flat 15',
            city: 'London',
            code: 'SW4 5XW',
            country: 'United Kingdom',
        },
        contact: [+34829374892553, 'andyluger@aol.com'],
        isAvailable: true
    },
    {
        image: 'images/malaysia-property.jpg',
        title: 'Malia Hotel',
        price: 35,
        location: {
            //Room 4, Malia , Malaysia, 45334
            firstLine: 'Room 4',
            city: 'Malia',
            code: 45334,
            country: 'Malaysia',
        },
        contact: [+60349822083, 'lee34@gmail.com'],
        isAvailable: false
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
    showDetails(you.permissions, card, properties[i].price);
    propertyContainer.appendChild(card);
}
let count = 0;
function addReviews(array) {
    if (!count) {
        count++;
        const topTwo = getTopTwoReviews(array);
        for (let i = 0; i < topTwo.length; i++) {
            const card = document.createElement('div');
            card.classList.add('review-card');
            card.innerHTML = topTwo[i].stars + ' stars from ' + topTwo[i].name;
            reviewContainer.appendChild(card);
        }
        container.removeChild(button);
    }
}
button.addEventListener('click', () => addReviews(reviews));
let currentLocation = ['London', '11.03', 17];
footer.innerHTML = currentLocation[0] + ' ' + currentLocation[1] + ' ' + currentLocation[2] + '°';
// mainproperty for Main Image
// Classes
class MainProperty {
    constructor(src, title, reviews) {
        this.src = src;
        this.title = title;
        this.reviews = reviews;
    }
}
// instantiate an object from the class, by filling in values
let yourMainProperty = new MainProperty('images/italian-property.jpg', 'Italian House', [{
        name: 'Olive',
        stars: 5,
        loyaltyUser: LoyaltyUser.GOLD_USER,
        date: '12-04-2021'
    }]);
const mainImageContainer = document.querySelector('.main-image');
const image = document.createElement('img');
image.setAttribute('src', yourMainProperty.src);
mainImageContainer.appendChild(image);
//# sourceMappingURL=airbnb.js.map