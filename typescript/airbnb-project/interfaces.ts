/*
import { LoyaltyUser } from './enum'

// or without import:
// enum LoyaltyUser {
//     GOLD_USER = 'GOLD_USER',
//     SILVER_USER = 'SILVER_USER',
//     BRONZE_USER = 'BRONZE_USER'
// }

// note: this is a module with Export Deafult!
// so: would result in a call where you can rename it to anything you want, without curly-braces
export default interface Review {
    name: string;
    stars: number;
    loyaltyUser: LoyaltyUser;
    date: string;
}

export interface Property {
    image: string;
    title: string;
    price: Price;
    location: {
        firstLine: string;
        city: string;
        code: number | string;
        country: string
    }
    contact: [ number, string];
    isAvailable: boolean;
}

*/

// in real-life development this would be best
// not used now since webpack isn't enabled
//# sourceMappingURL=types.js.map