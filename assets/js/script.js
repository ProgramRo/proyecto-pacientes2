// Se detallan los arrays y objetos a trabajar
const radiologia = [
    {
        hora: '11:00',
        especialista: 'IGNACIO SCHULZ',
        paciente: 'FRANCISCA ROJAS',
        rut: '9878782-1', prevision: 'FONASA'
    }, {
        hora: '11:30',
        especialista: 'FEDERICO SUBERCASEAUX',
        paciente: 'PAMELA ESTRADA',
        rut: '15345241-3',
        prevision: 'ISAPRE'
    }, {
        hora: '15:00',
        especialista: 'FERNANDO WURTHZ',
        paciente: 'ARMANDO LUNA',
        rut: '16445345-9',
        prevision: 'ISAPRE'
    }, {
        hora: '15:30',
        especialista: 'ANA MARIA GODOY',
        paciente: 'MANUEL GODOY',
        rut: '17666419-0',
        prevision: 'FONASA'
    },{
        hora: '16:00',
        especialista: 'PATRICIA SUAZO',
        paciente: 'RAMON ULLOA',
        rut: '14989389-K',
        prevision: 'FONASA'
    },
];

const traumatologia = [
    {
        hora: '8:00',
        especialista: 'MARIA PAZ ALTUZARRA',
        paciente: 'PAULA SANCHEZ',
        rut: '15554774-5',
        prevision: 'FONASA'
    }, {
        hora: '10:00',
        especialista: 'RAUL ARAYA',
        paciente: 'ANGÉLICA NAVAS',
        rut: '15444147-9',
        prevision: 'ISAPRE'
    }, {
        hora: '10:30',
        especialista: 'MARIA ARRIAGADA',
        paciente: 'ANA KLAPP',
        rut: '17879423-9',
        prevision: 'ISAPRE'
    }, {
        hora: '11:00',
        especialista: 'ALEJANDRO BADILLA',
        paciente: 'FELIPE MARDONES',
        rut: '1547423-6',
        prevision: 'ISAPRE'
    }, {
        hora: '11:30',
        especialista: 'CECILIA BUDNIK',
        paciente: 'DIEGO MARRE',
        rut: '16554741-K',
        prevision: 'FONASA'
    }, {
        hora: '12:00',
        especialista: 'ARTURO CAVAGNARO',
        paciente: 'CECILIA MENDEZ',
        rut: '9747535-8',
        prevision: 'ISAPRE'
    }, {
        hora: '12:30',
        especialista: 'ANDRES KANACRI',
        paciente: 'MARCIAL SUAZO',
        rut: '11254785-5',
        prevision: 'ISAPRE'
    },
];

const dental = [
    {
        hora: '8:30',
        especialista: 'ANDREA ZUÑIGA',
        paciente: 'MARCELA RETAMAL',
        rut: '11123425-6',
        prevision: 'ISAPRE'
    }, {
        hora: '11:00',
        especialista: 'MARIA PIA ZAÑARTU',
        paciente: 'ANGEL MUÑOZ',
        rut: '9878789-2',
        prevision: 'ISAPRE'
    }, {
        hora: '11:30',
        especialista: 'SCARLETT WITTING',
        paciente: 'MARIO KAST',
        rut: '7998789-5',
        prevision: 'FONASA'
    }, {
        hora: '13:00',
        especialista: 'FRANCISCO VON TEUBER',
        paciente: 'KARIN FERNANDEZ',
        rut: '18887662-K',
        prevision: 'FONASA'
    }, {
        hora: '13:30',
        especialista: 'EDUARDO VIÑUELA',
        paciente: 'HUGO SANCHEZ',
        rut: '17665461-4',
        prevision: 'FONASA'
    }, {
        hora: '14:00',
        especialista: 'RAQUEL VILLASECA',
        paciente: 'ANA SEPULVEDA',
        rut: '14441281-0',
        prevision: 'ISAPRE'
    },
];

// Requerimiento 1.1
// Se agrega el nuevo array con las atenciones
const traumatologia2 = [
    {
        hora: '09:00',
        especialista: 'RENÉ POBLETE',
        paciente: 'ANA GELLONA',
        rut: '13123329-7',
        prevision: 'ISAPRE'
    }, {
        hora: '09:30',
        especialista: 'MARIA SOLAR',
        paciente: 'RAMIRO ANDRADE',
        rut: '12221451-K',
        prevision: 'FONASA'
    }, {
        hora: '10:00',
        especialista: 'RAUL LOYOLA',
        paciente: 'CARMEN ISLA',
        rut: '10112348-3',
        prevision: 'ISAPRE'
    }, {
        hora: '10:30',
        especialista: 'ANTONIO LARENAS',
        paciente: 'PABLO LOAYZA',
        rut: '13453234-1',
        prevision: 'ISAPRE'
    }, {
        hora: '12:00',
        especialista: 'MATIAS ARAVENA',
        paciente: 'SUSANA POBLETE',
        rut: '14345656-6',
        prevision: 'FONASA'
    },
];

// Requerimiento 1.2
// Se concatenan los dos arrays (traumatología y traumatología2)
const nuevoTrauma = traumatologia.concat(traumatologia2);

// Requerimiento 2
// Se elimina el primer y el último elemento del array radiologia
radiologia.pop();
radiologia.shift();

// Requerimiento 3.1
// Se crea una función que recorra el array dental y escriba en el HTML los datos de éste
const table = (id, array, nombre) => {
    const tabla = document.querySelector(id);
    tabla.innerHTML = `<h3 class="text-center mt-5">Consultas Médicas ${nombre}</h3>`
    for (i = 0; i < array.length; i++) {
        const datos = `<p class="text-center">${array[i].hora} - ${array[i].especialista} - ${array[i].paciente} - ${array[i].rut} - ${array[i].prevision}</p>`
        tabla.innerHTML += datos;
    }
};

// Requerimiento 3.2
// Se llama la función para escribir en el HTML
table('#consultas', dental, 'DENTAL');

// Requerimiento 4
// Se selecciona el elemento por id
const pacientesAtendidos = document.querySelector('#lista-de-pacientes');
// Se crean las constantes, concatenan, seleccionan por condición y se escriben en el HTML
const totalPacientes = nuevoTrauma.concat(dental, radiologia);
totalPacientes.forEach(function(nombre) {
    console.log(nombre.paciente);
    pacientesAtendidos.innerHTML += `${nombre.paciente}<br>`
});

// Requerimiento 5
// Se selecciona el elemento por id
const dentalFiltro = document.querySelector('#dental-filtro');
// Se crean las constantes, filtran, mapean y se escriben en el HTML
const pacientesDental = dental.filter(prev => prev.prevision === 'ISAPRE');
const pacientesIsapre = pacientesDental.map(paciente => paciente.paciente).join(" - ");
dentalFiltro.innerHTML += `${pacientesIsapre}`;

// Requerimiento 6
// Se selecciona el elemento por id
const traumaFiltro = document.querySelector('#trauma-filtro');
// Se crean las constantes, filtran, mapean y se escriben en el HTML
const pacientesTrauma = nuevoTrauma.filter(prev => prev.prevision === 'FONASA');
const pacientesFonasa = pacientesTrauma.map(paciente => paciente.paciente).join(" - ");
traumaFiltro.innerHTML += `${pacientesFonasa}`;