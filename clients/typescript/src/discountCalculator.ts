export function calcDiscount(amount: number): number{

    if (amount >= 50000) {
        return amount * 0.85;
    }
    if (amount >= 10000) {
        return amount * 0.9;
    }
    if (amount >= 7000) {
        return amount * 0.93;
    }
    if (amount >= 5000) {
        return amount * 0.95;
    }
    if (amount >= 1000) {
        return amount * 0.97;
    }

    return amount;
}
