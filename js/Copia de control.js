/** Control de flujo y estructuras de control
 * 
 * Las estructuras de control son un componente fundamental dentro de la programacion,
 * entre algunas de las facilidades y ventajas que nos proporcionan para escribir
 * y depurar codigo, podemos mencionar las siguientes:
 * 
 * - Tomar decisiones basadas en condiciones especificas, esto produce un codigo
 * tanto dinamico como adaptable
 * 
 * - Repetir acciones (estructuras de bucle) para iterar operaciones o procesar datos
 * de una forma eficiente sin caer en la redaccion de codigo innecesario y repetitivo
 * 
 * - Facilitar el control de flujo de una operacion, brindandonos la oportunidad de ser
 * especificos en indicar qe instrucciones ejecutar y en que orden
 * 
 * - Optimizan el rendimiento de nuestro codigo, ya que evita oportunamente ejecutar instrucciones
 * en caso de que no se necesite
 * 
 * - Facilitar tanto la escritura de codigo como la claridad de este
 * 
 * Las estructuras de control que vamos a ver durante las sesiones de JS son las siguientes
 * 
 *      - Estructura if-else
 *      - Estructura switch
 *      - Estructuras de bucles (for, do, do while)
 * 
 * Para esta sesion, nos centraremos solo en las primeras 2 señaladas en la lista
 */


/** Estructura if-else
 * 
 * Anteriormente, cuando trabajamos con algoritmos y diagramas de flujo,
 * conocimos una figura en particular que era un rombo, y representaba una
 * bifurcacion (una sentencia que se divide en 2 caminos diferentes)
 * 
 * Dentro del rombo, colocabamos una expresion que nos permitia plantear una condicion
 * 
 * Si se cumplia, dabamos por hecho que la sentencia es verdadera (o true) y seguia un camino
 * En el caso de no cumplirse (false) simplemente se tomaba el otro camino y se realizaban las
 * operaciones correspondientes
 * 
 * Dentro de JS y multiples lenguajes de programacion, las bifurcaciones o condiciones
 * se conocen y redactan como sentencias if-else
 * 
 * Declaracion de una sentencia if-else
 * 
 * palabra reservada if para comenzar la declaracion
 * se coloca un parentesis () donde se debe colocar una expresion logica (true|false)
 * se abren y cierran llaves {} para indicar que sentencia ejecutar si la condicion se cumple (true)
 * despues de la llave (}) declarada para el bloque de ejecucion if, colocar la palabra reservada else
 * para este ejemplo, no es necesario colocar mas expresiones logicas dentro de un ()
 * simplemente colocamos otras llaves {} para indicar el bloque de codigo que tiene que ser
 * ejecutado en caso de que la condicion no se cumpla (false)
 */

let n = 15;

if (n > 10) {
    console.log(true);
} else {
    console.log(false);
} //Expected output - false

/**
 * if-else-if
 * 
 * Se trata de la misma sentencia if-else declarada anteriormente
 * Lo que vamos a hacer diferente es, en este caso, anidar varias veces
 * esta misma sentencia, lo que nos permitira tomar decisiones
 * mas complejas
 * 
 * Hay que tener cuidado y no realizar demasiadas anidaciones, ya que va a resultar
 * en codigo poco legible y confuso
 * 
 */

if (n === 15) { // Inicio del bloque if
    console.log("instruccion 1 " + true)
} else if (n > 15) {
    console.log("instruccion 2")
} else {
    console.log("instruccion 3 " + false)
}

