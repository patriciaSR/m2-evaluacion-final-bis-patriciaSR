# Ejercicio de evaluacuón final-bis-El juego de las parejas

El ejercicio consiste en desarrollar una aplicación web que simula un juego de buscar las parejas.

## 1. Maquetación
La aplicación consta de dos partes
  1. Un formulario para elegir el tamaño de la partida y un botón
  2. Un listado de cartas, cada elemento del listado tiene 2 imágenes que representan las dos
  caras de una carta (cuando una está visible la otra está oculta).
En la imagen de arriba tienes un ejemplo de un listado de 4 cartas, cada una tiene una imagen de
la parte frontal con un Pokemon y de la parte trasera con la palabra ADALAB.

## 2. Inicio de la partida
Al hacer clic sobre el botón de 'Comenzar', nuestra aplicación debe recoger el valor del tamaño de
la partida y conectarse a un API que devuelve un listado de cartas. La URL del API es
https://raw.githubusercontent.com/Adalab/cards-data/master/:NUMERO.json, donde
:NUMERO puede tomar el valor de 4, 6 u 8. Por ejemplo, para pedir 6 cartas usariamos
https://raw.githubusercontent.com/Adalab/cards‒data/master/6.json
Por cada carta obtendremos, entre otros datos, la URL de la imagen a mostrar. Estos datos los
usaremos para pintar tantas cartas como datos nos lleguen del servidor. Recuerda que cada carta
tiene 2 caras y por defecto la frontal debe estar oculta.

## 3. Almacenamiento local
Vamos a guardar el número que la usuaria elija en localStorage, de forma que al recargar la
página aparezca seleccionado el número que se eligió la última vez.

## 4. Interacción
Una vez mostramos el listado de cartas vamos a hacer que sea interactivo.
Al hacer clic sobre una carta vamos a mostrar su parte frontal y a ocultar su parte trasera. Al
volver a hacer clic haremos la operación contraria, y volveremos a ver su parte trasera y ocultar la
frontal.

## 5. BONUS: Implementar el juego
Una vez terminada la parte obligatoria, os animamos a intentar implementar el juego de las
parejas en una rama del repositorio. Por cada carta, tenemos información en el JSON de cuáles
son pareja.
* Cuando se hace clic en una primera carta esta se da la vuelta y nos muestra su pokemon
(como hasta ahora).
* Al hacer clic en una segunda carta esta se da la vuelta y: si es la pareja de la primera las dos
se quedan boca arriba (como hasta ahora), si no es la pareja de la primera las dos deben
mantenerse visibles durante un periodo corto de tiempo (para que la usuaria vea los
pokemon) y ponerse boca abajo.
