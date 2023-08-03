# One way data binding

# Getters and setters

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

# @Services [Singleton](https://angular.io/guide/singleton-services) 

**NOTA: La inyección de estos servicios no deberian ser publicos, ya que al importar el componente o usarlo de forma directa, tecnicamente estamos exponiendo de igual forma el servicio o singleton**

**Esto permitiria hacer algo como lo siguiente:**

```
 NameComponent.nameService.propiedadService = "Loquesea";
```

___Permite mediante la instancia del componente modificar una propiedad del servicio o metodo___