/** Sentencia switch
 * 
 * La sentencia switch es otro tipo de estructuras de control
 * de flujo que, nuevamente, se encuentra en diversos lenguajes de programacion
 * 
 * Es bastante parecida a la sentencia if-else pero diferente en cuanto
 * a comportamiento, ya que no se basa en una bifurcacion (particion de caminos)
 * sino que se secciona en casos (case) que, dependiendo de la expresion
 * que cumpla con un caso en especifico, es la secuencia que se va a ejecutar
 * dentro de la declaracion
 * 
 * 
 * Declaracion:
 * Su declaracion empieza por colocar la palabra reservada switch,
 * 
 * Seguido de esto, colocamos un parentesis () donde se debe colocar
 * el valor que va a indicar que sentencia ejecutar
 * 
 * Falta tambien indicar el bloque de codigo que se limita a esta sentencia,
 * como lo haciamos con la sentencia if o con las funciones
 * 
 * Dentro de este bloque de codigo, falta colocar los casos para cada valor que se desee
 * establecer segun sea el valor indicado dentro del parentesis
 * 
 * Cada uno de estos casos se separa de la siguiente manera
 * case valor: 
 *      instruccion a ejecutar si el valor empata con este caso
 * 
 * Despues, para indicar que la ejecucion de sentencias debe cortarse cuando se cumpla
 * un caso en particular, se coloca la instruccion break;
 * 
 * Cuando terminemos de establecer los casos que necesitemos declarar
 * en nuestra sentencia, debemos colocar un valor por defecto (default)
 * 
 * Esta ultima sentencia nos permite establecer un valor por defecto
 * si es que el valor colocado en el parentesis no empata
 * con ninguno de los casos
 * 
 * default:
 *      mensaje de no disponible o no valido
 */

let dia = "lunes";
switch (dia) {
    case "lunes":
        console.log("Dia 1");
        break;
    case "martes":
        console.log("Dia 2");
        break;
    case "miercoles":
        console.log("Dia 3");
        break;
    case "jueves":
        console.log("Dia 4");
        break;
    case "viernes":
        console.log("Dia 5");
        break;
    case "sabado":
        console.log("Dia 6");
        break;
    case "domingo":
        console.log("Dia 7");
        break;
    default:
        console.log("No existe ese dia");
        break;
}

/** Operador ternario
 * 
 * Expresion condicional if-else mas simple y legible
 * 
 * Principalmente se usa para simplificar condiciones de una
 * sola expresion
 * 
 * Tambien pueden anidar sentencias if-else-if, sin embargo no es
 * recomendado porque el codigo puede ser confuso y poco legible
 * 
 * Su declaracion es de la siguiente manera
 * 
 * palabra reservada let, let o const
 * se le asigna un nombre como si se tratara de una variable
 * operador de asignacion '='
 * Seguido de este operador, hay que colocar la expresion logica
 * que colocabamos dentro del parentesis
 * despues hay que colocar un caracter ? que indica el camino a seguir dependiendo
 * de si se cumple (o no) la expresion
 * Para separar el resultado true de false hay que agregar
 * un caracter de : , del lado izquierdo se coloca la sentencia a ejecutar
 * si se cumple la condicion, del lado derecho se coloca la sentencia a ejecutar
 * si no se cumple
 */

// Ejemplo de operador ternario
let verificacion = n > 10 ? "Si es mayor" : "No es mayor"
console.log(verificacion);

/** Cuando utilizar if-else y cuando switch?
 * 
 * if-else: cuando necesitemos tomar decisiones bajo condiciones
 * mucho mas flexibles
 * 
 * switch: cuando tengamos un conjunto fijo de valores para
 * comparar con una expresion
 * 
 */

/** Combinando funciones y estructuras de control
 * 
 * 
 * 
 * Recordando, las funciones son bloques de codigo que nos permiten realizar una tarea particular
 * Podemos sacar ventaja de las funciones y combinarlas con estructuras de control
 * Esto va a resultar en codigo mas dinamico, nos sirve especialmente para realizar una operacion
 * bajo un parametro establecido, que valor obtiene este parametro? El que se asigne dentro de los parentesis
 * 
 * 
 * 
 */

