// put all code back in one file, because import/export doesn't work

/*
import { showReviewTotal, populateUser } from './utils'
import { Permissions, LoyaltyUser } from './enums'
*/


const propertyContainer = document.querySelector('.properties')
const footer = document.querySelector('.footer')

const returningUserDisplay = document.querySelector('#returning-user')
const userNameDisplay = document.querySelector('#user')
const reviewTotalDisplay = document.querySelector('#reviews')

function showReviewTotal(value: number, reviewer: string, isLoyalty: LoyaltyUser) {
    const iconDisplay = (LoyaltyUser.GOLD_USER) ? '⭐' : ''
    reviewTotalDisplay.innerHTML = 'review total ' + value.toString() + '| last reviewed by ' + reviewer + ' ' + iconDisplay
}

function populateUser(isReturning: boolean, userName: string) {
    if (isReturning) {
        returningUserDisplay.innerHTML = 'back'
    }
    userNameDisplay.innerHTML = userName
}

let isOpen: boolean

// Reviews
enum LoyaltyUser {
    GOLD_USER = 'GOLD_USER', 
    SILVER_USER = 'SILVER_USER',
    BRONZE_USER = 'BRONZE_USER'
}

// if you already know which kind of structures your data will have, and it
// will have only TWO different ones, you can assign all the types
// with a UNION pipe stripey thingy like so:

/*
// Reviews
const reviews : (
    {
    name: string;
    stars: number;
    loyaltyUser: LoyaltyUser;
    date: string;   
} |
{
    name: string;
    stars: number;
    loyaltyUser: LoyaltyUser;
    date: string;
    description: string;
}
)[]= [
    {
        ...
*/

// if you have AbsoLuteLy NO idea what amount of variables will come in, you can use the ANY type liek so:

/*
const reviews : any[] = [
    {...
*/

const reviews: {
    name: string;
    stars: number;
    loyaltyUser: LoyaltyUser;
    date: string
}[] = [
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
            date: '27-03-2021'
        },
    ]


// User
enum Permissions {
    ADMIN = 'ADMIN', 
    READ_ONLY = 'READ_ONLY'
}

const you: {
    firstName: string;
    lastName: string;
    permissions: Permissions;
    isReturning: boolean;
    age: number;
    stayedAt: string[]
} = {
    firstName: 'Bobby',
    lastName: 'Brown',
    permissions: Permissions.ADMIN,
    isReturning: true,
    age: 35,
    stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow']
}

if (you.permissions === Permissions.ADMIN) {
    //show
    console.log("The custom-type enum for Admin works!")
} else {
    console.log("You are not an administrator.")
}


// Array of Properties
const properties: {
    image: string;
    title: string;
    price: number;
    location: {
        firstLine: string;
        city: string;
        code: number;
        country: string;
    };
    contact: [number, string];
    isAvailable: boolean;
}[] = [
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
    ]


// Functions
showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser)

populateUser(you.isReturning, you.firstName)

// Add the properties
for (let i = 0; i < properties.length; i++) {
    const card = document.createElement('div')
    card.classList.add('card')
    card.innerHTML = properties[i].title
    const image = document.createElement('img')
    image.setAttribute('src', properties[i].image)
    card.appendChild(image)
    propertyContainer.appendChild(card)
}

// use your location, your current time, and the current temperature of your
//  location
// declare and assign the Tuple
// change the innerHTML in order to be able to handle the Tuple and simply concatenate values from the array as strings
let currentLocation: [string, string, number] = ['Amsterdam', '20:35', 23]
footer.innerHTML = currentLocation[0] + ' ' + currentLocation[1] + ' ' + currentLocation[2]
