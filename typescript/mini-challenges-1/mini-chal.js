// Array Types mini-challenge
// Can youM assign the correct Type to the reviewsM const? Please bear in mind everything
// we have learnt about String, Boolean, Number, Object and Array Types for this.
var returningUserDisplayM = document.querySelector('#returning-userm');
var userNameDisplayM = document.querySelector('#userm');
var reviewTotalDisplayM = document.querySelector('#reviewsM');
var isOpenM;
// this is aan array of objects
// and inside of it the keys have types
var reviewsM = [
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
function showReviewTotalM(value, reviewer, isLoyalty) {
    var iconDisplay = isLoyalty ? '⭐' : '';
    reviewTotalDisplayM.innerHTML = 'review total ' + value.toString() + '| last reviewed by ' + reviewer + ' ' + iconDisplay;
}
showReviewTotalM(reviewsM.length, reviewsM[0].name, reviewsM[0].loyaltyUser);
var youM = {
    firstName: 'Bobby',
    lastName: 'Brown',
    isReturning: true,
    age: 35,
    stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow']
};
function populateUserM(isReturning, userName) {
    if (isReturning == true) {
        returningUserDisplayM.innerHTML = 'back';
    }
    userNameDisplayM.innerHTML = userName;
}
populateUserM(youM.isReturning, youM.firstName);
//# sourceMappingURL=mini-chal.js.map