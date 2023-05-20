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

![Const](./course_resources/Section_2/const_ts_code.PNG)

![Const](./course_resources/Section_2/const_js_code.PNG)

![Const](./course_resources/Section_2/const_js_browser.PNG)

## 2.3 Introduction to data type
- En TS se puede definir el tipo de variable al declararla, esto se hace también de manera "automática" al asignarle el valor. Es decir, si al crear una variable le asignamos una palabra, automaticamente TS entiende que es de tipo **string** sin necesidad de que nosotros le indiquemos el tipo, aunque es aconsejable por mantenimiento de código. Con esto, si se intenta cambiar el valor por otr tipo, **number** por ejemplo, TS marcará error. Si se intenta asignar un valor de tipo distinto al que se declaró la variable, TS marcará error.

![Data type](./course_resources/Section_2/data_type_code_1.PNG)

![Data type](./course_resources/Section_2/data_type_code_2.PNG)

- En TS existe el tipo de dato **any**, que puede ser cualquier cosa. Este tipo se asigna automáticamente cuando se declara una variable sin inicializarla, con lo que TS no sabe de qué tipo es. Una variable tipo any puede aceptar cualquier valor, es como una variable de JS, que no le afecta el tipado, TS no marcará error alguno. También se puede especificar que una variable pueda ser de uno u otro tipo con **|**.

![Data type](./course_resources/Section_2/data_type_code_3.PNG)

![Data type](./course_resources/Section_2/data_type_code_4.PNG)

![Data type](./course_resources/Section_2/data_type_code_5.PNG)

- Cuando se declara un objeto inicializándolo y posteriormente se le asigna otro objeto, si este no cumple con la estrucutra **exacta** del inicial (propiedades y tipo) TS marcará error. Cuando digo **exacta**, quiero decir, que no se pueden ni añadir ni quitar propiedades al objeto de las definidas inicialmente.

![Data type](./course_resources/Section_2/data_type_code_6.PNG)

## 2.4 Skip files to compile
- Es posible decirle a TS que el watcher omita ficheros/directorios a compilar. Para ello he movido el fichero TS usado para el estudio de los tipos de variables a la carpeta creada "typescript" y ene l tsconfig.json he especificado en un nuevo campo **exclude** el directorio que quiero omitir compilar. Por ello antes de activar el watcher (**tsc --w**) no tengo ningún JS generado y tras activarlo compila todo salvo la carpeta "typescript". En este caso genera sólo el app.js porque no hay más ficheros TS fuera de la carpeta "typescript".

![Skip file / directory to compile](./course_resources/Section_2/skip_to_compile_1.PNG)

![Skip file / directory to compile](./course_resources/Section_2/skip_to_compile_2.PNG)

![Skip file / directory to compile](./course_resources/Section_2/skip_to_compile_3.PNG)

## 2.5 String templates
- El uso de backtics (**``**) permite usar string templates para que la concatenación de strings no sea tan engorrosa. Permite que todo lo que esté entre los backtics se procese como un string sin necesidad de poner caracteres especiales con el \n para el salto de línea, pero también los permite. También permite añadir lógica en la template, es decir todo lo que esté entre **{}** se considera código JS. Comprando el TS con el JS se puede ver que la mejora a la hora de trabajar con string es evidente
 
![String templates](./course_resources/Section_2/string_template_1.PNG)

![String templates](./course_resources/Section_2/string_template_2.PNG)

## 2.6 Functions: Mandatory, Optional and Default parameters
- Es muy importante espeficicar el tipo de dato en los parámetros de una función al definirla. Normalmente el orden de definir los parámetros de una función es obligatorios, opcionales y por defecto.
  - Parámetro obligatorio: Se indica el nombre seguido de **:** y el tipo
  - Parámetro opcional: Se indica como un obligatorio pero el nombre del parámetro concatenado con **?**
  - Parámetro con valor por defecto: Se indica como un obligatorio seguido de **=** igual al valor por defecto

![Function parameters](./course_resources/Section_2/function_parameter_1.PNG)

## 2.7 Arrow functions
- Definir una función como una variable de tipo constante me permite que no pueda ser modificada, es una buena práctica.
- Las funciones flecha fueron incluidas en ES6
- Las funciones flecha tienen la ventaja de que si sólo tiene una línea con return, se puede omitir poner las llaves de la función **{}** y el propio **return**.

![Arrow function](./course_resources/Section_2/arrow_function_1.PNG)

- Las funciones flecha pueden solventar el problema del scope de las funciones tradicionales, es decir, el **this** cambia. Con las funciones arrow no se cambia el scope.

![Arrow function](./course_resources/Section_2/arrow_function_2.PNG)

## 2.8 Destructure objetcs and arrays
- Es posible extraer partes de un objeto o de un array de manera simple.
- Para extraer sólo algunos campos de un objeto se usan **{}** y se pueden guardar directamente en variables. Para ello los nombres de las variables deben coincidir con el nombre del campo, pero da igual el orden de extracción.

![Destructure](./course_resources/Section_2/desctructure_1.PNG)

- Es posible usar la extracción directamente en la definición de una función (en la imagen se marca como error porque no se especifica el tipo)

![Destructure](./course_resources/Section_2/desctructure_2.PNG)

- Para extraer sólo algunos elementos de un array se usan **[]** y se pueden guardar directamente en variables. Para ellos los nombres de las variables pueden ser los que se quiera, pero aquí si que hay que respetar el orden. Si sólo se quiere extraer un elemento, habrá que seguir respentando el orden. Al igual que antes, también es posible usar la extracción directamente en una función (en la imagen no se marca como error porque aquí si se especifica el tipo)

![Destructure](./course_resources/Section_2/desctructure_3.PNG)

## 2.9 Promises
- Las promesas principialmente permiten tener una gestión sobre la respuesta de llamadas asíncronas y fueron introducidas en ES6. Cuando se requiere trabajar con respuestas de llamadas asíncronas el código se llena de callbacks, que se ejecutan (normalmente) cuando la llamada asíncrona en cuestión responde. Las promesas, ayudan a que el código no esté cargado de callbacks y que cuando se requiera utilizar los datos de una llamada asíncrona, saber si ese datos está ya disponible o no.

- Al crear la promesa se le debe pasar función cuyo dos argumentos sean dos funciones, **resolve** y **reject**. El resolve se devuelve cuando todo funciona correctamente y el reject cuando algo falla.
  
- La promesa tiene dos funciones, **then** y **catch**. Usamos then cuando todo ha ido bien y catch cuando falla algo. Y se recibe lo que se pase como parametro en el resolve o el reject. El no manejar errores en las promesas pueden detener el flujo del programa como se ve en una de las siguientes imágenes.

![Promises](./course_resources/Section_2/promise_resolve_1.PNG)
![Promises](./course_resources/Section_2/promise_resolve_2.PNG)
![Promises](./course_resources/Section_2/promise_reject_1.PNG)
![Promises](./course_resources/Section_2/promise_reject_2.PNG)

- Hay que definir qué hacer en caso de que la promesa se resuelva bien y también mal.

![Promises](./course_resources/Section_2/promise_reject_3.PNG)
![Promises](./course_resources/Section_2/promise_reject_4.PNG)

- En el ejemplo si se juega con el delay del timout se podrá verifica que sólo se ejecuta una de las funciones que se le pasa a la promesa, la que llegue antes.

![Promises](./course_resources/Section_2/promise_1.PNG)
![Promises](./course_resources/Section_2/promise_2.PNG)
![Promises](./course_resources/Section_2/promise_3.PNG)
![Promises](./course_resources/Section_2/promise_4.PNG)

- Se puede simular la llamada a una función que retorne una promesa, esta se encargaría de solicitar a un servicio que hiciera algo (retirada de dinero en este caso) e implementar que hacer en caso de que la promesa se resuelva o falle. Además gracias a las función flecha puede quedar muy simple.

![Promises](./course_resources/Section_2/promise_5.PNG)
![Promises](./course_resources/Section_2/promise_5b.PNG)
![Promises](./course_resources/Section_2/promise_6.PNG)
![Promises](./course_resources/Section_2/promise_6b.PNG)
![Promises](./course_resources/Section_2/promise_7.PNG)
![Promises](./course_resources/Section_2/promise_7b.PNG)

- Ahora mismo no hay control sobre el tipo de datos que devuelve la promesa, se indica que es desconocido (**unknown**). Para especificar esto en la función getMoney hay que definir el tipo de dato que se va a devolver, en este caso una promesa que si se resuelve será un number.

![Promises](./course_resources/Section_2/promise_8.PNG)
![Promises](./course_resources/Section_2/promise_9.PNG)
![Promises](./course_resources/Section_2/promise_10.PNG)

## 2.10 Intefaces
- Cuando se quiere acceder a propiedades de un objeto, no se puede estar seguro sin hacer una validación previa, que el objeto contenga dicha propiedad. Se podría indicar en una llamda que se manda un objeto y sus campos indicando el tipo de cada uno. De este modo si se intenta usar la función con un objeto que no cumpla al menos con los campos que se necesitan, se marcará error. Pero no es la mejor manera.

![Interfaces](./course_resources/Section_2/interfaces_1.PNG)

- Para tener un código robusto y además poder darle una entidad a los objetos, en TS se usan interfaces. Basicamente es poner reglas para asegurarse de cumplirlas. No existe una interpretación de interface TS en JS. Para definir las interfaces se usa la palabra reservada **interface**. En la siguiente imágen se puede ver como tras definir la interface TS nos avisa que no se está asignando una propiedad que posea la interfaz definida.

![Interfaces](./course_resources/Section_2/interfaces_2.PNG)

- Si por alguna razón en el futuro hay que cambiar el nombre de una propiedad, TS avisaría de todos los lugares donde se está usando.

![Interfaces](./course_resources/Section_2/interfaces_3.PNG)

- También puede ocurrir que se le añada una propiedad a la interfaz, esto maracará error en la creación del objeto de ese tipo. Pero se puede indicar que una propiedad sea opcional concatenando **?** al nombre del campo. En la siguiente imagen se puede ver como TS indica que faltan dos de las tres nueas propiedades, esto es porque una de ellas es opcional.

![Interfaces](./course_resources/Section_2/interfaces_4.PNG)

## 2.11 Clases en TS
- Las clases son soportadas en ES6. Las clases, en TS, se usan para definir tipos de datos que además pueden ejecutar ciertos métodos. Para definir una clase se usa la palabra reservada **class**. Aunque añadamos muchas propiedades en TS, hasta que estas no se inicializan, JS no las crea.

![Classes](./course_resources/Section_2/classes_1.PNG)

- Para inicializar los campos de la clase se puede hacer directamente en la declaración del campo pero es buena práctica hacerlo en el constructor ya que es posible necesitar ciertos valores para inicializar los campos. El constructor es una función que todas las clases tienen y que se invoca siempre que un objeto de esa clase es instanciado / creado. Se usa la palabra reservada **constructor**.

![Classes](./course_resources/Section_2/classes_2.PNG)

- En el constructor hay que tener el cuenta la visibilidad **public**, **private** o ninguna, como se ha visto hasta ahora, que se le da a una varible en el constructor, ya que si es **public** se creará como otro campo más de la clase y a su vez se inicializará con el valor que pasemos (por ello se suele usar para inyectar servicios), por ello no puede llamarse igual que un campo ya existente, y podrá ser accedida tanto desde dentro como desde fuera de la clase. Si es **private** pasará lo mismo que con public, con la única diferencia que este nuevo campo no podrá ser accedido desde fuera de la clase, será interno.

