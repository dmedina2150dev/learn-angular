

export interface Passenger {
    name: string;
    children?: string[]; 
}

const passenger1: Passenger = {
    name: 'John Smith',
}

const passenger2: Passenger = {
    name: 'Fernando Smith',
    children: ['Natalia', 'Elizabeth']
}

const printChinldren = ( passenger: Passenger ) => {
    const howManyChildren = passenger.children?.length;
    console.log(passenger.name,  howManyChildren)
}

printChinldren( passenger2 )
printChinldren( passenger1 )