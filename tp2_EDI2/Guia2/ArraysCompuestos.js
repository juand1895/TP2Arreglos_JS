//ARRAYS CON TIPOS DE DATOS COMPUESTOS
//1)10. Lista de Compras: Crea una lista de compras que incluya productos y sus cantidades.

/*let listaDeCompras = [
    { producto: "Manzanas", cantidad: 5 },
    { producto: "Leche", cantidad: 2 },
    { producto: "Pan", cantidad: 1 },
    { producto: "Huevos", cantidad: 12 }
];

// Mostrar la lista de compras
listaDeCompras.forEach(item => {
    console.log(`${item.cantidad} unidades de ${item.producto}`);
});*/

//2) Agenda de Contactos: Crea una agenda de contactos con nombres, números de teléfono y
//correos electrónicos.
/*let agendaDeContactos = [
    {
        nombre: "Juan Pérez",
        telefono: "555-1234",
        correo: "juan.perez@example.com"
    },
    {
        nombre: "Ana García",
        telefono: "555-5678",
        correo: "ana.garcia@example.com"
    },
    {
        nombre: "Carlos López",
        telefono: "555-8765",
        correo: "carlos.lopez@example.com"
    }
];

// Mostrar la agenda de contactos
agendaDeContactos.forEach(contacto => {
    console.log(`Nombre: ${contacto.nombre}`);
    console.log(`Teléfono: ${contacto.telefono}`);
    console.log(`Correo: ${contacto.correo}`);
    console.log('--------------------');
});*/

//3) Búsqueda de Palabras: Dado un párrafo y una palabra, cuenta cuántas veces aparece la
//palabra en el párrafo.
/*function contarPalabra(parrafo, palabra) {
    // Convertimos el párrafo y la palabra a minúsculas para la comparación insensible a mayúsculas
    let parrafoLower = parrafo.toLowerCase();
    let palabraLower = palabra.toLowerCase();
    
    // Dividimos el párrafo en un arreglo de palabras
    let palabras = parrafoLower.split(/\s+/); // Usamos una expresión regular para dividir por espacios
    
    // Contamos las ocurrencias de la palabra
    let contador = palabras.filter(p => p === palabraLower).length;
    
    return contador;
}

// Ejemplo de uso
let parrafo = "JavaScript es un lenguaje de programación. JavaScript es muy popular. Aprender JavaScript puede ser divertido.";
let palabra = "JavaScript";
let resultado = contarPalabra(parrafo, palabra);

console.log(`La palabra "${palabra}" aparece ${resultado} veces en el párrafo.`);
*/

//4)Clasificación de Objetos: Ordena un arreglo de objetos por una propiedad específica.

/*let productos = [
    { nombre: "Laptop", precio: 1500 },
    { nombre: "Teléfono", precio: 800 },
    { nombre: "Monitor", precio: 300 },
    { nombre: "Teclado", precio: 50 }
];

// Ordenar los productos por el precio de manera ascendente
productos.sort((a, b) => a.precio - b.precio);

// Mostrar los productos ordenados
productos.forEach(producto => {
    console.log(`${producto.nombre}: $${producto.precio}`);
});*/

//5) Registro de Ventas: Crea un registro de ventas con información sobre productos, cantidades
//y precios.

/*let registroDeVentas = [
    { producto: "Laptop", cantidad: 2, precio: 1500 },
    { producto: "Teléfono", cantidad: 5, precio: 800 },
    { producto: "Monitor", cantidad: 3, precio: 300 },
    { producto: "Teclado", cantidad: 10, precio: 50 }
];

// Calcular el total de cada venta
registroDeVentas.forEach(venta => {
    let totalVenta = venta.cantidad * venta.precio;
    console.log(`Producto: ${venta.producto}`);
    console.log(`Cantidad: ${venta.cantidad}`);
    console.log(`Precio por unidad: $${venta.precio}`);
    console.log(`Total venta: $${totalVenta}`);
    console.log('--------------------');
});

// Calcular el total de todas las ventas
let totalGeneral = registroDeVentas.reduce((suma, venta) => suma + (venta.cantidad * venta.precio), 0);
console.log(`Total general de ventas: $${totalGeneral}`);*/

