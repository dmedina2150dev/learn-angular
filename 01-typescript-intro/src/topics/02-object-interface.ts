
const skills: string[] = ['Bash', 'Counter', 'Healing'];


/**
 * Las interfaces cuando el codigo es trasnpilado a Javascript
 * No tienen ninguna representacion fisica en Javascript
 */
interface Character {
    name: string;
    hp: number;
    skills: string[];
    hometown?: string; // Para indicar que es opcional
}


const strider: Character = {
    name: 'Strider',
    hp: 100,
    skills: ['Bash', 'Counter'],
}


strider.hometown = 'Rivendill';

console.table(strider);


export {}; // Trasnformamos el archivo en un modulo para evitar errores