function diaDinamico(dia) {
    dia = dia.toUpperCase();
    dia = dia.toLowerCase();
    switch (dia) {
        case "lunes":
            console.log("Dia 1");
            break;
        case "martes":
            console.log("Dia 2");
            break;
        case "miercoles":
            console.log("Dia 3");
            break;
        case "jueves":
            console.log("Dia 4");
            break;
        case "viernes":
            console.log("Dia 5");
            break;
        case "sabado":
            console.log("Dia 6");
            break;
        case "domingo":
            console.log("Dia 7");
            break;
        default:
            console.log("No existe ese dia");
            break;
    }
}

//Ejercicios para esta sesion

/** Ejercicio 1
 * 
 * Elabora un programa que determine si una persona tiene edad
 * suficiente para votar
 * 
 * Debe recibir como parametro la mayorEdad
 * 
 * Consideraciones: utilizar la estructura if-else
 */
function mayorEdad(edad) {
    console.log(edad);

    let mayorEdad = edad;
    let resultado = `De acuerdo a la edad ingresada de ${edad} anyos \nesta persona`;

    if (mayorEdad >= 18) {
        console.log(resultado + "puede votar");

    } else {
        console.log(resultado + "no puede votar");
    }
}

/** Ejercicio 2
 * 
 * Desarrolla un programa que permita obtener el promedio de un/a alumno/a
 * recibiendo como parametro 4 calificaciones
 * 
 * Si el promedio es aprobatorio (mayor o igual a 7) imprimir aprobado
 * en el caso de que no sea un promedio aprobatorio imprimir reprobado
 * 
 * Consideraciones: utilizar la estructura if-else
 * 
 */
function calificar(calif1, calif2, calif3, calif4, minimoAprobatorio = 7) {
    let promedio = (calif1 + calif2 + calif3 + calif4) / 4;
    let calificacion = `Dadas las calificaciones: \n${calif1}\n${calif2}\n${calif3}\n${calif4}\ny obteniendo un promedio de: ${promedio}\nel alumno esta `;

    if (promedio >= minimoAprobatorio) {
        console.log(calificacion + "aprobado");
    } else {
        console.log(calificacion + "reprobado");
    }
}

/** Ejercicio 4
 * 
 * Desarrolla un programa que evalue si un numero es divisible
 * entre 7 y 8
 * 
 * Debe recibir como parametro un numero, cual sea
 * 
 * Si se cumple, imprimir verdadero
 * Si no, imprimir falso
 * 
 * 
 * Consideracion - Utilizar la estructura if-else
 * Casos de prueba: 56, 7, 8, 0, 224, 73
 */
function evaluar(numero) {
    let divSiete = numero % 7;
    let divOcho = numero % 8;

    if (divSiete == 0 && divOcho == 0) {
        console.log(true);
    } else {
        console.log(false);
    }
}

/** Ejercicio 5
 * 
 * Desarrolla un programa que evalue si un numero es divisible
 * entre 4 o 9
 * 
 * Debe recibir como parametro un numero aleatorio
 * 
 * Si se cumple, imprimir verdadero
 * Si no, imprimir falso
 * 
 * Consideracion - Utilizar la estructura if-else
 */
function evaluar(numero) {
    let divCuatro = numero % 7;
    let divNueve = numero % 8;

    if (divCuatro == 0 || divNueve == 0) {
        console.log(true);
    } else {
        console.log(false);
    }
}

/** Ejercicio 6
 * 
 * Crear un programa que funcione como una calculadora simple
 * que realice las operaciones aritmeticas basicas
 * 
 *  -suma
 *  -resta
 *  -multiplicacion
 *  -division
 * 
 * Debe recibir como parametros la operacion a realizar y dos numeros
 * Dependiendo de la opcion que se indique, realizar la operacion correspondiente
 * 
 * 1. suma
 * 2. resta
 * 3. multiplicacion
 * 4. division
 * 
 * Consideraciones: utilizar la estructura switch
 */
function operar(operando1, operador, operando2) {
    switch (operador) {
        case "+":
            console.log(operando1 + operando2);
            break;
        case "-":
            console.log(operando1 - operando2);
            break;
        case "*":
            console.log(operando1 * operando2);
            break;
        case "/":
            console.log(operando1 / operando2);
            break;
        default:
            console.log("Ingrese una operacion valida");
            break;
    }
}

