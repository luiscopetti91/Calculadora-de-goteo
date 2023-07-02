function calcularGoteo() {
  const volumenSuero = parseInt(document.getElementById('volumen').value);
  const tiempo = parseInt(document.getElementById('tiempo').value);
  const unidadTiempo = document.getElementById('unidadTiempo').value;

  let resultado = '';

  if (!isNaN(volumenSuero) && !isNaN(tiempo)) {
    let tiempoEnMinutos = tiempo;
    if (unidadTiempo === 'horas') {
      tiempoEnMinutos *= 60;
    }

    const goteoMicrogotas = (volumenSuero * 60) / tiempoEnMinutos;
    const goteoMacrogotas = (volumenSuero * 20) / tiempoEnMinutos;
    const goteoMlHora = goteoMicrogotas;

    resultado += `El goteo en microgotas por minuto es de ${goteoMicrogotas.toFixed(2)} μgtt/min (${Math.ceil(goteoMicrogotas)}).<br>`;
    resultado += `El goteo en macrogotas por minuto es de ${goteoMacrogotas.toFixed(2)} gtt/min (${Math.ceil(goteoMacrogotas)}).<br>`;
    resultado += `El goteo en mililitros por hora es de ${goteoMlHora.toFixed(2)} ml/h (${Math.ceil(goteoMlHora)}).<br>`;
  }

  document.getElementById('resultado').innerHTML = resultado;
}