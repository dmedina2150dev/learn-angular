



export function whatsMyType<T>( argument: T ): T {

    return argument;
}

const amIString = whatsMyType<string>('Hola Mundo');
const amINumber = whatsMyType<number>(100);
const amIArray = whatsMyType<number[]>([1,2,3,4,5,6,7,8,9]);

console.log( amIString.toUpperCase() );
console.log( amINumber.toFixed() );
console.log( amIArray.join('-') );