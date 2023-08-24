## File System de un proyecto creado por el CLI de Angular

**.angular**

> Es un directorio que no deberiamos nunca ir a modificarlos, este archivo es ignorado por el lado de git, esta declarado en el gitignore. Esta carpeta ayuda a Angular a manejar rapidamente cuando se detecta algun cambio, a levantar rapidamente la aplicación si no existe ningun cambio. Basicamente maneja el cache de nuestro proyecto en desarrollo y en construccion.

**.vscode**

> Es otra carpeta que esta ignorada por el gitignore. Si bien es una carpeta que no influye al funcionamiento de la aplicación, en el archivo de extencions.json podemos añadir extenciones recomendadas para el desarrollo del proyecto.

**node_modules**

> Es una carpeta interesante aunque tambien son ignorados por el gitignore. Estos modulos no se suben al repositorio ya que al descargar el proyecto, se reconstruyen estos modulos en base a las dependencias que contiene el package.json

**main.ts**

> Es el punto de entrada de nuestra aplicación. Cuando trabajamos con otros frameworks como Ionic o Electron para aplicaciones moviles o de escritorio respectivamente, o Angular Universal, no necesariamente estaremos trabajando con __platformBrowserDynamic__ que es para aplicaciones web, este metodo ejecuta el bootstrap de nuestro modulo principal.

**app**

> Es donde se construye toda la logica de la aplicación, crearemos modulos, componentes, servicios, archivos de estilo etc.

**assets** 

> Esta carpeta contiene los archivos estaticos que podamos necesitar en el proyecto. y a parte contiene un archivo __.gitkeep__ que le indica a git que la carpeta es importante y que no la ignore.


<br/>
<br/>
<br/>

## Files de un proyecto creado por el CLI de Angular

**angular.json**

> Es un archivo importante, se supone que sea raro que debamos realizar modificaciones a este archivo, posee configuraciones globales de la aplicacion, como la compilación del proyecto, algunas configuraciones sobre los ambientes de la aplicacion. etc..

**.editorconfig**

> Este archivo se genera al crear la aplicación para establecer configuraciones por defecto en vscode para este proyecto. Este archivo sigue ciertas recomendaciones para que el codigo luzca parecido al de compañeros de trabajo, cuando estos estan trabajando en el mismo proyecto. 
> Se puede o no contar con una extencion llamada editorConfig.

**.gitignore**

> Este es un archivo propio de git, para evitar que al hacer un commit antes de subir al repositorio, todos los archivos y directorios que se encuentran en este archivo seran ignorados y por ende no subiran al repositorio.

**package-lock.json**

> Indica como fueron creados los modulos de nodejs. No se modifica manualmente. Este se actualiza cuando ejecutamos comando en la terminal para añadir o remover librerias o dependencias.

**package.json**

> Significa que estamos en presencia de una aplicacion de nodejs. En este archivo administraremos los script de ejecución para nuestro proyecto, las dependencias para compilar el proyecto y las dependencias de desarrollo. Como tambien observaremos informacion adicional sobre el proyecto, la version, el nombre entre otros datos que podremos añadir.

**README.md**

> Archivo para dar informacion relevente sobre como funciona la aplicacion y avisar a otros desarrolladores como deberian utilizarla.

**tsconfig.app.json**

> Aqui encontramos las configuraciones de TypeScript para el proyecto este exiende del tsconfig.json, dice cuales son los archivos que debiesemos revisar, el directorio de salida.

**tsconfig.json**

> Es el archivo de configuraciones de TypeScript recomenadadas para Angular. 

**tsconfig.spec.json**

> Es el archivo de configuraciones de TypeScript recomenadadas para la parte del Testing en Angular. 