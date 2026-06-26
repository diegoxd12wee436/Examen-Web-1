//carrito
const carrito = document.querySelector('#carr tbody');
const vaciarCarritoBtn = document.querySelector('#cleanCar');
const listaPlatos = document.querySelector('#lista-pro');
let articulosCarrito = [];

cargarEventListeners();

function cargarEventListeners() {
    listaPlatos.addEventListener('click', agregarPlato);
    document.querySelector('#carr').addEventListener('click', eliminarPlato);
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
}

function agregarPlato(e) {
    e.preventDefault();
    if (e.target.hasAttribute('data-id')) {
        const platoSeleccionado = e.target.parentElement;
        leerDatosPlato(platoSeleccionado);
    }
}

function leerDatosPlato(plato) {
    const infoPlato = {
        imagen: plato.querySelector('img').src,
        titulo: plato.querySelector('h3').textContent,
        precio: plato.querySelector('.precio em').textContent,
        id: plato.querySelector('a').getAttribute('data-id')
    }

    articulosCarrito.push(infoPlato);
    carritoHTML();
}

function carritoHTML() {
    limpiarHTML();
    articulosCarrito.forEach(plato => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><img src="${plato.imagen}" width="50" style="border-radius: 50%;"></td>
            <td>${plato.titulo}</td>
            <td>${plato.precio}</td>
            <td><a href="#" class="borrar" data-id="${plato.id}">X</a></td>
        `;
        carrito.appendChild(row);
    });
}

function limpiarHTML() {
    while (carrito.firstChild) {
        carrito.removeChild(carrito.firstChild);
    }
}

function eliminarPlato(e) {
    e.preventDefault();
    if (e.target.classList.contains('borrar')) {
        const platoId = e.target.getAttribute('data-id');
        const index = articulosCarrito.findIndex(plato => plato.id === platoId);
        if (index !== -1) {
            articulosCarrito.splice(index, 1);
        }
        carritoHTML();
    }
}

function vaciarCarrito(e) {
    e.preventDefault();
    articulosCarrito = [];
    limpiarHTML();
}
const btnLoadMore = document.querySelector('#load-more');
const cajasPlatos = document.querySelectorAll('.box');

for (let i = 4; i < cajasPlatos.length; i++) {
    cajasPlatos[i].style.display = 'none';
}

if (btnLoadMore) {
    btnLoadMore.addEventListener('click', (e) => {
        e.preventDefault();
        for (let i = 4; i < cajasPlatos.length; i++) {
            cajasPlatos[i].style.display = 'flex';
        }
        btnLoadMore.style.display = 'none';
    });
}