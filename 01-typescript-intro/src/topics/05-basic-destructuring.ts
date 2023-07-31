

interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}


// TODO: DESESTRUCTURACION DE ARREGLOS

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: "Ed Sheeran",
        year: 2025,
    }
}

const songDuration = 50; // Teniendo esta variable complicaria desestructurar de nuestro objeto

//* La desestructuración consiste en que podamos tomar de un object, ciertas piezas y propiedades que nos interesan

// * Evitando hacer esto
console.log("Song ", audioPlayer.song);
console.log("Author ", audioPlayer.details.author);

// * Pero se puede renombrar en la desestructuración
const { song, songDuration:duration, details } = audioPlayer;
const { author } = details;

console.log("Song ", song);
console.log("Duration ", duration);
console.log("Author", author);

// O podiamos desestructurar el author de la siguiente forma
// TODO: Lo renombro para evitar desmadre
const {
    details: { author: owner },
} = audioPlayer;

console.log("Author:Owner:", owner);




// TODO: DESESTRUCTURACION DE ARREGLOS

const dbz: string[] = ['Goku', 'Vegeta', 'Trukn'];

// Para obtener el tercer valor
console.log('Personaje 3: ', dbz[2]);

// Puedes ignorar los primero objeto dejando solo la (,) const [ , , , objeto] = array;
const [ p1, p2, trunks = 'Not Found' ] = dbz;

console.log('Personaje 3: ', trunks);

export {};