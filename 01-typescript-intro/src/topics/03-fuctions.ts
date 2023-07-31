
/**
 ** TypeScript infirer muchas vecese el valor de retorno de las funciones si no se especifica
 ** Para los parametros de entrada si no se le define el tipo de dato arroja error de //!implicitly param b type any 
 */
function addNumbers(a: number, b: number) {
    return a + b;
}

const addNumbersArrow = (a: number, b: number): string => {
    return `${ a + b }`;
}

/**
 * 
 * @param firstNumber Obligatorio
 * @param secondNumber Opcional //*Este deberia ser el ultimo parametro a recibir en la funcion
 * @param base Con valor inicial
 * @returns Inferido
 */
function multiply(firstNumber:number, secondNumber?:number, base:number = 2) {
    return firstNumber * base;
}

const result: number = addNumbers(1, 4);

const result2: string = addNumbersArrow(2, 4);

const result3: number = multiply(5)

// Podriasmos hacer una transformacion des esta forma ya que se infirio el tipo de respuesta
const transform: string = addNumbers(20, 32).toString();

console.log({ result, transform, result2, result3 });



interface Character {
    name: string;
    hp: number;
    showHp: () => void;
}

const healCharacter = ( character: Character, amount: number ) => {
    
    // Con la interfaz nos evitamos asignaciones equivocadas
    // character.pv += amount;

    character.hp += amount;

}


const strider: Character = {
    name: 'Strider',
    hp: 50,
    showHp() {
        console.log(`Puntos de vida ${this.hp}`);
    },
}

strider.showHp();

healCharacter(strider, 10);
healCharacter(strider, 30);

strider.showHp();


export {};