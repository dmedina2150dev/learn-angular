import { Product, taxCalculation } from './06-function-destructuring';


const shoppingCart: Product[] = [
    {
        description: 'Nokia',
        price: 1000
    },
    {
        description: 'iPad',
        price: 3000
    }
];

const [ total, tax ] = taxCalculation({
    tax: 0,
    products: shoppingCart
});

console.log("Total: " + total);
console.log("Tax: " + tax);