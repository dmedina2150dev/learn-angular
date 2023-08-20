# One way data binding

# Getters and setters

# Directiva @Component 


# Directiva *ngIf

# Directiva [*ngFor](https://angular.io/api/common/NgFor#description) 

# Directiva [ngClass]

# Ng-Template

# Directiva *ngIf-else

# Modulos en Angular

Es una clase TypeScript que posee un decorador. Especificamente el @NgModule. EL modulo en si mismo como cualquier otro modulo es un agrupado. Es decir encapsula una funcionalidad de tal manera de que si necesitamos compartirla lo facilita y a su vez proteje el modulo del mundo exterior.

# @Input

Decorador que nos ayuda a pasar información de componentes padres a componentes hijo....

# (ngSubmit) Evento

# Services

Es angular son utilizados como un [Singleton](https://angular.io/guide/singleton-services), para que solo exista una instancia de la clase en toda la aplicación. Para cumplir con esto existen dos formas de implementarlos o decirle a Angular que este es una clase proveedora.

> La primera y la más recomendada a partir de Angular 6.0 es utilizando el decorador (@Injectable) con la propiedad (providedIn). Que nos ayuda a avisarle a Angular que este servicio estara disponible para toda la aplicación.

```Typescript
    import { Injectable } from '@angular/core';

    @Injectable({ providedIn: 'root' })
    export class UserService {

    }
```

> La segunda forma seria incluir este servicio en los providers de el modulo inicial de la aplicación. (AppModule).

```Typescript
    @NgModule({
    …
    providers: [ UserService ],
    …
    })
```

**NOTA: La inyección de estos servicios en los (@Component) que lo requieram, no deberián ser públicos, ya que al importar el (@Componente) o usarlo de forma directa, tecnicamente estamos exponiendo de igual forma el servicio o singleton**

**Esto permitiria hacer algo como lo siguiente:**

```Typecript
    NameComponent.nameService.propiedadService = "Loquesea";
```

**__Permitiendo mediante la instancia del (@Componente) modificar una propiedad del servicio o metodo__**

<br />
<br />

# Tree Shaking

# @ViewChild

# Conocer las opciones de routerLinkActiveOptions

Principalmente la utilizamos para evitar el problema con el routerLinkActive marque ('/') este path cuando este en todas las rutas

# LazyLoad - Carga perezosa

# ActivatedRoute 

Existe varias formas de obtener el valor de la url, uno que es sin Observable y otros que toman el snapshop de como se encuentra el url.
Lo mas recomendable es utilizar el observable para controlar cuando el usuario cambia dinamicamente el url. Y la aplicación no necesariamente se recargara y no obtendremos el nuevo snapshop de la url. Puede que la información que mostremos no sea la correcta.

# HttpClient

__Nota:__ las peticiones automaticamente luego de hacerse se cierran automaticamente utilizando el (take) de rxjs

# Pipes 

[Documentación ref]()

[Lista de Pipes de Angular](https://angular.io/api?query=pipe)

## Pipes Investigar y colocar ejemeplo

> i18nSelect 