![Classes](./course_resources/Section_2/classes_3.PNG)

- Por lo que se usa el constructor no sólo para hacer lógica necesaria para inicializar el objeto, sino para crear campos de la propia clase. Indicando que algunas propiedades son opcionales, la instanciación del objeto no marcará error, pero se crearán las propieades igualmente.

![Classes](./course_resources/Section_2/classes_4.PNG)
![Classes](./course_resources/Section_2/classes_4b.PNG)
![Classes](./course_resources/Section_2/classes_5.PNG)
![Classes](./course_resources/Section_2/classes_4b.PNG)

- También se puede usar lo visto anteriormente en relación a parámetros por defecto, para así, en el caso de no informar una propiedad inicializarla a un valor.

![Classes](./course_resources/Section_2/classes_6.PNG)
![Classes](./course_resources/Section_2/classes_6b.PNG)

## 2.12 Imports
- Aquí se va a ver cómo importar módulos. Este es algo que Angular ya hará de manera automática. En los recursos del curso hay una URL hacia GitHub de donde descargar un repositorio que servirá de base para estudia las importaciones. Este enlace lleva a un repositorio público de Fernando Herrera, creador del curso (https://github.com/Klerith/webpack-starter-typescript). Descargar el código como zip, descompirmirlo y renombrarlo como typescript-importer. Es un projecto TS por lo que se deberá trabajar con él en una carpeta diferente a la que hemos estado trabajando, ya que tendrá su propio tsconfig.json.
  
- Dentro de la carpeta del proyecto, desde una terminal, ejecutar **npm install**, esto instalará los módulos de dependecias descritos en el package.json. Después de la instalación aparecerá una carpeta nueva "node_modules" que es dónde se instalan las dependencias del proyecto.

![Imports](./course_resources/Section_2/importer_1.PNG)


- Para arrancar la aplicación se usa **npm start**. Lo que hace este "start" viene definido en el package.json, que en este caso, ejecuta **webpack-dev-server --open --port=8080**, es decir, arranca la apliación en el webpack (servidor), puerto 8080 y abre el navegador. Probablemente obtengas un error al intetar ejecutar este comando ya que este curso tiene ya algunos años y la versiones más modernas de Node son incompatibles con este webpack.He podido solventar el problema abriendo una consola de CMD (Windows) y añadiendo la siguente variable de entorno NODE_OPTIONS con el valor que se ve en la imagen. Y después ejecutando el **npm start**, pero todo ello desde el CMD y no desde la Terminal PS que abre mi IDE. Es posible que más adelante, en este curso, alla que borrar esta variable de entorno debido a que se ha añadido por la particularidad de esta sección y por ahora desconozco si generará algún conflicto con proyectos Angular.

![Imports](./course_resources/Section_2/importer_2.PNG)

```
set NODE_OPTIONS=--openssl-legacy-provider
```

![Imports](./course_resources/Section_2/importer_3.PNG)

- Una de las cosas buenas de trabajar con webpack es que cada vez que hacemos un cambio, actualiza automáticamente la pantalla.
  
- Esta sección se centra en las importaciones, para ello, vamos a ver como importar una clase. Crear un fichero donde definir una clase y anteponer la plabra reservada **export** para poder usarla en otros ficheros, sin poner el export sólo se podría usar en su propio fichero (privada). En el index.ts usar esta clase (sin importarla aún), TS marcará un error

![Imports](./course_resources/Section_2/importer_4.PNG)
![Imports](./course_resources/Section_2/importer_5.PNG)

- Para importar una clase no sólo es necesario que esta esté definida con el **export**, sino que dónde se quiera usar habrá que incar que la importamos, para ello se usa **import {...} from '...'**, dónde entre las {} se indica el nombre de la clase y tras el from la ruta dónde está definida. En la siguiente imagen se puede ver cómo ahora sí que reconoce la clase y TS nos indica que hay que añadir dos argumentos al constructor. Si se añaden métodos u otras propiedades, TS las reconoce y nos facilita la impmentación

![Imports](./course_resources/Section_2/importer_6.PNG)
![Imports](./course_resources/Section_2/importer_7.PNG)
![Imports](./course_resources/Section_2/importer_8.PNG)
![Imports](./course_resources/Section_2/importer_8b.PNG)

- Hay más maneras de hacer importaciones, pero esta es la más común, el resto se irán viendo durante el curso según se necesiten.

## 2.13 Classes decorators
- Un decorador es una anotación (como en Java Spring) que se coloca antes de la clase y sirve para añadir funcionalidades / propiedades a la clase, como que es un componente, un servicio, etc, es decir, expande la clase. Para poder usarlos hay que inicar al TS que los habilite, para ello en el tsconfig.json descomentar la propiedad "experimentalDecorators" que está a true.

![Classes decorators](./course_resources/Section_2/decorators_1.PNG)

- Para que TS tome correctamente los cambios, habría que parar la aplicación y volver a levantarla, así el navegador ya no mostrará el error relacionado con los decoradores.

- Añadiendo una función y poniendola en el decorador, se puede ver en el navegador como se ejecuta el código de la función añadida en el decorador cuando se crea la clase.

![Classes decorators](./course_resources/Section_2/decorators_2.PNG)

![Classes decorators](./course_resources/Section_2/decorators_2b.PNG)

- Angular hará las importaciones / decoraciones automáticamente. El fin de este curso no es crear decoradores, si no usar los que Angular ya provee, y este punto de la sección está para entender qué hacen.

## 2.14 Function return type
- Hasta ahora no se había especificado el tipo de dato que devuelve una función, aunque TS si que lo reconoce, como en el siguiente ejemplo de una función que suman dos números (sabe que devuelve un número), por lo que podríamos ahorrarnos el especificar el tipo. Para específicar hay que indicarlo usando los **:** justo después de la declaración de argumentos de la función. Esto se hace para evitar errores y devolver algo que no se quiera, como se dijo anteriormente, es poner reglas para asegurarse cumplirlas.

![Function return type](./course_resources/Section_2/function_return_type_1.PNG)

![Function return type](./course_resources/Section_2/function_return_type_2.PNG)

![Function return type](./course_resources/Section_2/function_return_type_3.PNG)

- Pero, hay ocasiones en las que TS no es capaz de reconocer el tipo de dato que se devuelve. Eso es lo que pasa si se devuelve por ejemplo una promesa, que no se sabe de qué tipo es. Y portanto no se podría tener un buen control sobre el dato duvelto cuando se resuelva / rechace.

![Function return type](./course_resources/Section_2/function_return_type_4.PNG)

![Function return type](./course_resources/Section_2/function_return_type_5.PNG)

# Section 3 WebApp: Hello World
En esta sección se va a realiar las primera aplicación Angular ("Hello World"). También se explicarán conceptos clave de Angular y se empezará a utilizar algunas instrucciones.

## Introduction to Components and Directives
- Las aplicaciones de Angular están basadas en múltiples componentes. Un componente es una pequeña clase que cumple una tarea específica. Contiene su propia lógica(TS), estructura (HTML) y estilo (CSS). Se aisla del resto de componentes, esto permite que sea reutilizable.
- Las directivas estructurales son instrucciones que indican a la parte del HTML qué tiene que hacer. Dos directivas de las más utilizadas son **\*ngIf** y **\*ngFor**. La primera se suele utilizar para pintar o no elementos del HTML y la segunda para construir elementos a partir de iterar objetos / arrays.
- Hay dos webs que son de gran ayuda a la hora de trabajar con Angular, una es su propia web https://angular.io/, donde encontrar toda la información sobre el framework. Y otra es un servicio que es un IDE en linea para probar rápidamente código con varios tipos de framworks, https://stackblitz.com/. En este servicio si pulsamos sobre la opción de Angular, arranca automaticament una aplicación ejemplo en Angular, dónde se puede ver la composición del proyecto, código y resultado.

![Stackblitz](./course_resources/Section_3/stackblitz_1.PNG)

![Stackblitz](./course_resources/Section_3/stackblitz_2.PNG)

- En el ejemplo de Stackblitz se puede ver varias cosas en relación a los componentes. En el index.html que es el HTML que se carga al inicio se usa una tag llamada **my-app**, esta tag no es de HTML, sino que es la tag que indica que se pinte el componente cuyo selector es el nombre de la tag. Si se mira el main.ts, aquí se declarar un componente (con el decorador @Component) cuya propiedad **selector** es 'my-app', por lo que será este componente el que se pinte en el index.html. Este ejemplo es un caso particular ya que el componente también posee la propiedad **template** que indica como se ha de pintar el componente, pero lo normal es tener esto en un fichero separado del TS del componente. En el HTML de un componente se puede acceder a las propiedades del mismo con llaves dobles **{{}}**, se denomina **interpolación**. De hecho, en Angular cuando se usan las llaves dobles se puede ejecutar lógica cómo se fuese un JS.

![Stackblitz](./course_resources/Section_3/stackblitz_3.PNG)

![Stackblitz](./course_resources/Section_3/stackblitz_4.PNG)

## Components
- Es una clase extendida, es decir, con más funcionalidades.
- Para crear un componente se usa la instrución de Angunar **ng g c nombreDelComponente** desde un terminal / consola de comandos (AngularCLI). Esto cerará por defecto 4 ficheros y actualizará el app.module.ts añadiendo el nuevo componente a los declarados (**declarations**).
  - HTML: Estructura del componente.
  - CSS: Estilo del componente.
  - TS: Lógica del componente
  - SPEC.TS: Para testing del componente
- Usa el decorador **@Component** que es importado del módulo **Component** en **@angular/core**.
- Propiedades relevantes:
  - selector: Indica el nombre de la tag para usar el componente dentro de un HTML
  - template: Estructura HTML del componente. Se usa cuando el HTML del componente es simple (1 o 2 líneas)
  - templateUrl: Ruta donde se encuentra el HTML que tiene la estructura del componente
  - styleUrls: Array de rutas de los CSS que usa el componente.


## Creating the WebApp
- Para crear una aplicación Angular (sirivendonos de AngularCLI) se usa el comando **ng new nombreDeLaApp**. Si en la generación de la aplicación pregunta si usar routing, contestar no, y en el tipo de estilo a usar, contestar CSS.

![Creating WebApp](./course_resources/Section_3/creating_webapp_1.PNG)

![Creating WebApp](./course_resources/Section_3/creating_webapp_2.PNG)

- Se instalarán todos los paquetes necesarios para crear la aplicación. Una vez instalados, en la terminal que se usa para los comandos se debe estar dentro de la carpeta creada para el proyecto, si no, no se reconocerán los comandos ng para trabajar en la aplicación.

- Para arrancar la aplicación, usar el comando **ng serve**. Esto levanta un servidor local en el purto 4200 por defect. Si después del comando se añade el atributo **-p** se puede cambiar el puerto, si se añade el atributo **-o**, abrirá directamente el navegador con la aplicación.

![Creating WebApp](./course_resources/Section_3/creating_webapp_3.PNG)

- Tras crear la aplicación y levantarla, siempre que se haga un cambio en ella que necesite renderizarse, esto se hará de manera automática.

- En la carpeta *src > app* es dónde se crea el componente principal de la aplicación, por así decirlo, el "componente aplicación". Si se modifica su app.component.html se verá como lo que renderiza la aplicación cambia.

![Creating WebApp](./course_resources/Section_3/creating_webapp_4.PNG)

![Creating WebApp](./course_resources/Section_3/creating_webapp_4c.PNG)

![Creating WebApp](./course_resources/Section_3/creating_webapp_4b.PNG)

## Project Structure
- <u>**e2e**</u> folder: En versiones antiguas de Angular, esta carpeta es la destinada al manejo de pruebas end to end, en este curso no se trabaja con ella. Usada para pruebas unitarias y de integración (se puede abordar en otro curso de **Fernando Herrera**)
- <u>**node_modules**</u> folder: Contiene los paquetes instalados al crear la aplicación, es decir, los módulos necesarios con el fin de desarrollo, cuando se cree la versión de producción de la aplicación no se incluye esta carpeta. Todos los módulos de Node están declarados (en el package.json) y si por algún caso se borrar la carpeta, haciendo **npm install** se volverían a instalar
- <u>**src**</u> folder: Es donde está la aplicación. Está compuesta por varias carpetas y ficheros.
  - **app** folder: Contiene el primer componente de Angular en la aplicación que se va a cargar. Dentro de ella están los diferente archivos de este componente: CSS que determina el estilo del componente, HTML que determina la estructura del componente, el SPEC que se usa para pruebas unitarias y el TS que indica el comportamiento del componente. El app.module.ts posee un decorador @NgModule que sirve para indicar que es un módulo y los componentes que posee.
  - **assets** folder: Dónde se colocan los archivos estáticos. Contiene el fichero **.gitkeep** que lo único que sirve es para que git siempre tenga en cuenta la carpeta assets, aunque esté vacía (no la ignore).
  - **index.html**: Es el index de la aplicación y de hecho invoca al app component para que sea renderizado (tag **\<app-root>**).
  - **main.ts**: Contiene el código que se va a lanzar primero al ejecutar la aplicación. Contiene una función (**platformBrowserDynamic**) para preparar el entorno para el tipo de aplicación que se va a ejecutar. Esto al crear aplicaciones para otros entornos, moviles por ejemplo, cambia un poco.
  - **styles.css**: Fichero de estilos globales de la aplicación.
- <u>**.editorconfig**</u>: Contiene configuraciones del editor.
- <u>**.gitignoer**</u>: Fichero que indica al repositorio de git que tipo de ficheros / carpetas debe ignorar para el vesionado.
- <u>**angular.json**</u>: Fichero que le indica a Angular como es nuestra aplicación y como funciona. En este arhivo basicamente se modifican tres cosas: asstes, styles y scripts.
- <u>**package-log.json**</u>: Fichero que indica al Node como fue creado el package.json. Este archivo se modifica de manera automática, no se toca manualmente.
- <u>**package.json**</u>: Este fichero es muy importante ya que contiene información de la aplicación y dependencias. Se va creando de  manera automatica según vamos trabajando en la aplicación.
- <u>**README.md**</u>: Fichero que se crea automáticamente y explica como funciona la aplicación.
- <u>**tsconfig.json**</u>: Indica a TS cómo trabajar.

![Project Structure](./course_resources/Section_3/project_structure_1.PNG)

## Using Boostrap in first component
- Para al primera aplicación se va a usar la librería bootsrap (https://getbootstrap.com/) para aplicar un CSS atractivo para la misma. Para ello no se va a instalar ninguna dependencia de bootsrap, sino que directamente se usará la librería (fichero) que tienen publicado importándolo es la aplicación vía CDN. Se añade al index.html de la aplicación.

![Bootstrap CDN](./course_resources/Section_3/using_bootstrap_CDN_1.PNG)

![Bootstrap CDN](./course_resources/Section_3/using_bootstrap_CDN_2.PNG)

- Este primer componente se creará de manera manual (no mediante el comando del AngularCLI), para así entender mejor como funciona Angular. La estructura que se suele seguir es crear una carpeta **components** dentro de **app** para almacenar todos los componentes y dentro de esta una carpeta por cada componente. Empezaremos por el "header". Dentro de la carpeta header es dónde se añadirán los archivos del componente.
  - header.component.ts: Para la lógica del componente.
  - header.component.html: Para la estructura visual del componente.
  - header.component.css: Para el estilo visual del component.
  - header.component.spec.ts: Para testear el componente.

- Hay que recordar que si la clase del componente no se exporta, no se podrá  importar y añadir a **declarations** en el app.module.ts y por tanto no se podrá usar en la aplicación con su selector.

![First Component](./course_resources/Section_3/first_component_1.PNG)

![First Component](./course_resources/Section_3/first_component_2.PNG)

![First Component](./course_resources/Section_3/first_component_3.PNG)

![First Component](./course_resources/Section_3/first_component_3b.PNG)

- Ahora se va a hacer uso de bootstrap para darle un aspecto más atractivo a la aplicación, para ello se usará el *navbar* en un nuevo fichero que se llamarán header.component.html ya que la cantidad de código es mucho mayor al aconsejable poner en la propiedad **template**. Este será el que usará el componente, por lo que hay que referenciarlo en su TS, en la propiedad **templateUrl**.

![First Component](./course_resources/Section_3/first_component_4.PNG)

![First Component](./course_resources/Section_3/first_component_5.PNG)

- Se puede crear otro componente "body" dentro de la carpeta "app > components" para usarse después del "header", este debe tener su TS y su HTML, además deberá ser declarado en el app.module.tos, quedando de la siguiente manera:

![First Component](./course_resources/Section_3/first_component_6.PNG)

![First Component](./course_resources/Section_3/first_component_7.PNG)

![First Component](./course_resources/Section_3/first_component_8.PNG)

![First Component](./course_resources/Section_3/first_component_8b.PNG)

- Habiendo visto lo tediso que es crear componentes de manera manual, es el momento de crearlos usando AngularCLI con el comando **ng g c nombreDelComponente** dentro de la carpeta del proyecto / aplicación Angular. Con el compando crear el "footer", creará 4 archivos y actualizará automaticamente el app.module.ts declarando el nuevo component.

![First Component](./course_resources/Section_3/first_component_9.PNG)

- Para aplicar estilos globales de la aplicación se usa el style.css que cuelga directamente de la carpeta "src", está al mismo nivel que la carpeta "app".

![First Component](./course_resources/Section_3/first_component_10.PNG)

![First Component](./course_resources/Section_3/first_component_12.PNG)

![First Component](./course_resources/Section_3/first_component_11.PNG)

- El siguiente paso es empezar a implementar el "body". Para ello se usará las *cards* y *lists* de bootstrap, además de modificar algo el css para que el aspecto de la aplicación quede mejor. Dejando de la siguiente manera los HTML's el aspecto de la página mejor mucho. Ya sólo quedaría aplicar directivas de Angular.

![First App](./course_resources/Section_3/first_app_1.PNG)

![First App](./course_resources/Section_3/first_app_2.PNG)

![First App](./course_resources/Section_3/first_app_2b.PNG)

## Directives: *ngInf and *ngFor
- Las directivas estrucutrales son instrucciones que agregan, eliminan o reemplazan elementos HTML en la template.
- La directiva estructural *gnIf se suele utilizar para mostrar / ocultar algo del componente. Para ello se usa la directiva en el elemento que se desea mostrar / ocultar. Si la directiva es igual a true, mostrará en elemento, si es igual a false, lo ocultará. Hay que tener en cuenta que usando esta directiva, Angular lo que hace es destruir / recrear el objeto (no ocultarlo / mostarlo.). En el ejemplo, con el botón se puede cambiar el valor de la variable usada para mostrar u ocultar la zona de información. La directiva quedaría como **\*ngIf="showElement"**

![ngIf](./course_resources/Section_3/ngif_1.PNG)

![ngIf](./course_resources/Section_3/ngif_2.PNG)

- La directiva estructural *ngFor se usa pintar un mismo elemento / bloque de código varias veces con diferente información, normalmete recorriendo un array. La directiva quedaría como **\*ngFor="let element of list"**, pudiendo usar element para obetner la información. Dentro del *ngFor se puede acceder al indice (**index**) de la iteración que se está realizando.

![ngFor](./course_resources/Section_3/ngfor_1.PNG)

![ngFor](./course_resources/Section_3/ngfor_2.PNG)

![ngFor](./course_resources/Section_3/ngfor_2b.PNG)


# Section 4: SPA
- Una Single Page Application, es una WebApp que usa ruta, servicios, buscadores y que refresca sólo sus componentes sin tener que refrescar el navegador.
- De los recursos adjuntos en la sección para la realización de la WebApp, destacar el animate.css que contiene animaciones en CSS3 que harán la aplicación más atractiva y el data.txt que contiene información que mostrar en la aplicación.
- Crear la aplicación spa con **ng new spa** y renombrar la carpeta a 02-spa. Cuando en la creación se pregunta si crear routing, responder N.
- Para esta aplicación se generarán componentes compartidos, para ello, crear la carpeta app > components > shared, y dentro de ella el primer componente navbar con **ng g c components/shared/navbar**. Para este componente no necesitaremos ni su propio CSS ni su fichero de testing (SPEC.TS), por lo que se pueden eliminar. Recordar eliminar la referencia en el componente en la propiedad **stylesUrl**.

![Navbar](./course_resources/Section_4/navbar_1.PNG)

- El siguiente componente a crear podría ser el home, usando el mismo comando visto, pero esta vez dentro de la carpeta components pero no de la shared. Aquí tampoco se van a usar su CSS ni su fichero de testing, por lo que también se pueden elminar.
- Si por alguna razón se crea un componente de manera errónea, es decir, se crea en un sitio que no queremos, o nos equivocamos en el nombre, etc, AngularCLI tiene un comando para eliminarlo, pero es posible hacerlo a mano, borrando su carpeta y posteriormente actualizando el app.module.ts, que es donde se declaran los componentes de la aplicación. También se puede modificar a mano, pero habrá que actualizar también el app.module.ts con los cambios hechos.

## Libraries from 3rd parties (Bootstrap)
- Existen 3 maneras de instalar bootstrap en la aplicación:
  - Linkando la dirección CDN en https://getbootstrap.com/docs/5.3/getting-started/download/. Esta fue la manera usanda en la primera y es aplicación del curso. Es la aconsejada si se trata de una aplicación Web, ya que requerirá internet para cargar la librería, además puede que el usuario ya tenga cacheada la referencia a la librería de haber estado navegando por otras páginas. Lo que se hace es copiar el código de la página de bootstrap y pegarlo en el index.html de nuestra aplicación. Recordad que los links se colocan al principio del HTML y los scripts al final.

  ![Bootstrap](./course_resources/Section_4/bootstrap_1.PNG)

  - Descargando la librería en https://getbootstrap.com/docs/5.3/getting-started/download/. Se puede descargar la versión distribuida, copiar y pegar en el proyecto las carpetas CSS y JS. Así para utilizar bootstrap de este modo cuando se haga referencia a los ficheros habrá que indicar la ruta de donde se ha colocado dentro del proyecto. Esta manera tiene la ventaja de que no es necesaria conexión a internet, ya que la aplicación contiene ya las librerías. Normalmente, las librerías de externos, se suelen guardar en "src > assets > libs > nombreDeLalibreria".

  ![Bootstrap](./course_resources/Section_4/bootstrap_5.PNG)

  - La última manera es instalando la dependencia de bootstrap usando npm, con la instrucción **npm install** como indica la página de bootstrap https://getbootstrap.com/docs/5.3/getting-started/download/. Añadiendo el atributo **--save** a la instalación le indicamos a Angular que esta va a ser una librería que va a necesitar. Una vez instalado se puede comprobar que se ha añadido a la carpeta "node_modules". Así se isntala la última versión estable, se puede ver añadida al package.json del proyecto. En el curso, con la versión 4.1 de Bootstrap era necesario instalar jquery y popper.js ya que se informaban en unos warnings, pero a mi me ha instalado la versión 5.2 y no ha aparecido ningún warning, por lo que entiendo que esta dependencia ya no existe. Lo ultimo sería añandir en el angular.json el estilo de la aplicación, que en nuestro caso será aplicado por la librería Bootstrap. Esto se hace añadiendo esta información en los campos **styles** y **scripts**, así AngularCLI sabrá como funciona la aplicación. Después de esto es necesario parar la aplicación y volver a levantarla. Esta última manera hace que todas las librerías formen parte del bundle, y puede hacer que la librería pese un poco más.

  ![Bootstrap](./course_resources/Section_4/bootstrap_3.PNG)

  ![Bootstrap](./course_resources/Section_4/bootstrap_4.PNG)

  ![Bootstrap](./course_resources/Section_4/bootstrap_5.PNG)

  ![Bootstrap](./course_resources/Section_4/bootstrap_6.PNG)

- Si tras aplicar alguna de estas maneras para añadir bootstrap a la aplicación y volver arrancarla, se comrprueba que el estilo ha cambiado (aunque sea minimamente) y no hay errores en la terminal o en la consola del navegador, es que se ha hecho bien.
  
## Components configuration
- Lo primero es copiarse todos los recursos descargados a la carpeta "assets > imgs" del proyecto.
- El favicon.ico reemplazarlo por el de los recursos de la sección.
- Para el componente navbar usar el código de navbar de bootstrap https://getbootstrap.com/docs/5.3/components/navbar/#how-it-works
- Para el componente home usar el código de jumbotron de bootstrap https://getbootstrap.com/docs/5.3/examples/jumbotron/
- En este punto hay que añadir 2 nuevos componentes, uno para los "heroes" y otro para el "about"

## Routing
- Las rutas permiten navegar entre componentes / paginas de nuestra WebApp sin necesidad de hacer refresh del navegador. Si se creo el proyecto sin routing, habrá que crear el fichero donde configurar las rutas, si por el contrario se creo con routing, este fichero ya existirá y sólo habrá que ir actualizandolo. El fichero se encuentra al mismo nivel que el app.module.ts. Existe una convención para que este archivo se llame **app.routes.ts**. Con la extensión Angular 10 Snippets (en mi caso) tendremos sugerencias para crear este módulo de rutas en Angular. Cuando el curso se creó, el componente de rutas se creaba con ng2-routes, pero parece que esto ya no existe en mi versión (15), y ahora se usa **ng-router-appmodule**. Al fichero de rutas también se le suele llamar **app-routing.module.ts**.

![Routing](./course_resources/Section_4/routing_1.PNG)

- Una vez creado el contenido del fichero, hay que crear las diferentes rutas de la aplicación. Por ahora con definir la ruta del home y del about es suficiente. Al forRoot es recomendable usar el hash con **{useHash: true}** para evitar problemas en el envío de parámetros. Por otro lado en el index.html se indica **base href="/"**, si esto se quita / comenta y no se usan rutas, la aplicación va a dar error (No base href set).

![Routing](./course_resources/Section_4/routing_2.PNG)

![Routing](./course_resources/Section_4/routing_2b.PNG)

- Una cosa muy importante, si no, no se podrán usar las rutas, es ten el app.module.ts indicar que se va a importar el sitema / módulo de rutas. Para ello en el campo **imports** añadir el **AppRoutingModule**. En el curso se hace algo diferente ya que la versión de Angular es más antigua y esto ha cambiado en la versión que yo uso (15)

![Routing](./course_resources/Section_4/routing_3.PNG)

- En el app.component.html con el selector **router-outlet** es como indicamos que ese ahí se renderizará un componente según la ruta.

![Routing](./course_resources/Section_4/routing_4.PNG)

- Terminar de añadir las rutas e indicar que para un path no definido que redireccione a lo mismo que hace la ruta home.
- Ahora se va a añadir **routerLink** en los elementos del navbar con los que queremos hacer que se navegue. A estas directivas de Angular se les asigna un array, donde cada posición del array es un segmento del path que va a cargar y por tanto su componente asociado y definido en el app.routes.ts.

![Routing](./course_resources/Section_4/routing_5.PNG)

- Para mejorar la transición entre componentes se puede incluir el animate.css de los recursos de la sección. El contenido de este fichero se puede pegar en el style.css de la aplicación.
- Por último en relación a las rutas es hacer que el estilo del navbar se actualice según ruta seleccionada. Se debe a que no se le está colocando la clase active al elemento. Esto se puede hacer usando el **routerLinkActive** en cada "a" del "navbar" e igualándolo a la clase que se quiere aplicar cuando se seleccione la ruta.

![Navbar](./course_resources/Section_4/navbar_2.PNG)

## Heroes Component
- Para montar este componente se va a usar las "cards" de Bootstrap en https://getbootstrap.com/docs/5.3/components/card/#about

![Heroes](./course_resources/Section_4/heroes_1.PNG)

![Heroes](./course_resources/Section_4/heroes_2.PNG)

![Heroes](./course_resources/Section_4/heroes_2b.PNG)

- La información para rellenar este componente debe ser proveida por un servicio, es estandar y buena práctica.

## Heroes Service
- La idea de los servicios es aislas los datos de los componentes y que estos sólo se encarguen de pintar cosas y si tienen que hacer alguan lógica es en referencia a los datos que tratan, no a obtener datos, estos deben ser proveidos por un servicio. Así, si otro componente necesita los mismos datos que el anterior, puede usar este servicio también.
- Los servicios:
  - Proveen información a quien lo necesite
  - Realizan peticiones CRUD
  - Persistencia de datos
  - Recurso reutilizable
- AngularCLI permite crear servicios con la instrucción **ng g s nombreDelServicio**. Se suelen organizar dentro de una carpeta "app > services"

![Heroes service](./course_resources/Section_4/heroes_service_1.PNG)

- Una vez creado, se puede inyectar en el componente que se quiera usar. Para ello, en el constructor del componente añadir un argumento privado del tipo del servicio. En nuestro caso, en el componente heroes. Cuando se inyecta un servicio, sólo se hace una vez y aunque se vuelva a llamar al componente, no se vuelve a crear el servicio. Es decir, ya queda inyectado en el momento que se crea el primer componente que lo use (como un singleton de Java).

![Heroes service](./course_resources/Section_4/heroes_service_2.PNG)

- En el curso indica que los servicios hay que declararlos en el app.module.ts en la propieda **providers**, pero el lo crea de manera manual, sin comando y a mi no se me ha actualizado, pudiendo usarlo / inyectarlo correctamente en el componente. Así parece que ya no hace falta dicha declaración.
- Para rellenar de información el servicio, se usarán los datos del fichero data.txt proporcionado en los recursos del curso y se puede añadir como array dentro del servicio. Con una función pública el servicio puede proveer dicha información y usar dicha función en el heroes component.

![Heroes service](./course_resources/Section_4/heroes_service_3.PNG)

- El sitio adecuado donde hacer una llamada a un servicio y guardar su valor en un campo de un componente es el ngOnInit. Aquí es dónde se debería hacer y ya con los datos crear el contenido del componente.

![Heroes service](./course_resources/Section_4/heroes_service_4.PNG)

![Heroes service](./course_resources/Section_4/heroes_service_4b.PNG)

- Con toda la información proporcionada por el servicio se puede construir el componente heroes usando la directiv *ngFor.

![Heroes service](./course_resources/Section_4/heroes_service_5.PNG)

![Heroes service](./course_resources/Section_4/heroes_service_5b.PNG)

- Una ultima cosa para dejar bien el código sería que el array de heroes no fuese de tipo any, sino que fuese del tipo Heroes (interfaz). Se puede crear la interfaz dentro del servicio y exportarla para poder usarla en los componentes también.

![Heroes service](./course_resources/Section_4/heroes_service_6.PNG)

![Heroes service](./course_resources/Section_4/heroes_service_7.PNG)

![Heroes service](./course_resources/Section_4/heroes_service_8.PNG)

- Un detalle cuando se asigna un valor a un atributo (src, alt, etc) de un elemento, es que aunque funcione usando **{{}}**, es mejor modo, poner entre **[]** el atributo, para indicar que eso lo maneja Angular e igualarlo directamente al valor / campo del componente sin poner nada más. Para lo que hay dentro de una etiqueta de un elemento si que se usa la interpolación (**{{}}**)

![Heroes service](./course_resources/Section_4/heroes_service_9.PNG)

- Hay dos mejoras que se pueden hacer, una es la de indicar en la fecha de aparición sólo el año y mes y en la biografia controlar el número de caracteres a mostrar. Para ello se usan los **Pipes** que se verán más adelante.

## Routing with Router and ActivatedRoute parameter
- Lo primero será crear un componente heroe que contenga toda la información de un heroe. Eb mi caso lo llamaré hero-detail, por difenrenciarlo un poco de la interfaz que se creó en el punto anterior.
- Lo siguiente es añadir la nueva ruta de este componente al app.routes.ts. A la ruta habrá que indicarle que se le pasa un id para que el componente sepa de qué heroe se trata.

![Routing parameter](./course_resources/Section_4/routing_parameter_1.PNG)

- Lo siguiente es modificar el botón del componente heroes para que permita navegar a otra página. Pero aquí se tiene que tener en cuenta que si se usa routerLink como vimos anteriormente no va a funcionar, ya que el componente está dentro del router outlet, no como en el otro ejemplo, que el menú de navegación estaba en el header que era común y por tanto no estaba dentro del router outlet. Para que funcione es necesario moverse a la raiz. Si se escribe en el navegador "http://localhost:4200/heroe/1" funcionaría.

![Routing parameter](./course_resources/Section_4/routing_parameter_2.PNG)

- Hay dos formas de arreglar esto, o se modifica la ruta en el app.routes.ts, teniendo en cuenta que intentamos acceder a la ruta heroe cuando estamos en la de heroes. Aunque esta no es buena y aque interasa no cambiar la url de la raiz.

![Routing parameter](./course_resources/Section_4/routing_parameter_3.PNG)

- La segunda opción para arreglar esto sería en el routerLink en lugar de poner "heroe" directamente se pone "**/**heroe", que es lo aconsejable, logicamente sin modificar la ruta.

![Routing parameter](./course_resources/Section_4/routing_parameter_4.PNG)

- Por ahora se ha visto como hacer la redirección sustituyendo el "button" por un "a". Pero si queremos mantener el buttón, habría que hacer la redirección usando programación en el TS del componente. Para ello en el evento click del botón se asigna una función que hay que implementar usando el módulo Router. Para poder usarlo, hay que hacer igual que con un servicio, inyectarlo en el constructor. Con su función **navigate** y pasandole como parámetros lo mismo que al routerLink, se podrá navegar pulsando el botón que llama a esta función.

![Routing parameter](./course_resources/Section_4/routing_parameter_5.PNG)

![Routing parameter](./course_resources/Section_4/routing_parameter_6.PNG)

- Lo siguiente es obtener el index que se manda por parámetro en el componente que tiene el detalle del heroe. Para esto se usa **ActivatedRoute**. Su propiedad **param** devuelve un observable (algo parecido a una promesa) que está atento de los cambios ne los parámetros de la ruta. Para ello es necesario suscribirse al observador. Así se obtiene el parámetro definido en la ruta (en este casi id) con su valor.

![Routing parameter](./course_resources/Section_4/routing_parameter_7.PNG)

- Ya conociendo el id del heroe, añadiendo un servicio al HeroesService para obtener el heroe a partir del id tendríamos toda la información que se necesita para pintar el componente de detalles del heroe.

![Routing parameter](./course_resources/Section_4/routing_parameter_8.PNG)

![Routing parameter](./course_resources/Section_4/routing_parameter_9.PNG)

## Heroe Component and Pipes

- Con la la información ya en el componente, se puede diseñar la pantalla de detalle de heroe y usar los datos.

![Heroe detail](./course_resources/Section_4/heroe_detail_1.PNG)

![Heroe detail](./course_resources/Section_4/heroe_detail_2.PNG)

- Las Pipes son elementos de Angular que permiten modificar la visualización de datos basandose en templates, por ello hay un número determinado y definido de Pipes (https://angular.io/guide/pipes). En este componente se puede hacer que el nombre del título siempre en mayúsculas y que de la fecha sólo se muestre el año.

![Pipes](./course_resources/Section_4/pipes_1.PNG)

- Para usar las Pipes se utiliza el caracter **|**, de ahí su nombre (pipe, tubería)

![Pipes](./course_resources/Section_4/pipes_2.PNG)

![Pipes](./course_resources/Section_4/pipes_3.PNG)

## Search Heroes feature
- En el navbar está el control de buscar. Lo que se quiere aquí es que se use para poder buscar cualquier heroe de los que aparezcan en la WebApp
- Para facilitar el trabajo con los elementos del dom, se puede usar un alias con el carcater **\#** y después el nombre que se le quiera dar.
- Para asociar un evento en un elemento, se pone el nombre del evento entre **()**. Con ello y lo explicado anteriormente se puede asociar una función al evento y pasarle el valor del elemento para así poder filtrar. Un detalle con respecto al curso, es que si se hace enter en el input se hará submit del formulario, al igual que si se pulsa el botón "Search". Por ello hay que hacer dos modificaciones extras, una es cambiar el form por un div y otra es cambiar en el botón que sea de tipo button en lugar de submit.

![Search heroe](./course_resources/Section_4/search_hero_1.PNG)

- Ahora la función en el navbar
  
![Search heroe](./course_resources/Section_4/search_hero_2.PNG)
  
- Como ejercicio añadir un componente que muestre los heroes fildtrados por nombre. Es decir, habría que crear una función nueva en el heroes service que devuelva los heroes filtrados. Ésta deberá ser llamada desde el componente nuevo para pintar la pantallla al mismo estilo que la del componente heroes. Previamente, la navbar debe proporcionarle el texto introducido por el usuario para que el nuevo componenten se lo pase a la función del servicio. Además habrá que añadir la ruta del nuevo componente.

![Search heroe](./course_resources/Section_4/search_hero_3.PNG)

![Search heroe](./course_resources/Section_4/search_hero_4.PNG)

![Search heroe](./course_resources/Section_4/search_hero_5.PNG)

![Search heroe](./course_resources/Section_4/search_hero_6.PNG)

![Search heroe](./course_resources/Section_4/search_hero_7.PNG)

![Search heroe](./course_resources/Section_4/search_hero_8.PNG)

![Search heroe](./course_resources/Section_4/search_hero_9b.PNG)

- La única diferencia del heroes filtered al heroes es que he quitado el botón de ver más para diferenciarlos, además porque la función de ver detalles no funciona aquí correctamente ya que le pasa el index de un elemento del array filtrado y no del total de heroes y por tanto los detalles a los que redirecciona son del heroe equivocado (podéis probar). La manera de solucionar esto podría ser crear otra función en el service que se basara en este array filtrado para buscar los detalles del heroe, modificar el buscar detalles para que no se basara en el index si no en otra cosa (el nombre por ejemplo) y la última opción que se me ocurre sería modificar el array de datos para que tuviese un campo ID y que este fuese el que se pasara en la ruta para el detalle del heroe y por el que se filtrase (para mí la más fiable). No se que solución buscará Fernando (el profesor), o ni si quiera si lo hará ya que creo que esto en particular no es el fin de esta parte de la sección. Pero tras ello tomaré una decisión para la resolución, ya que creo que es una feature que debería aparecer.
- En la resolución del ejercicio, las únicas diferencias fueron que la implementación de la función para obtener los heroes filtrados se llama difernte y no está hecha con .filter. Quel el HTML del componente es ligeramente diferente (lo voy a adaptar al de la resolución por dejarlo igual) y que en la lógica del nuevo componente la hace en el ngOnit y no en el constructor como yo.
- En la resolución se propuso que el componente mostrara algo de información en el caso de que no encontrase nada. Para ello se crea una division para mostrar el mensaje y con una variable se decide si mostrar o no.

![Search heroe](./course_resources/Section_4/search_hero_10.PNG)

![Search heroe](./course_resources/Section_4/search_hero_10b.PNG)

## @Input: Information from parent to son
- La idea es construir componentes usando otros componentes, por ejemplo un nuevo componente podría ser una tarjeta de heroe con la que se construye el componente heroes.Por tanto, crear un componente heroe tarjeta (heroe-card) cuyo HTML sea el del div que se usaba con el ngFor en el componente heroes, pero sin la directiva.
- En esto punto se necesita enviar información de heroes a heroe-card, para ello es necesario el decorador **@Input()**, que lo que hace es indicarle a Angular que una propiedad que se quiere usar puede venir "de fuera" (ojo que hay que importarlo del core de Angular). Esto permite que desde el componente padre, cuando se usa el tag del componente hijo, se le pase información asignando el nombre entre **[]**.

![Input](./course_resources/Section_4/input_1.PNG)

![Input](./course_resources/Section_4/input_2.PNG)

![Input](./course_resources/Section_4/input_3.PNG)

- La función de ver detalle no está funcionando. Se puede utilizar el **@Input** para también pasar el indice y que así funcione correctamente.

![Input](./course_resources/Section_4/input_4.PNG)

![Input](./course_resources/Section_4/input_5.PNG)

- Como tarea se propone utilizar del mmismo modo la reutilización de componentes en el heroes filtered. Tras hacerla, aunque ahora se esté usando un componente reutilizable el problema que teníamos al ver los detalles del hereo (index erróneo) sigue ocurriendo.

![Input](./course_resources/Section_4/input_6.PNG)

![Input](./course_resources/Section_4/input_6b.PNG)

## @Output: Information from son to parent
- Se puede utilizar la situación actual del error del indice para solventar el problema. En lugar de implementar la función goToHeroeDetail en el heroe-card, usar directamente la del padre. Para ello se usa el **@Output** que va de la mano con el **EventEmitter**. Aquí se crea una propiedad que será el evento que el padre estará escuchando, llevará el decorador Output y será de tipo EventEmitter. Al principio marcará error ya que hay que especificar el tipo de objeto / interfaz que devuelve la función asociada al evento. Además hay que inicializarlo en el constructor del componente.
- Lo que se hace es que en la función del hijo se emite con **emit** el parametro necesario para la función que se quiere ejecutar del padre, en nuestro caso el index (id) del heroe del que se quieren ver los detalles.

![Output](./course_resources/Section_4/output_1.PNG)

- Lo siguiente es hacer que el padre escuche el evento enviado. Como lo que se ha hecho es crear un evento, se trata igual que cualquier otro (click, change, etc). Para recibir el parametro del evento se usa **$event**.

![Output](./course_resources/Section_4/output_2.PNG)

- Por ahora sólo se ha cambiado esto en el heroes pero no en el heroes filtered que es donde teníamos el error. Prosigamos a solucionarlo. La solución propuesta por Fernando (profesor) es que cuando se monta el array de heroes filtrados en el servicio añadir una propiedad a cada heroe del array que indique su indice y así posteriormente usarlo. Imagino que hace esto suponiendo un caso real en el que no pudiesemos modificar la data. Además revierte los cambios del envio de eventos. Yo mantendré el envio de evento y no modificaré la función, si no que añadiré el indice en el constructor del servicio, ya que lo veo más elegante.

![Output](./course_resources/Section_4/output_3.PNG)

![Output](./course_resources/Section_4/output_4.PNG)

![Output](./course_resources/Section_4/output_5.PNG)

- Además la función goToHeroDetail está implementada dos veces igual, una en heroes y otra en heroes filtered, habría que llevarla al heroes service, ya que ambos componentes inyectan el heroes services. Sólo tendríamos que usar el Router en el heroes services.

![Output](./course_resources/Section_4/output_6.PNG)

![Output](./course_resources/Section_4/output_7.PNG)

![Output](./course_resources/Section_4/output_8.PNG)

![Output](./course_resources/Section_4/output_9.PNG)

# Section 5: Pipes
- Ya se ha hecho una introducción anteriormente a los Pipes, pero en esta sección se tratarán en profundidad.
- Los Pipes son funciones que reciben uno o más argumentos y lo va a procesar para cambiar su formato. No cambia el objeto que trata, sólo crea una salida formateada a partir de la entrada que recibe.
- Para usar los Pipes (tuberías) se usa el caracter **|**.
- Hay un número limitado y definido de pipes que se pueden usar en Angular https://angular.io/guide/pipes:
  - DataPipe
  - UpperCasePipe
  - LowerCasePipe
  - CurrencyPipe
  - DecimalPipe
  - PercentPipe
- Es posible crear Pipes personalizados.
- Se usan las Pipes normalmente
- Para usar los pipes que vienen incluidos en Angular no hay que importar nada.

## WebApp: Pipes
- Se creará un proyecto llamado pipes con **ng new pipes** donde se trabajarán los diferentes tipos de pipes.
- En el app component iremos añadiendo todos los tipos de pipes.

![Pipes](./course_resources/Section_5/app_1.PNG)

![Pipes](./course_resources/Section_5/app_2.PNG)

- **lowercase** y **uppercase** son pipes que se usan para capitalizar strings
- **slice** se usa para cortar strings o arrays
- **decimal** se usa para mostrar números con más o menos decimales. La palabra clave para usarlo es **number**

![Pipes](./course_resources/Section_5/app_3.PNG)

![Pipes](./course_resources/Section_5/app_4.PNG)

![Pipes](./course_resources/Section_5/app_4b.PNG)

- **percent** se usa para mostrar porcentajes. Permite mostrar más o menos decimales.
- **currency** se usa para aplicar una moneda determinada basandose en los código establecidos por la ISO 4217. Se puden crear monedas personalizadas (como LMP). Permite mostrar más o menos decimales.

![Pipes](./course_resources/Section_5/app_5.PNG)

![Pipes](./course_resources/Section_5/app_6.PNG)

![Pipes](./course_resources/Section_5/app_6b.PNG)

- **JSON** se usa para ver en formato JSON un objeto (no el tipico [object Object]). Este pipe puede fallar si el objeto tiene algunas funciones. Para representar un JSON se puede usar la etiqueta **pre**, que bootstrap los muestra mejor.
- **async** no recibe ningún argumento pero si una expresión. Sirve para trabajar con datos asíncronos, y saber lo que response cuando se resuelve o rechaza, lo único que para ver la respuesta de lo rechazado no sólo en la consola del navegador hay que capturar el error.

![Pipes](./course_resources/Section_5/app_7.PNG)

![Pipes](./course_resources/Section_5/app_8.PNG)

![Pipes](./course_resources/Section_5/app_8b.PNG)

- **date** es un pipe para trabajar con fechas y posee muchas configuraciones. En la página de Angular se pueden en contrar todas y es aconsejable echarle un ojo.

![Pipes](./course_resources/Section_5/app_10b.PNG)

- Existe un paquete para localizar la aplicación, se puede añadir con **ng add @angular/localize**. Tras ello hay que hacer los imports en el app.module.ts, crearse una función y añadir en los providers el *LOCALE_ID* con valor *es*. Tras ello los formatos del pipe **date** cambiarán a la localización especificada, en nuestro caso España, y no sólo eso, incluso traducirá el mes. Este paquete afecta incluso a los formatos de las monedas (ahora el tipo de moneda se ve al final del importe, no al princpio).

![Pipes](./course_resources/Section_5/app_9.PNG)

![Pipes](./course_resources/Section_5/app_11.PNG)

![Pipes](./course_resources/Section_5/app_11b.PNG)

![Pipes](./course_resources/Section_5/app_11bb.PNG)

- El paquete **localize** instala todos los idiomas en la máquina pero no están disponibles en la aplicación hasta que no se registran. Esto se hace en el app.module.ts. Cuando importamos el idioma lo tenemos disponible, y cuando lo configuramos en el providers del app.module.ts lo establecemos como idioma por defecto.
- Se puede indicar el idioma de la fecha según se quiera. Por ejemplo se puede serleccionar que la fecha aparezca en ingés (**en**).

![Pipes](./course_resources/Section_5/app_12.PNG)

![Pipes](./course_resources/Section_5/app_12b.PNG)

- Por defecto el idioma es inglés y nosotros previamente instalamos el español. Si re quiere por ejemplo el francés, sería necesario instalarlo previamente.

![Pipes](./course_resources/Section_5/app_13.PNG)

![Pipes](./course_resources/Section_5/app_14.PNG)

![Pipes](./course_resources/Section_5/app_14b.PNG)

- Intentar un ejercicio que mediante botones se pueda cambiar el idioma en el que se muestra la fecha.

![Pipes](./course_resources/Section_5/app_15.PNG)

![Pipes](./course_resources/Section_5/app_16.PNG)

![Pipes](./course_resources/Section_5/app_16b.PNG)

## Custom Pipes
### Capitalize
- Es posible crear pipes personalizados y en este punto se va a crear uno para capitalizar palabras.
- Crear un pipe es muy fácil usando AngularCLI con **ng g p pipes/capitalize**, normalmente se crean en la carpeta pipes. Tras ejecutar el comando se crea un TS y un TS de testing para el pipe creado, además se actualiza el app.module.ts que lo añade automaticamnete a los **declarations**. En el TS del pipe se puede ver como tiene el decorative @Pipe, implementea PipeTransform y además tiene una función transform que es la que es llamda cuando se usa el pipe.

![Custom Pipe](./course_resources/Section_5/custom_pipe_1.PNG)

![Custom Pipe](./course_resources/Section_5/custom_pipe_2.PNG)

![Custom Pipe](./course_resources/Section_5/custom_pipe_3.PNG)

- Ahora hay que trabajar con el pipe para indicar que se quiere hacer. Haciendo un pequeño cambio, sólo indicando que el pipe devuelve un string fijo (Hello World).

![Custom Pipe](./course_resources/Section_5/custom_pipe_4.PNG)

![Custom Pipe](./course_resources/Section_5/custom_pipe_5.PNG)

![Custom Pipe](./course_resources/Section_5/custom_pipe_5b.PNG)

- Modificando enteramente lo que queremos que haga el pipe

![Custom Pipe](./course_resources/Section_5/custom_pipe_6.PNG)

![Custom Pipe](./course_resources/Section_5/custom_pipe_7.PNG)

![Custom Pipe](./course_resources/Section_5/custom_pipe_7b.PNG)

### SecureDom
- Se va a crear un pipe que verifique que al añadir un URL externo a la aplicación, éste sea seguro. Antes que nada, intentar usar un link externo a la aplicación, por ejemplo un link de youtube, se puede ver que el navegador muestra muchos errores debido a la incrustación de este enlace, pero aún así, la aplicación carga sin problemas y se puede ver el video.

![Custom Pipe](./course_resources/Section_5/custom_pipe_8.PNG)

![Custom Pipe](./course_resources/Section_5/custom_pipe_8b.PNG)

- Conviritendo la URL del video en una pripiedad e insertandola en el HTML, Angular retorna un error NG0904: unsafe value used y no muestra el video incrustado.

![Custom Pipe](./course_resources/Section_5/custom_pipe_9.PNG)

![Custom Pipe](./course_resources/Section_5/custom_pipe_10.PNG)

![Custom Pipe](./course_resources/Section_5/custom_pipe_10b.PNG)

- Para poder mostrar este tipo de enlaces / recursos en la aplicación sin que Angular los bloquee es necesario crear un pipe para ello. En este caso lo llamaremos **securedom**. En el pipe se usará el **DomSanitizer** para poder verificar el recurso. Con los cambios, se mostrará el recursos, aunque los errores del browser volverán a aparecer ya que está bloqueando peticiones de esa URL incrustada.

![Custom Pipe](./course_resources/Section_5/custom_pipe_13.PNG)

![Custom Pipe](./course_resources/Section_5/custom_pipe_11.PNG)

![Custom Pipe](./course_resources/Section_5/custom_pipe_12.PNG)

![Custom Pipe](./course_resources/Section_5/custom_pipe_12b.PNG)

## Pipes Task
- Se propone hacer una tarea en la que hay que hacer un pipe password y en la pantalla añadir un botón que active / desactive muestre o no oculto el campo name, por medio de \*, tantos como longitud del name. Me he tomado un poco de libertad en la resolución haciendo que el botón cambio según la password esté activa o no.

![Pipe Task](./course_resources/Section_5/pipe_task_1.PNG)

![Pipe Task](./course_resources/Section_5/pipe_task_2.PNG)

![Pipe Task](./course_resources/Section_5/pipe_task_3.PNG)

![Pipe Task](./course_resources/Section_5/pipe_task_4.PNG)

![Pipe Task](./course_resources/Section_5/pipe_task_4b.PNG)

![Pipe Task](./course_resources/Section_5/pipe_task_4bb.PNG)

- La resolución de Fernando (profesor) usa la función **repeat** para montar la palabra encriptada con \* además de una ternaria. Yo usé un bucle for para montar la palabra encriptada ya que desconocía esta función, ahora ya la conozco =D. El no creo función para el evento click del botón, niega directamente la variable, esta es la opción rápida, pero como yo hice 2 botones preferí hacer una función que hiciera esto, además que prefiero tener la mayor lógica posible fuera del HTML.

# Section 6: SpotiApp
- Se va a crear una aplicación usando la API de Spotify, usando sobre todo el módulo HTTP. Otra cosa interesante será el tratamiento de los datos que se reciben de un servicio y la persistencia de los mismos en la navegación entre páginas.
- Los servicios de Spotify se pueden ver en https://beta.developer.spotify.com/console/ y en esta página se indica en la sección *Getting started* los pasos para obtener las credenciales para poder llamar a los servicios. Es recomendable hacer login con su cuenta de Spotify.

![Spoti API](./course_resources/Section_6/spoty_api_1.PNG);

- Crear la aplicación de angular **spotiapp** y en ella para comenzar algunos componetentes, home, search, artist y la navbar en shared, sin fichero de pruebas y con el estilo integrado en el TS. Como es posible que la manera de declarar los atributos cambien en versiones posteriores de Angular (como me ha pasado a mi desde que el curso se creó), se pueden consultar los atributos aquí https://angular.io/cli/generate#component-command. 

![SoptiApp](./course_resources/Section_6/app_1.PNG);

- De los recursos de la sección copiar la carpeta img en assets y el fichero de estilos style.css remplazando el existente por defecto. Además de esto, importar Bootstrap tal y como se ha hecho en secciones anteriores (con CDN que es la maera más rápida y simple en el index.html)

![SoptiApp](./course_resources/Section_6/app_2.PNG);

-  Acceder al dashboard en la página de Spotify y acceder los terminos.

![Spoti API](./course_resources/Section_6/spoty_api_2.PNG);

- Una vez aquí se puede crear la aplicación que se enlazará con nuestra aplicación de Angular.

![Spoti API](./course_resources/Section_6/spoty_api_3.PNG);

![Spoti API](./course_resources/Section_6/spoty_api_4.PNG);

- Una vez creada, se podrá obtener el Client ID y el Client Secret, ambas van a ser necesarias para obtener un token. En el momento de crear yo la cuenta de Spotify esta información estaba en *Settings*.

![Spoti API](./course_resources/Section_6/spoty_api_5.PNG);

## Routing
- En la carpeta app crear un fichero app.routes.ts para las rutas, en este, importar el **router** para usar el módulos **Routes**. Es necesarios exportar el array de rutas llamado ROUTES que será donde se almacenen todas las rutas de los componentes. Este archivo sólo contiene las rutas a usar en la aplicación, el módulo de rutas se pondrá en el app.module.ts, esto es algo diferente a como se hizo anteriormente, pero es más ordenado.

![SoptiApp](./course_resources/Section_6/app_3.PNG);
  
## Componets develop
- Empezar a crear la aplicación sustituyendo en el app.component.html y montado los diferentes componentes. Por ejemplo para el navbar usar el navbar de boostratp con algunos cambios.

![SoptiApp](./course_resources/Section_6/app_4.PNG);

![SoptiApp](./course_resources/Section_6/app_5.PNG);

![SoptiApp](./course_resources/Section_6/app_5b.PNG);

## HTTP requests introduction
- Para hacer un pequeño ejemplo antes de empezar a usar la API de Spotify y ver como se usan las petición HTTP en Angular, se puede usar el siguiente link https://restcountries.com/. Aquí se pueden ver endpoints de servicios como https://restcountries.com/v3.1/lang/{currency}.

![SoptiApp](./course_resources/Section_6/app_6.PNG);

![SoptiApp](./course_resources/Section_6/app_7.PNG);

- Con Postman (https://www.postman.com/) se puede probar la petición GET https://restcountries.com/v3.1/lang/spanish, si no, directamente en el navegador. Devuelve todos los paises de habla hispana.
- Ya en nuestra aplicación, para poder obtener este tipo de información es necesario importar en el app.module.ts el módulo **HttpClientModule** y añadirlo a la parte de los **imports**.

![SoptiApp](./course_resources/Section_6/app_8.PNG);

- Para usar las herramientas de este módulo, se ha de inyectar el módulo **HttpClient** en un componente, por ejemplo el home. Y listar los países con alguna información más.

![Http Introduction](./course_resources/Section_6/http_introduction_1.PNG);

![Http Introduction](./course_resources/Section_6/http_introduction_2.PNG);

![Http Introduction](./course_resources/Section_6/http_introduction_2b.PNG);

## Token for Spotify services
- Para poder usar los servicios de Spotify es necesario usar un token que nos proveen. Es necesario hace una petición para obtener un token.
- En la documentación de la web de Spotify para desarrolladores hay informaicón relacinada con las diferentes plataformas dónde se puede usar. Nosotros nos centraremos en la Web API y en ella la guía de autorización, acutalamente en https://developer.spotify.com/documentation/web-api/concepts/authorization

![Spoti API](./course_resources/Section_6/spoty_api_6.PNG);

- Leyendo la documentación se informa que es en la autorización donde se debe especificar los tipos de accesos que vamos a necesitar (leer una playlist, modificar tu librería o sólo escuchar). Los tipos de scope se puede encontrar aquí https://developer.spotify.com/documentation/web-api/concepts/scopes.
- Para el proceso de autorización será necesario el ClientID y el Client secret. Aquí https://developer.spotify.com/documentation/web-api/concepts/apps se indica como generar nuevos.
- La API de Spotify usa el standar OAuth2 que define 4 tipos/ flujos de peticiones y obtención del token de acceso. Se debe usar el que más se ajuste a la aplicación que estamos haciendo. En el curso se usa *Client credentials* (https://developer.spotify.com/documentation/web-api/tutorials/client-credentials-flow) ya que para obtener el Token se hace desde Postman. Postman monta un servidor y Spotify permite obtener un token solicitándolo desde aquí. Leyendo los diferentes flujos de peticiones, para nuestro caso, me cuadra más Authorization Code with PKCE Flow, pero leyendo como se ha de implementar requiere más trabajo. Creo que por ahora no vale la pena implementar esta manera (al terminar el curso lo haré).

![Spoti API](./course_resources/Section_6/spoty_api_7.PNG);

![Spoti API](./course_resources/Section_6/spoty_api_8.PNG);

- Accediendo a **Postman** (tiene versión web y de escritorio), haciendo una petición POST a https://accounts.spotify.com/api/token e informando los parámetros necesarios para la llamada, se obtiene el token. Este token caduca en 1hora por lo que hay que generalo de vez en cuando para implementar la aplicación.
- Lo primero sería tener un workspace donde hacer las petición. Una vez creado, configurar una nueva petición Http tal y como indica la web de la API de Spotify, es decir, añadiendo lso tres parámetros. El client id y el client secret se obtienen en el perfil de la web de la API de Spotify en **Settings**. En la respuesta de la petición se provee el token, en el campo **access_token** además de indicar el tiempo de expiración.

![Spoti API](./course_resources/Section_6/spoty_api_9.PNG);

![Postman](./course_resources/Section_6/postman_0.PNG);

![Postman](./course_resources/Section_6/postman_1.PNG);

![Postman](./course_resources/Section_6/postman_2.PNG);

- Una vez con el token ya se pueden hacer peticiones a la API de Spotify.

- En el menú de la izquierda la documentación se pueden encontrar toda la información que podemos obtener, como por ejemplo, los nuevos lanzamientos en *Get New Releases* https://developer.spotify.com/documentation/web-api/reference/get-new-releases

![Spoti API](./course_resources/Section_6/spoty_api_10.PNG);

- Dentro de la aplicación Angular, siempre que se quiere acceder a un API lo ideal es crear un servicio que se encargue de ello. Podemos crear el servicio llamado spotify. El servicio se crea con el decorador **@Injectable** que lo que hace es que Angular crea una sóla instancia del servicio para toda la aplicación además ya no hace falta (desde Angular6) añadirlo al app.module.ts ya que al crearlo ya lo incluye en el **provideIn: 'root'**, por lo que no hace falta. Antes on añadía esta propiedad en el decorador y había que añadirlo en la propiedad **providers** del app.module.

![SoptiApp](./course_resources/Section_6/app_9.PNG);

![SoptiApp](./course_resources/Section_6/app_10.PNG);

- Usando tanto el token como el endpoint se puede llamar al servicio y obtener la información. Para los servicios hay que informar el token en la cabecera en el parámetro *Authorization* e igualandolo a "Bearer " concatenado del token, y para esto se usa la clase **HttpHeaders** del HttpClientModule

![SoptiApp](./course_resources/Section_6/app_10.PNG);

![SoptiApp](./course_resources/Section_6/app_11.PNG);

![SoptiApp](./course_resources/Section_6/app_12b.PNG);

- Ahora que ya se ha comprobado que podemos obtener información de la API de Spotify, podemos comenzar a implementar la aplicación. Usando cards y badges de bootstrap se puede empezar a implementar el home. Aquí se podría mostrar cada album de los obtenido como una tarjeta.
- Hay que controlar cuando se recibe la información. Por ello es que el servicio devuelva la petición y sea el home quien gestione el subscribe, así sabrá cuando llegan los datos.

![SoptiApp](./course_resources/Section_6/app_13.PNG);

![SoptiApp](./course_resources/Section_6/app_14.PNG);

![SoptiApp](./course_resources/Section_6/app_15.PNG);

![SoptiApp](./course_resources/Section_6/app_15b.PNG);

## Search Component
- Usando el componente search, se puede implementar una pagina simple de busqueda. En la Web API se busca el servicio y probando una llamada se puede ver como se monta la url, se copia y sustituye lo necesario, teniendo en cuenta que se quiere buscar artistas. La composición del HTML puede ser como en el home.

![Spoti API](./course_resources/Section_6/spoty_api_11.PNG);

![Spoti API](./course_resources/Section_6/spoty_api_12.PNG);

![SoptiApp](./course_resources/Section_6/app_16.PNG);

![SoptiApp](./course_resources/Section_6/app_17.PNG);

![SoptiApp](./course_resources/Section_6/app_18.PNG);

![SoptiApp](./course_resources/Section_6/app_18b.PNG);

## Optimization: Map operator in observables
- El operador map permite obtener sólo lo que se quiere de un conjunto de datos. Los observables se importan de **Reactive Extensions (rxjs)**. Usándolos en el spotify.service se puede optimizar la información a devolver de la que la API de Spotify proporciona.
- Los map trabajan con observables, justo lo que devuelve la petición de GET del HttpClient y junto con los pipes desde el TS se puede hacer lo que estamos buscando. Tras este cambio el uso del servicio cambia por lo que también hay que modificar el home.

![SoptiApp](./course_resources/Section_6/app_19.PNG);

![SoptiApp](./course_resources/Section_6/app_20.PNG);

- De tarea se propone hacer lo mismo con el servicio que provee los datos al search. Tras ello y optimizar se puede quedar el código en una línea.

![SoptiApp](./course_resources/Section_6/app_21.PNG);

![SoptiApp](./course_resources/Section_6/app_22.PNG);

## Optimization: Centralize Spotify requests
- Se puede crear una una función en el spotify.service para centralizar todo lo común de cada llamada a la API de Spotify (refactor) y así simplificar las funciones usadas.

![SoptiApp](./course_resources/Section_6/app_23.PNG);

## Optimization: Check images and pipe for them
- En la situación actual de la aplicación se produce un error en algunas busquedas cuando no se obtiene imagen del item en cuestión.

![SoptiApp](./course_resources/Section_6/app_23.PNG);

- Se puede usar un pipe para manejar esta situación. Se puede crear el pipe "noimage" con la ayuda de AngularCLI y este será añadido de manera automática al **declarations** en el app.module

![SoptiApp](./course_resources/Section_6/app_24.PNG);

![SoptiApp](./course_resources/Section_6/app_25.PNG);

- La idea de este pipe es que valide la imagen antes de mostrarla. Para los casos de que no haya imagen se ha de mostrar el noimage.png proporcionado en los recursos del curso. Y una vez creada la pipe se puede usar tanto en el search como en el home.

![SoptiApp](./course_resources/Section_6/app_26.PNG);

![SoptiApp](./course_resources/Section_6/app_27.PNG);

![SoptiApp](./course_resources/Section_6/app_28.PNG);

![SoptiApp](./course_resources/Section_6/app_28b.PNG);

## Optimization: Card component
- Tanto en el home como en el search se usa el mismo HTML para mostrar las tarjetas, con una ligera diferencia. Pero se puede crear un componente que sea reusado por ambos. Y mediante un **@Input** pasarle los datos. Quedaría de la siguiente manera:

![SoptiApp](./course_resources/Section_6/app_29.PNG);

![SoptiApp](./course_resources/Section_6/app_30.PNG);

![SoptiApp](./course_resources/Section_6/app_31.PNG);

![SoptiApp](./course_resources/Section_6/app_32.PNG);

## Loading component
- La idea es mostrar un componente de "Cargando..." mientras se obtiene la información de la Web API. Este se usará tanto en home como en search.
- Se puede obtener algo "bonito" de mostrar en https://fontawesome.com/, usando su css, buscando el icono refresh. Ingluir en el index lo indicado en la web. Ahora es necesario logearse para acceder a los iconos de la versión que no es la professional

![SoptiApp](./course_resources/Section_6/app_33.PNG);

![SoptiApp](./course_resources/Section_6/app_34.PNG);

- Se completa el HTML del loading componente quedando:

![SoptiApp](./course_resources/Section_6/app_35.PNG);

![SoptiApp](./course_resources/Section_6/app_36.PNG);

![SoptiApp](./course_resources/Section_6/app_37.PNG);

![SoptiApp](./course_resources/Section_6/app_35b.PNG);

- Ahora sólo queda modificar el home y search component para que tengan en cuenta cuando está cargando la información y cuando ya está cargada. Esto se puede controlar facilmente con un boolean que después se puede usar con ngIf en el HTML de cada componente. Existe la particularidad que en el search, de primeras no se carga información, por lo que no hay que mostrarlo, sólo cuando se quiera buscar algún artista.

![SoptiApp](./course_resources/Section_6/app_38.PNG);

![SoptiApp](./course_resources/Section_6/app_39.PNG);

![SoptiApp](./course_resources/Section_6/app_40.PNG);

![SoptiApp](./course_resources/Section_6/app_41.PNG);

## Artist component
- La idea es que cuando se pulsa sobre la tarjeta de un artista, nos lleve a su página. El componente artist ya está creado, pero necesitamos diseñarlo, añadirle lógica y en el routing tener en cuenta que pasaremos el id del artista para así poder localizarlo. Este id es reportado en la información de Spotify.

![SoptiApp](./course_resources/Section_6/app_42.PNG);

- Para modificar el componente card, para que al clickar sobre una artista / album me lleve a la página del artista, tengo que tener en cuenta que este componente se usa en dos sitios y en cada uno la lista de datos que pinta es diferente. La propiedad type de cada elemento que devuelve en ambos casos indica el tipo de dato que devuelve, album en el home y artist en el search, por lo que podemos usarlo para saber de dode tomar el id.

![SoptiApp](./course_resources/Section_6/app_43.PNG);

![SoptiApp](./course_resources/Section_6/app_44.PNG);

![SoptiApp](./course_resources/Section_6/app_45.PNG);

- Una vez obtenido el id se ha de redireccionar con el **Router** desde el card component.
- En el artist component se debe recuperar de la ruta el id usando **ActivatedRoute**.

![SoptiApp](./course_resources/Section_6/app_46.PNG);

- En este punto, que ya conocemos el id, se puede llamar al servicio get artist de la API de Spotify para obtener la información del artista. Para ello habrá que añadir una nueva función al servicio. En este caso no es necesario pasarlo por un pipe, ya que la información viene bastante acorde a lo que se necesita.

![Spoti API](./course_resources/Section_6/spoty_api_13.PNG)

![SoptiApp](./course_resources/Section_6/app_47.PNG);

- Lo que si habrá que pasar por el pipe es el array de imágenes además de usar el componente loading para evitar errores.

![SoptiApp](./course_resources/Section_6/app_48.PNG);

![SoptiApp](./course_resources/Section_6/app_49.PNG);

![SoptiApp](./course_resources/Section_6/app_49b.PNG);

- Podemos añadir más información al componente artist usando otro servicio de spotify como top tracks, para así listar las mejores canciones del mismo. En este servicio si que conviene usar una pipe para devolver sólo el listado de canciones.

![Spoti API](./course_resources/Section_6/spoty_api_14.PNG);

![SoptiApp](./course_resources/Section_6/app_50.PNG);

![SoptiApp](./course_resources/Section_6/app_51.PNG);

![SoptiApp](./course_resources/Section_6/app_52.PNG);

![SoptiApp](./course_resources/Section_6/app_52b.PNG);

## Spotify Widget
- En este punto se quiere cambiar el elemento audio de HTML por un widget de Spotify. La manera de obtener los widgets ha cambiado desde la creación del curso. Antes se podían obtener de la docuemntación en la sección Widgets, ahora podemos tobar de la web app de Spotify cualquier elemento que nos interese clicando con botón derecha y seleccionando "share > embed xxxx", depende de lo que se busque el codigo generado será diferente y habrá que adaptarlo a nuestr aplicación.

![Widget](./course_resources/Section_6/widget_1.PNG);

![Widget](./course_resources/Section_6/widget_2.PNG);

![Widget](./course_resources/Section_6/widget_3.PNG);

- Tras copiar el código del widget, se puede pegar donde teníamos el elemento audio. Modificar el tamaño del iframe para que se ajuste a nuestro gusto. Lo que queda hacer es identificar el Id del track en la url y sustituirlo por la track que se está listando en el componente.

![Widget](./course_resources/Section_6/widget_4.PNG);

![Widget](./course_resources/Section_6/widget_4b.PNG);

- Pero hay que tener en cuenta si se quiere modificar el src es que Angular bloqueará el dominio al insertar el valor del src, por lo que habría que crear una pipe como se hizo en la sección de las pipes.

![Widget](./course_resources/Section_6/widget_5.PNG);

![Widget](./course_resources/Section_6/widget_6.PNG);

![Widget](./course_resources/Section_6/widget_6b.PNG);

- La idea es calcular la url con una función y que está sea invocada para obtener el src. Por lo que ejecutar **ng g p pipes/securedom --skip-tests** e implementarlo de la misma manera que se hizo en la otra sección.

![Widget](./course_resources/Section_6/widget_6.PNG);

![Widget](./course_resources/Section_6/widget_7.PNG);

![Widget](./course_resources/Section_6/widget_8.PNG);

![Widget](./course_resources/Section_6/widget_8b.PNG);

## Errors managements
- Hay muchas maneras de manejar los errores en la parte visual (un div, notificaciones, un componente, etc). Para el ejemplo se va a usar un div que muestre un mensaje de error con la clase alert de Bootstrap y con un boolean se controlará si se muestra o no.
- Para reproducir un posible error se puede eliminar algún caracter del token por lo que la petición en el hombe mostrará un error por la consola del navegador y el loading permanecerá en pantalla.

![Errors](./course_resources/Section_6/errors_1.PNG);

- Para probar el manejo del error, en el home, se puede pintar la div que muestra el error y en el ts controlar la función a ejecutar cuando el subscribe recibe un error.

![Errors](./course_resources/Section_6/errors_2.PNG);

![Errors](./course_resources/Section_6/errors_2b.PNG);

- Hay que usar la directiva ngIf para mostrar o no la div. Además se puede añadir información del error recibido, guarándolo en una variable del componente.

![Errors](./course_resources/Section_6/errors_3.PNG);

![Errors](./course_resources/Section_6/errors_4.PNG);

![Errors](./course_resources/Section_6/errors_4b.PNG);


# Section 7: Mobile App with IONIC
- Se quiere crear una aplicación donde gestionar tareas hechas y por hacer. La aplicación se debe crear en Angular para usar en dispositivo móvil.
- Aprovechando los conocimientos de Angular, es posible usar IONIC y Apache Cordova para transformar una aplicación Angular en móvil.
- IONIC es una librería al estilo CSS que se usa para que los componentes se adapten responsivamente a la pantalla.
- Apache Cordova es una herramienta que transforma una aplicación con HTML en móvil para Android o IOs, sin necesidad de conocer los lenguajes usados para ello.
- La clave es tomar la aplicación Angular creada y montar un Webview que corre igualmente en Android o IOs.
- Hasta 2020 era posible usar una herramienta de desarrollo de IONIC para probar rapidamente la aplicación en un dispositivo real (ionic DevApp), pero la retiraron y ahora sólo es posible hacer esto con otra herramienta pero usando código nativo para aplicaciones móviles.

## 7.1 Building App structure
- Lo primero es acceder a la web de IONIC https://ionicframework.com/

![IONIC](./course_resources/Section_7/ionic_1.PNG);
  
- Instalar el command line interface con:

```
npm i -g @ionic/cli
```

- Si al instalar IONIC CLI se obtiene algún error, se puede deber a que había una versión anterior instalada, puedes desinstalar ésta y volver a instalar

```
npm uninstall -g ionic
```
- Tras la instalación en la web de IONIC pulsar el botón **Get started**. Se requiere registro. Una vez aquí aparecen varias opciones que ofrece IONIC, una de ellas es crear una aplicación y para ello provee algunas templates. Para la aplicación de esta sección se usará la template "Tabs". Como se va a crear una aplicación de deseos o cosas por hacer, la llamaremos **todos**.

![IONIC](./course_resources/Section_7/ionic_2.PNG);

![IONIC](./course_resources/Section_7/ionic_3.PNG);

- La manera que provee la Web de IONIC sirver para crear directamente un repositorio con la aplicación, pero si no queremos hacer esto o al menos no aún como es mi caso, ejecutar el siguiente comando en la carpeta donde se quiera crear el proyecto.

```
ionic start todos tabs
```

- En la instalación preguntará para que framework queremos crear la aplicación, elegid Angular
- En la instalación preguntará si queremos crear la aplicación con NgModules o Standalone, elegid NgModules.
- Al terminar habrá creado una carpeta con el nombre del proyecto y dentro todos los archivos como en un proyecto de Angular. Esto demora varios minutos.

![App](./course_resources/Section_7/app_1.PNG);

- Para levantar la aplicación, en lugar de usar el comnado ng serve, se usa:

```
ng serve
```

Se usa:

```
ionic serve
```

- Una vez levantada la aplicación, en las herramientas de desarrollo, seleccionar la vista de dispositivo móvil para observar como se vería la aplicación en un dispositivo.

![App](./course_resources/Section_7/app_2.PNG);

- Si empezamos a ver la estructura de la aplicación, dentro de la carpeta app existe una carpeta por tab, es decir un componente.
- Si se abre el tab1 html se puede ver que hay etiquetas no vistas anteriormente, son propias de IONIC. Se puede modificar algo del contenido para comprobar que la aplicación funciona.

![App](./course_resources/Section_7/app_3.PNG);


- Para comnenzar a modificar la aplicación se puede cambiar para usar sólo 2 tabs. Las tabs son usadas en el componente tabs y modificando este podemos cambiar lo que vemos en el navegador.
- Existe una web para consultar los iconos de IONIC https://ionic.io/ionicons. Estos iconos ya están preparados para ser usados. Buscando un icono y clickando en él, aparece un pop up con el tag que se debe usar.

![IONIC](./course_resources/Section_7/ionic_4.PNG);

![IONIC](./course_resources/Section_7/ionic_5.PNG);

- Personalmente he usado las siguientes:

![App](./course_resources/Section_7/app_4.PNG);

![App](./course_resources/Section_7/app_4b.PNG);

- La estructuración de carpetas no es la adecuada, habría que crear una carpeta pages que contenga todas las tabs. Si hacemos esto y movemos las tabs (la tab3 la podemos elminar porque no se va a usar), la aplicación dejará de correr y dará error, ya que se habrá perdido la referencia en importaciones. Se ha de arreglar el app-routing.module.ts para poner bien la ruta de importación del tabs. En el tabs-routing.module.ts hay que eliminar la referencia a tab3 ya que hemos eliminado este componente. En mi versión de IONIC además, se crea un componente llamado explore-container y este es usado en cada componente tab (tab1 y tab2), ya que lo importa. Hay que arreglar esta ruta ya que la mover los componentes tabs, la referencia en la impoertación está mal.

- Se puede ver como se usa el llamado lazy load para la carga de modulos según la ruta, con la palabra clave **loadChildren**. Esto no es algo necesario, sino una optimización.

## Service and classes
- AL trabajar con ionic, no hace falta usar los comandos de Angular con ng para crear componentes y servicios, se pueden usar los comandos propios de IONIC. Lo hacemos para crear el servicio todo. Este servicio se va a usar para crear las listas de las tareas.

```
ionic g s sercices/todo
```

- Ya que estamos avanzados en el curso, es buna práctica no trabajar con objetos any y si crear nuestras propias clases e interfaces, estas se suelen guardar en la carpeta llamada "models". Los models son, como su nombre indica, modelos de datos con los que se van a trabajar. Para definirlo se usan clases (no interfaces) ya que estos modelos de datos van a poseer constructor y métodos. Se ha de crear un modelo para los items de la listas y otro para las listas en si. Como se vió en otra sección, los servicio, con la dicoración @Injectable son singletons, es decir, que se instancian sólo una vez para toda la aplicación. Podemos inyectar este servicio en tab1 y tab2, y comprobar como sólo se llama al constructor una sólo vez al navegar por la aplicación.

![App](./course_resources/Section_7/app_5.PNG);

![App](./course_resources/Section_7/app_6.PNG);

![App](./course_resources/Section_7/app_7.PNG);

## Pending tasks page
- En el servicio todo se pueden crear un par de listas para trabajar con ellas, y así visualizarlas en el tab1.
- Para la visualización de elementos se puede revisar la documentación en la web de IONIC https://ionicframework.com/docs, como el ion-list.

![IONIC](./course_resources/Section_7/ionic_6.PNG);

- Usando ese elemento se puede mostrar el listado de listas pendientes en la tab1. Además en el fichero variable.scss que crea el IONIC CLI automaticamente ya proporciona varios estilos para poder aplicar, como el *dark*.

![App](./course_resources/Section_7/app_8.PNG);

![App](./course_resources/Section_7/app_8b.PNG);

- Se puede modificar el estilo tocando el global.css. Por ejemplo el background de los ion-list en dark también y si se revisa el DOM de la aplicación, se puede ver como la tab activa tiene una clase llamada tab-selected, si se asigna en un estilo a esta clase todo se verá mejor

![App](./course_resources/Section_7/app_9.PNG);

![App](./course_resources/Section_7/app_9b.PNG);