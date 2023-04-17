# Angular-From_Beginner_to_Expert
Based in Udemy course to learn Angular. This course was published several years ago, for this reason it is possible some Angular features / concepts are deprecated

# Section 1: Introduction and software
This course was published several years ago (Angular 7, currently versoin 15), for this reason it is possible some Angular features / concepts are deprecated, but the mainly Angular features work correctly.

## 1.1 Mandatory Software
- Node (https://nodejs.org/es), with **node -v** check version. Node install en Node Package Module, with **npm -v** check version.
- Google Chrome browser (https://support.google.com/chrome/answer/95346?hl=ES&ref_topic=7439538).
- TypeScript (https://www.typescriptlang.org/), with **tsc -v** check version
- Angular CLI ((https://angular.io/cli)), is the Angular manager, with **ng version** check version
- Ionic (https://ionicframework.com/)

## 1.2 Optional Software
- IDE's, Atom, Visual Studio Code, Sublime Text, WebStorm.
- Extesions for IDE's (PDF in course resources)


# Section 2: TypeScript and ES
- JavaScript no fue diseñado para crear aplicaciones de mediana y gran escala. Originalmente se diseñó para haver validaciones de formularios. Al ser un lenguaje de tipado débil, es fácil en aplicaciones de gran tamaño cometer errores. JavaScript carece de tipos de variables, rrrores en tiempo de escritura, etc. Lo peor es que con JavaScript no somos conscientes de lo problemas hasta que tiempo de ejecución.
- TypeScript solventa estos problemas de JavaScript. TypeScript compila el código y acaba generando JavaScript. Podemos tener la tranquilidad de trabajar con las ultimas novedades de ES que soporte TypeScript, ya que después al compilarlo, éste se encargará de pasarlo a la versión de JavaScript que indiquemos. Además TypeScript nos permite tener un código más ordenado y comprensivo.

## 2.2 TypeScript demo
- Para compilar código TS y generar el JS, usar el comando **tsc app.ts**, donde app.ts es el fichero TS a compilar.
- Para crear una **función anónima autoinvocada** (base del **patrón módulo** de JS):
  ``` 
  (function(){ ... })();
  ```
## 2.1 TypeScript configuration file
- Existe un fichero para configurar todo lo necesario en TS (esto Angular lo hace automáticamente). Con el comando **tsc --init**, esto crea el fichero de configuración **tsconfig.json**. Con este fichero ya creado, para compilar los TS existentes sólo hace falta ejecutar el comando **tsc -w**. The esta manera, TS se queda en modo "watcher", esto significa que, cada vez que se guarden cambios en un fichero TS, se compilarán generando / actualizando en JS correspondiente. Con "Ctrl+C" se pararía el servicio de autocompilación"

![Terminal](./course_resources/Section_2/terminal_ts_compliation.PNG)

- El tsconfig.json posee muchas propiedades, al generarse sólo está activas algunas y con valores por defecto. Este archivo configura la manera de compilar los TS a JS. Cada propiedad viene explicada en el fichero.
- Como se comnentó anteriormente, en la implementación podemos usar características nuevas de JS (del ES que sea) y la compilación se encargará de pasarlo a la versión de JS que espeficiquemos (propiedad **target**). El estándar más aceptado es ES5.

## 2.2 Variables (let y const)
- Aunque el fichero TS tenga marque errores, el servicio de autocompilación lo compila. Si con un error por ejemplo en la declaración de una variable, ejecutamos el JS resultante, el navegador nos informará del error que ya nos estaba marcando TS.

![Variable no declared](./course_resources/Section_2/variable_no_declared_code.PNG)
![Variable no declared](./course_resources/Section_2/variable_no_declared_browser.PNG)

- Dónde sea que hasta ahora se estuviese declarando en JS una variable tipo **var**, ahora se puede hacer tipo **let**. Las variables tipo **let** existen dentro de un scope determinado mientras que cno **var** no sucede esto.

<div align="center">

![Scope let](./course_resources/Section_2/scope_let_code.PNG)
![Scope var](./course_resources/Section_2/scope_var_code.PNG)

</div>

- El tipo **const** determina que una "variable" es constante y por tanto no se puede reasignar su valor. TS marcará el error y nos informará que ocurre. Pero al igual que antes, no restringe la compilación y el código JS dará error en tiempo de ejecución aunque su JS no marque error alguno. Es buena práctica usar constante porque necesitan menos espacio en memoria porque no tienen funciones para establecer valores. Por convención, su nombre se suele indicar en mayúscula del siguiente modo "MAX_CUSTOMERS".