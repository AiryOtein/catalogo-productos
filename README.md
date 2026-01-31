**Proyecto Catálogo: Frontend**





**-Instrucciones de instalación:**

**<Si se prueba usando el .zip>**

*1ºOpción:*

Descarga el archivo .zip que envié,

descomprímelo y localiza el index.html.

RECOMENDADO: Ten Visual Studio Code instalado,

instala la extensión Live Server (si no la tienes),

abajo a la derecha, dale a Go Live y debe funcionar.



*2ºOpción:*

Una vez descargado el zip, accede a la carpeta desde la terminal,

pon **npm install -g http-server**

**cd "ruta/del/proyecto"**

**http-server**

Saldrá una ip, que puede ser algo como ttp://localhost:8080. Ponla

en el navegador y debe funcionar.



*Para verlo en el móvil:*

Desde la terminal, estando en la carpeta del proyecto, ejecuta **npx serve**

Saldrá algo en pantalla como 

**Accepting connections at:**

**http://localhost:5000**

**http://192.168.1.42:5000 //pon esta ip tal cual en el buscador del móvil**



**<Si se prueba descargándolo desde GitHub>**

Clona el repositorio con Git: **git clone https://github.com/AiryOtein/catalogo-productos.git**

Ábrelo desde un servidor local, la forma más sencilla es usando Node.js.

Instala serve si no lo tienes con **npm install -g serve**

Arráncalo con **serve**

Saldrá algo en pantalla como

**Accepting connections at:**

**http://localhost:5000**

**http://192.168.1.42:5000 //pon esta ip tal cual en el buscador**



-------------------------------------------------------------



-Para este proyecto, he hecho uso de HTML,

React, CSS y JavaScript puro, separando el modo claro-oscuro

en dos css (por comodidad y limpieza).

Tiene búsqueda y filtrado por categoría, un carrito

de compras funcional que se guardan en el localStorage.



-------------------------------------------------------------



**-Estructura del proyecto:** 



/Catálogo de Productos

│

├─ index.html  //encargado de usar React y Babel        

├─ js

|   ├─ App.js	//la cabeza del proyecto

|   └─ Cart.js	//gestiona el carrito

|   └─ Filters.js //encargado de la búsqueda y el filtrado

|   └─ ProductCard.js //componente para las tarjetas

├─ css            

│   ├─ styles-light.css //modo claro

│   └─ styles-dark.css	//modo oscuro

└─ README.md



--------------------------------------------------------------



**-Decisiones técnicas:**



-El index es el contenedor, lo dejo fuera de las carpetas. 

Creé una llamada js y otra css para tener todo mejor organizado (e intuitivo).

-React principalmente lo he usado con useState y useEffect

para el manejo de los estados y los efectos.

-El carrito solo se abre si pulsas en él: hay una forma

sencilla de hacer que se abra cada vez que añades un producto,

pero para el usuario eso es incómodo, decidí dejarlo así.

-Dentro del carrito, si el producto baja de 1, se elimina.

No quedaría profesional que el producto pudiera tener cantidades negativas.

-Es responsive, está adaptado tanto para ser una web de escritorio como de móvil. A su vez, se adapta también al tamaño

de la pantalla, manteniendo la legilibilidad y la estética.

-Separo los componentes, como filtros, carrito, etc, para que

se puedan editar cómodamente y sean más accesibles.

-Para evitar el overflow de las imágenes, hice uso de .card-img-wrapper y object-fit: contain.



**-A mejorar:**



Un diseño más profesional





