// put all code back in one file, because import/export doesn't work

/*
import { showReviewTotal, populateUser, showDetails, getTopTwoReviews} from './utils'
import { showReviewTotal, populateUser } from './utils'
import { Permissions, LoyaltyUser } from './enums'
import { Price, Country } from './types'
*/

// Function Types challenge - Pass the code review
// 
// 1. Add types to the function that returns the top 2 reviews specifically based on
// descending order. Make sure to use what you learned in the previous lessons.
// 2. Add types to the function in this file that shows the reviews when we click the button


// START UTILS
const reviewTotalDisplay = document.querySelector('#reviews')
const returningUserDisplay = document.querySelector('#returning-user')
const userNameDisplay = document.querySelector('#user')

function showReviewTotal(value: number, reviewer: string, isLoyalty: LoyaltyUser) {
    const iconDisplay = LoyaltyUser.GOLD_USER ? '⭐' : ''
    // make a nicer way to show plural or singular nr. of reviews
    reviewTotalDisplay.innerHTML = value.toString() + ' Review' + makeMultiple(value) + '| last reviewed by ' + reviewer + ' ' + iconDisplay
}

function populateUser(isReturning: boolean, userName: string) {
    if (isReturning == true) {
        returningUserDisplay.innerHTML = 'back'
    }
    userNameDisplay.innerHTML = userName
}

function makeMultiple(value: number): string {
    if (value > 1 || value == 0) {
        return 's'
    } else return ''
}
// Broken code in utils
// --> only see the Top reviews
// 'reviews' results in an array of objects = {}[], so add those as a type
// but it also has a Return!
// it (again) returns an array of objects, that you can either assing or type 'any'
function getTopTwoReviews(reviews: {
    name: string;
    stars: number;
    loyaltyUser: LoyaltyUser;
    date: string;
}[]) : {
    name: string;
    stars: number;
    loyaltyUser: LoyaltyUser;
    date: string;  
}[]  {
 const sortedReviews = reviews.sort((a, b) => b.stars - a.stars)
 console.log(sortedReviews.slice(0,2));
 return sortedReviews.slice(0,2)

}
// END UTILS


// START ENUMS
enum Permissions {
    ADMIN = 'ADMIN',
    READ_ONLY = 'READ_ONLY'
}

enum LoyaltyUser {
    GOLD_USER = 'GOLD_USER',
    SILVER_USER = 'SILVER_USER',
    BRONZE_USER = 'BRONZE_USER'
}
// END ENUMS

const propertyContainer = document.querySelector('.properties')
const reviewContainer = document.querySelector('.reviews')
const container = document.querySelector('.container')
const button = document.querySelector('button')
const footer = document.querySelector('.footer')

let isLoggedIn: boolean

// Reviews
const reviews: any[] = [
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
        description: 'Great hosts, location was a bit further than said.'
    },
]

const you = {
    firstName: 'Bobby',
    lastName: 'Brown',
    permissions: Permissions.ADMIN,
    isReturning: true,
    age: 35,
    stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow']
}


// Array of Properties
type Price = 45 | 30 | 25;
type Country = "Colombia" | "Poland" | "United Kingdom";
// Array of Properties
const properties: {
    image: string;
    title: string;
    price: Price;
    location: {
        firstLine: string;
        city: string;
        code: number;
        country: Country;
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
            price: 30,
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
                code: 35433,
                country: 'United Kingdom',
            },
            contact: [+34829374892553, 'andyluger@aol.com'],
            isAvailable: true
        }
    ]

// Functions
showReviewTotal(1, reviews[0].name, reviews[0].loyaltyUser)
populateUser(you.isReturning, you.firstName)

let authorityStatus: any

isLoggedIn = false

function showDetails(authorityStatus: boolean | Permissions, element: HTMLDivElement, price: number) {
    if (authorityStatus) {
        const priceDisplay = document.createElement('div')
        priceDisplay.innerHTML = price.toString() + '/night'
        element.appendChild(priceDisplay)
    }
}

// Add the properties
for (let i = 0; i < properties.length; i++) {
    const card = document.createElement('div')
    card.classList.add('card')
    card.innerHTML = properties[i].title
    const image = document.createElement('img')
    image.setAttribute('src', properties[i].image)
    card.appendChild(image)
    propertyContainer.appendChild(card)
    showDetails(you.permissions, card, properties[i].price)
}

//Broken code
// --> only see the Top reviews
// let count = 0
// function addReviews(array: {string, name, loyaltyUser}) : void {
    // this function does NOT return anything, so is void
    // and: 'reviews' results in an array of objects = {}[], so add those as a type
let count = 0
function addReviews(arrayz: {
    name: string;
    stars: number;
    loyaltyUser: LoyaltyUser;
    date: string;
}[]): void {
    if (!count) {
        count++
        const topTwo = getTopTwoReviews(arrayz)
        for (let i = 0; i < topTwo.length; i++) {
            const card = document.createElement('div')
            card.classList.add('review-card')
            card.innerHTML = topTwo[i].stars + ' stars from ' + topTwo[i].name
            reviewContainer.appendChild(card)
        }
        container.removeChild(button)
    }
}

// when you click this button you will only see the Top reviews
button.addEventListener('click', () => addReviews(reviews))

let currentLocation: [string, string, number] = ['London', '11.03', 17]
footer.innerHTML = currentLocation[0] + ' ' + currentLocation[1] + ' ' + currentLocation[2] + '°'
