const time = document.getElementById('time');
const date = document.getElementById('date');

const dayNames = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

const monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

const interval = setInterval(() =>{

    const local = new Date();

    let day = local.getDate(),
        name = local.getDay(),
        month = local.getMonth(),
        year = local.getFullYear();

    time.innerHTML = local.toLocaleTimeString();
    date.innerHTML = `${dayNames[name]} ${day} ${monthNames[month]} ${year}`;
}, 1000);
