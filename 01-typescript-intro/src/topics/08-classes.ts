

export class Person {
    // public name: string;
    // private address: string;

    constructor(
        public name: string,
        private address: string = 'No address'
    ) {
        // this.name = 'John Doe';
        // this.address = 'New York';
    }
}

export class Hero extends Person {
    
    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string

    ) {
        super(realName, 'New York');
    }
}

export class Hero2 {

    public person: Person;

    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string

    ) {
        this.person = new Person(realName);
    }
}


const iroman = new Hero('iroman', 45, 'Tony');
const spiderman = new Hero2('spiderman', 25, 'Peter');

console.log(iroman);
console.log(spiderman);

export class Hero3 {

    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person
    ) { }
}

const bruce = new Person('Hulk', 'New York');

const hulk = new Hero3('El increible Hulk', 32, 'Bruce Banner', bruce);

console.log(hulk);