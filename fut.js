// Arreglo de objetos con información de los futbolistas
const futbolistas = [
    { nombre: "Lionel Messi", equipo: "Paris Saint-Germain", posicion: "Delantero", Pais: "Argentina" },
    { nombre: "Cristiano Ronaldo", equipo: "Manchester United", posicion: "Delantero", Pais: "Portugal" },
    { nombre: "Diego Maradona", equipo: "Retirado", posicion: "Mediocampista", Pais: "Argentina" },
    { nombre: "Pelé", equipo: "Retirado", posicion: "Delantero", Pais: "Brasil" },
    { nombre: "Zinedine Zidane", equipo: "Retirado", posicion: "Mediocampista", Pais: "Francia" },
    { nombre: "Ronaldinho", equipo: "Retirado", posicion: "Delantero", Pais: "Brasil" },
    { nombre: "Ferenc Puskás", equipo: "Retirado", posicion: "Delantero", Pais: "Hungría" },
    { nombre: "Alfredo Di Stéfano", equipo: "Retirado", posicion: "Delantero", Pais: "Argentina/España" },
    { nombre: "Franz Beckenbauer", equipo: "Retirado", posicion: "Defensa/Mediocampista", Pais: "Alemania" },
    { nombre: "George Best", equipo: "Retirado", posicion: "Delantero", Pais: "Irlanda del Norte" },
    { nombre: "Johan Cruyff", equipo: "Retirado", posicion: "Delantero/Mediocampista", Pais: "Países Bajos" },
    { nombre: "Michel Platini", equipo: "Retirado", posicion: "Mediocampista", Pais: "Francia" }
];

// Función para mostrar la información de los futbolistas utilizando Map
function mostrarFutbolistas() {
    const futbolistasList = document.getElementById('futbolistas-lista');

    //Map para recorrer el arreglo de futbolistas y mostrar la información
    futbolistas.map(futbolista => {
        const card = document.createElement('div');
        card.classList.add('col-md-6', 'mb-3');

        card.innerHTML = `
        <div class="card">
        <div class="card-body d-flex justify-content-center">
            <div class="special-list row g-0">
                <div class="col-md-12 p-2">
                    <div class="text-center">
                        <ul class="list-unstyled list-inline">
                            <li class="text-capitalize mt-3 mb-2 list-inline-item">${futbolista.nombre}</li>
                            <li class="text-capitalize mt-3 mb-2 list-inline-item">${futbolista.equipo}</li>
                            <li class="text-capitalize mt-3 mb-2 list-inline-item">${futbolista.posicion}</li>
                            <li class="text-capitalize mt-3 mb-2 list-inline-item">${futbolista.Pais}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
        futbolistasList.appendChild(card);
    });
}

// Mostrar los futbolistas cuando la página se cargue
window.onload = mostrarFutbolistas;