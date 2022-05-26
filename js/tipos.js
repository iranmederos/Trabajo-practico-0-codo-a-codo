window.onload = () => {
    const TIPOS = [
        {
            "id": 1,
            "nombre": "Reina Pepiada",
            "image": "img/tipos/reina-pepiada.jpg",
            "descripcion": "La reina pepiada es la arepa más famosa de Venezuela, sin lugar a dudas. Es un tipo de arepa asada que se rellena con una mezcla de pollo desmechado, mayonesa, aguacate majado y en rodajas, cilantro, y especias."

        },

        {
            "id": 2,
            "nombre": "La Catira",
            "image": "img/tipos/catira.jpg",
            "descripcion": "La Arepa Catira es una delicia, esta rellena con pollo sazonado con un sofrito de cebolla, pimentones y desmenuzado, acompañado de un queso tierno amarillo rallado."
        },

        {
            "id": 3,
            "nombre": "La pelua",
            "image": "img/tipos/pelua.jpg",
            "descripcion": "La arepa pelúa es una de las arepas preferidas de los venezolanos. Básicamente se trata de una arepa hecha de harina de maíz rellena con carne mechada y queso amarillo rallado. Debido a su relleno funciona muy bien para cualquier ocasión, a la hora del desayuno, cena o, incluso como almuerzo."
        },

        {
            "id": 4,
            "nombre": "La Dominó",
            "image": "img/tipos/domino.jpg",
            "descripcion": "La arepa dominó es una de las arepas más consumidas en todo el territorio, probablemente porque la mayoría de estas se realizan al día siguiente de haber hecho un rico pabellón criollo (primer plato consumido en Venezuela), aprovechando las sobras de las caraotas que pudiesen haber quedado."
        },

        {
            "id": 5,
            "nombre": "La viuda",
            "image": "img/tipos/viuda.jpg",
            "descripcion": "La viuda, el nombre viene porque es la arepa que ha quedado sin relleno. Es perfecta como acompañante de comidas, especialmente sopas, asados, parrillas, guisos, salsas y para poner en práctica la creatividad y habilidades culinarias o adaptarla a tus gustos"

        },

        {
            "id": 6,
            "nombre": "La sifrina",
            "image": "img/tipos/sifrina.jpg",
            "descripcion": "La arepa sifrina es una preparación fresca, deliciosa y nutritiva que le suma a la reina pepiada o reina pepeada queso amarillo rallado. Su húmedo relleno está compuesto por pollo desmechado mezclado con aguacate y mayonesa. La original recibe el nombre de reina en honor a una reina de belleza."
        }
    ];

    let container = document.querySelector('.container2');
    let cards = [];
    for (let i = 0; i < TIPOS.length; i++) {
        cards.push(`
        <div class="card">
            <img class="img-card" src=${TIPOS[i].image} alt="">
            <div>
                <h4>ID: ${TIPOS[i].id}</h4>
                <p>Nombre: ${TIPOS[i].nombre}</p>
                <p>Descripcion: ${TIPOS[i].descripcion}</p>
            </div>
        </div>`);
    }
    container.innerHTML= cards.join(" ");
}