/** Ejercicio 7
 * 
 * Realizar un programa que reciba como parametro una categoria de peliculas
 * 
 * -accion
 * -drama
 * -comedia
 * -romance
 * -suspenso
 * -terror
 * 
 * Segun sea la categoria que se reciba, imprimir una recomendacion de pelicula
 * de acuerdo al parametro recibido
 * 
 * Consideraciones: utilizar la estructura switch
 */
function ver(genero) {
    genero = genero.toLowerCase();
    let tiposGenero = "accion, drama, comedia, romance, suspenso, terror";
    switch (genero) {
        case "accion":
            console.log("John Wick ");
            break;
        case "drama":
            console.log("Antes de partir");
            break;
        case "comedia":
            console.log("Son como ninyos");
            break;
        case "romance":
            console.log("Orgullo y prejuicio");
            break;
        case "suspenso":
            console.log("El resplandor");
            break;
        case "terror":
            console.log("El titere");
            break;
        default:
            console.log(`Ingrese un genero valido \n${tiposGenero}`);
            break;
    }
}

/** Ejercicio 8
 * 
 * Crear una interfaz de un cajero ATM
 * 
 * Debe recibirse como parametro alguna de las siguientes opciones
 * 
 * 1. Retirar dinero
 * 2. Transferencia
 * 3. Deposito
 * 4. Pago de servicios
 * 
 * Segun sea la opcion indicada, imprimir en pantalla la accion a realizar
 * Utilizar if/else
 */
function elegir(acciones) {
    let opcion = acciones;

    if (opcion == 1) {
        console.log("1. Retirar dinero");
    } else if (opcion == 2) {
        console.log("2. Transferencia");
    } else if (opcion == 3) {
        console.log("3. Deposito");
    } else if (opcion == 4) {
        console.log("4. Pago de servicios");
    } else {
        console.log("Elegir una opcion");
    }
}

/** Ejercicio 9
 * 
 * Escribir en codigo un programa conversor de divisas
 * 
 * Debe recibir como parametro una cantidad en pesos mexicanos y
 * Segun sea la opcion que se indique, realizar la conversion correspondiente
 * 
 * 1. A dolares estadounidenses
 * 2. A euros 
 * 3. A yenes japoneses
 * 4. A libra esterlina
 * 5. A franco suizo
 * 
 * Consideracion: estructura switch
 * 
 */
function convertir(cantidadPesos, divisa) {
let dolares = 0.059;
let euros = 0.055;
let yenes = 8.65;
let libras = 0.047;
let francos = 0.053;

    switch (divisa) {
        case "dolares estadounidenses":
            console.log(cantidadPesos * dolares);
            break;
        case "euros":
            console.log(cantidadPesos * euros);
            break;
        case "yenes japoneses":
            console.log(cantidadPesos * yenes);
            break;
        case "libra esterlina":
            console.log(cantidadPesos * libras);
            break;
        case "franco suizo":
            console.log(cantidadPesos * francos);
            break;
        default:
            console.log("Ingrese un tipo de divisa");
            break;
    }
}

/** Ejercicio 10
 * 
 * Realizar un programa que calcule un descuento del 10% a un producto si se ingresa el codigo
 * de descuento correcto
 * 
 * Debe recibir como parametros el precio del producto
 * y el codigo de descuento
 * 
 * Sugerencia de codigo de descuento DESCUENTO10
 * 
 * Consideracion: utilizar la estructura if-else
 * 
 */
function aplicar(precioProd,codigoDesc) {
    const VALOR_DESC = .10;
    let totalDescuento = precioProd * (1 - VALOR_DESC); 
    let mensajeFinal = `El precio final a pagar es de `;

    if (codigoDesc === "DESCUENTO10") {
        console.log(mensajeFinal + totalDescuento);
    } else {
        console.log(mensajeFinal + precioProd);
    }
}
