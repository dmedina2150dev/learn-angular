// Crearemos interfaces de productos y un par de funciones para calcular impuestos

export interface Product {
    description: string;
    price: number;
}

const phone: Product = {
    description: "Nokia A1",
    price: 150.0
}

const table: Product = {
    description: "IPad Air",
    price: 230.50
}

interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}

/**
 ** Basados en Clean Code si tenemos una funcion que recibe mas de 3 parametros (Se deben transformar en un objeto)
 */

// function taxCalculation( options: TaxCalculationOptions ): [number, number] {
// function taxCalculation( { products, tax }: TaxCalculationOptions ): [number, number] {
export function taxCalculation( options: TaxCalculationOptions ): [number, number] {

    const { products, tax } = options;

    let total = 0;

    products.forEach( ({ price }) => {
        total += price;
    });

    return [total, total * tax];
}


const shoppingCart = [phone, table];
const tax = 0.15;



const [ total, impuestos ] = taxCalculation({ products: shoppingCart, tax });
console.log({ total, tax: impuestos });


