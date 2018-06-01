# Cifrado César


## Introducción

El [cifrado César](https://en.wikipedia.org/wiki/Caesar_cipher) es uno de los
primeros métodos de cifrado conocidos históricamente. Es un tipo de cifrado por
sustitución en el que una letra en el texto original es reemplazada por otra
letra que se encuentra un número fijo de posiciones más adelante en el alfabeto.

![caeser-cipher](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caesar3.svg/2000px-Caesar3.svg.png)

El emperador Julio César lo usaba para enviar órdenes a sus generales en los
campos de batalla, es una de las técnicas más simples y más usadas para cifrar
un mensaje.

Por ejemplo si usáramos un desplazamiento de 3:

* Alfabeto sin cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto cifrado: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

Actualmente todos los cifrados de sustitución alfabética simple, se descifran
con facilidad y en la práctica no ofrece mucha seguridad en la comunicación,
pero el cifrado César muchas veces puede formar parte de sistemas más complejos
de codificación, como el cifrado Vigenère, e incluso tiene aplicación en el
sistema ROT13.


## Cómo usar

Usar esta página es muy fácil, solo ingresas la palabra que quieras cifrar en la primera caja texto (la que contiene la leyenda "Ingresa palabra a cifrar"), seleccionas cuántas posiciones (o espacios) quieres adelantarte en el alfabeto, presionas el botón **cifrar** y en el parrafo de abajo aparecerá tu palabra cifrada.

Para descifrar tienes que ingresar tu texto previamente cifrado en la segunda caja de texto de la pagina (la que contiene la leyenda "Ingresa palabra a descifrar), seleccionas cuántas posiciones (o espacios) quieres ir hacia atrás en el alfabeto (debería ser la misma cantidad que usaste al cifrarlo), presionas el botón **descifrar** y en el párrafo de abajo aparecerá tu palabra descifrada.


## Descargar e instalar

Descargar la aplicación y tenerla en tu propio computador te puede servir para modificarla a tu gusto o para usarla aún cuando te encuentres sin internet. 
Para hacer esto no necesitas ser un experto, sólo seguir las siguientes instrucciones:

### Paso uno:
Entra al siguiente [link de mi github](https://github.com/Boutaudn/scl-2018-05-bc-core-am) 

### Paso dos:
Vas a la izquierda de la página al botón verde llamado **clone or download** para descargar el proyecto (o puedes hacerlo directamente usando este link [CLONE OR DOWNLOAD](https://github.com/Boutaudn/scl-2018-05-bc-core-am/archive/master.zip) ) 

### Paso tres:
Ya con el proyecto en tu computador, entras a la carpeta **scl-2018-05-bc-core-am**, luego a **src**, abres el archivo **index.html** con tu navegador favorito y listo, ya tienes la pagina de cifrado cesar.

### Paso cero:
No descargues la aplicación y ocúpala de forma online, aprovechando las actualizaciones que pueda tener en el futuro simplemente ingresando en el siguiente [link](https://boutaudn.github.io/scl-2018-05-bc-core-am/).


## Acerca de la aplicación y el diseño

El diseño de la plataforma está inspirada en un estilo simple y minimalista para hacer más fácil su uso y lectura para el usuario.
La aplicación es capaz de cifrar palabras sin incluir caracteres como espacios, la letra ñ o acentos y comillas, etc. y devolviendo el mensaje sólo en mayúsculas.

**Próximamente aceptaremos espacios y acentos. Estamos trabajando para usted**