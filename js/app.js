const encuesta= new pregunta();
const titulo= document.getElementById('tituloModal');
const divResultados= document.getElementById('resultados');

function eventListener() {
    document.getElementById('VAfavor').addEventListener('click', sumaAfavor);
    document.getElementById('VEncontra').addEventListener('click', sumaEncontra);
    document.getElementById('VInsegura').addEventListener('click', sumaInsegura);

    document.getElementById('btnDetener').addEventListener('click', newRespuesta);
}

eventListener();

function sumaAfavor() {
    encuesta.favor++;
    console.log(encuesta.favor);
}

function sumaEncontra() {
    encuesta.contra++;
    console.log(encuesta.contra);
}

function sumaInsegura() {
    encuesta.insegura++;
    console.log(encuesta.insegura);
}

function newRespuesta() {
    let resultados= encuesta.agregarResultados(encuesta.favor, encuesta.contra, encuesta.insegura);

    divResultados.appendChild(resultados);
}