//6) Carrito de Compras: Simula un carrito de compras que permite agregar, eliminar y calcular
//el total.

// Carrito de compras
/*let carrito = {
    productos: [],

    // Método para agregar productos al carrito
    agregarProducto: function (nombre, cantidad, precio) {
        this.productos.push({ nombre, cantidad, precio });
        console.log(`${cantidad} unidad(es) de "${nombre}" agregada(s) al carrito.`);
    },

    // Método para eliminar un producto del carrito
    eliminarProducto: function (nombre) {
        let indice = this.productos.findIndex(producto => producto.nombre === nombre);
        if (indice !== -1) {
            this.productos.splice(indice, 1);
            console.log(`"${nombre}" eliminado del carrito.`);
        } else {
            console.log(`"${nombre}" no está en el carrito.`);
        }
    },

    // Método para calcular el total del carrito
    calcularTotal: function () {
        let total = this.productos.reduce((suma, producto) => suma + (producto.cantidad * producto.precio), 0);
        console.log(`Total del carrito: $${total}`);
        return total;
    },

    // Método para mostrar los productos del carrito
    mostrarCarrito: function () {
        console.log("Carrito de Compras:");
        this.productos.forEach(producto => {
            console.log(`${producto.cantidad} unidad(es) de "${producto.nombre}" a $${producto.precio} cada una.`);
        });
        console.log('--------------------');
    }
};

// Ejemplo de uso
carrito.agregarProducto("Laptop", 1, 1500);
carrito.agregarProducto("Teléfono", 2, 800);
carrito.mostrarCarrito();

carrito.eliminarProducto("Teléfono");
carrito.mostrarCarrito();

carrito.calcularTotal();*/

//7)Gestor de Tareas: Crea un gestor de tareas que permita agregar, completar y listar tareas
//pendientes.

// Gestor de tareas
/*let gestorDeTareas = {
    tareas: [],

    // Método para agregar una tarea
    agregarTarea: function (descripcion) {
        this.tareas.push({ descripcion, completada: false });
        console.log(`Tarea "${descripcion}" agregada.`);
    },

    // Método para marcar una tarea como completada
    completarTarea: function (descripcion) {
        let tarea = this.tareas.find(tarea => tarea.descripcion === descripcion);
        if (tarea && !tarea.completada) {
            tarea.completada = true;
            console.log(`Tarea "${descripcion}" completada.`);
        } else if (tarea && tarea.completada) {
            console.log(`La tarea "${descripcion}" ya está completada.`);
        } else {
            console.log(`No se encontró la tarea "${descripcion}".`);
        }
    },

    // Método para listar todas las tareas
    listarTareas: function () {
        console.log("Todas las tareas:");
        this.tareas.forEach(tarea => {
            console.log(`${tarea.descripcion} - ${tarea.completada ? 'Completada' : 'Pendiente'}`);
        });
        console.log('--------------------');
    },

    // Método para listar solo tareas pendientes
    listarTareasPendientes: function () {
        console.log("Tareas pendientes:");
        this.tareas.filter(tarea => !tarea.completada).forEach(tarea => {
            console.log(tarea.descripcion);
        });
        console.log('--------------------');
    },

    // Método para listar solo tareas completadas
    listarTareasCompletadas: function () {
        console.log("Tareas completadas:");
        this.tareas.filter(tarea => tarea.completada).forEach(tarea => {
            console.log(tarea.descripcion);
        });
        console.log('--------------------');
    }
};

// Ejemplo de uso
gestorDeTareas.agregarTarea("Estudiar JavaScript");
gestorDeTareas.agregarTarea("Hacer ejercicio");
gestorDeTareas.agregarTarea("Leer un libro");

gestorDeTareas.listarTareas();

gestorDeTareas.completarTarea("Hacer ejercicio");
gestorDeTareas.completarTarea("Estudiar JavaScript");

gestorDeTareas.listarTareasPendientes();
gestorDeTareas.listarTareasCompletadas();*/






