// more of your code here

import { calcTax } from './taxCalculator';

export function sayHello() {
    return "Hello World";
}

export function calculatePrice(order: any): { total: number } {

    const itemPrice = order["prices"][0];
    const quantity = order["quantities"][0];

    let price = itemPrice * quantity;

    const country = order["country"];

    price = calcTax(price, country)

    return { total: Number(price.toFixed(2)) };
}
