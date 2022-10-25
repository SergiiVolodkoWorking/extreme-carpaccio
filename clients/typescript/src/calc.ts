// more of your code here

import { calcTax } from './taxCalculator';
import { calcDiscount } from './discountCalculator';

export function sayHello() {
    return "Hello World";
}

export function calculatePrice(order: any): { total: number } {

    const count = order["prices"].length;
    let totalPrice = 0;
    for (let i = 0; i < count; i++) {
        const itemPrice = order["prices"][i];
        const quantity = order["quantities"][i];

        totalPrice += itemPrice * quantity;
    }
    const country = order["country"];

    totalPrice = calcTax(totalPrice, country);
    totalPrice = calcDiscount(totalPrice);

    return { total: Number(totalPrice.toFixed(2)) };
}
