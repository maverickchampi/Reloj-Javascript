const mostrar = () => {
    let fecha = new Date();
    let hora = formato(fecha.getHours());
    let minutos = formato(fecha.getMinutes());
    let segundos = formato(fecha.getSeconds());

    document.getElementById('hora').innerHTML = `${hora} : ${minutos} : ${segundos}`;

    const meses = ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'];
    const dias = ['Dom','Lun','Mar','Mie','Jue','Vie','Sab'];

    let diaSemana = dias[fecha.getDay()];
    let dia = fecha.getDate();
    let mes = meses[fecha.getMonth()];

    let fechaTexto = `${diaSemana}, ${dia} ${mes}`;
    
    document.getElementById('fecha').innerHTML = fechaTexto;

    document.getElementById('contenedor').classList.toggle('animar');
};

const formato = (elemento) => {
    if(elemento < 10)
        elemento = '0' + elemento;
    return elemento;
};

setInterval(mostrar,1000);