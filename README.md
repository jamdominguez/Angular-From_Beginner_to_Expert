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
- Las promesas principialmente permiten tener una gestión sobre la respuesta de llamadas asíncronas. Cuando se requiere trabajar con respuestas de llamadas asíncronas el código se llena de callbacks, que se ejecutan (normalmente) cuando la llamada asíncrona en cuestión responde. Las promesas, ayudan a que el código no esté cargado de callbacks y que cuando se requiera utilizar los datos de una llamada asíncrona, saber si ese datos está ya disponible o no.
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

- Para tener un código robusto y además poder darle una entidad a los objetos, se usan interfaces. Basicamente es poner reglas para asegurarse de cumplirlas. No existe una interpretación de interface TS en JS. Para definir las interfaces se usa la palabra reservada **interface**. En la siguiente imágen se puede ver como tras definir la interface TS nos avisa que no se está asignando una propiedad que posea la interfaz definida.

![Interfaces](./course_resources/Section_2/interfaces_2.PNG)

- Si por alguna razón en el futuro hay que cambiar el nombre de una propiedad, TS avisaría de todos los lugares donde se está usando.

![Interfaces](./course_resources/Section_2/interfaces_3.PNG)

- También puede ocurrir que se le añada una propiedad a la interfaz, esto maracará error en la creación del objeto de ese tipo. Pero se puede indicar que una propiedad sea opcional concatenando **?** al nombre del campo. En la siguiente imagen se puede ver como TS indica que faltan dos de las tres nueas propiedades, esto es porque una de ellas es opcional.

![Interfaces](./course_resources/Section_2/interfaces_4.PNG)