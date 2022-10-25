export function calcTax(amount: number, country: string): number{
    const taxRates: Record<string, number> = {
        'DE':21,
        'UK':21,
        'FR':18,
        'IT':12,
        'ES':19,
        'PL':21,
        'RO':20,
        'NL':20,
        'BE':24,
        'EL':20,
        'CZ':19,
        'PT':23,
        'HU':27,
        'SE':23,
        'AT':22,
        'BG':21,
        'DK':21,
        'FI':17,
        'SK':18,
        'IE':21,
        'HR':23,
        'LT':23,
        'SI':24,
        'LV':20,
        'EE':22,
        'CY':21,
        'LU':25,
        'MT':20};


    let rate = taxRates[country];
    if (country == 'FR' && amount > 1000) {
        rate = 25;
    }
    if (country == 'IT' && amount > 2000) {
        rate = 10;
    }
    if (country == 'DE' && amount > 3000) {
        rate = 20;
    }

    const tax = amount * rate / 100;

    return amount + tax;
}
