//programacion rientada a objetos poo construcctor ejemplo objetos que usaremos 
class Encuesta {
    constructor(pregunta, opciones) {
      this.pregunta = pregunta;
      this.opciones = opciones;
    }
  }
  
  // Función para crear una lista de encuestas progranacion funcinal PF ejemplo las acciones
  function crearEncuestasPredefinidas() {
    // Creamos tres instancias de la clase Encuesta con preguntas y opciones de respuesta predefinidas
    const encuesta1 = new Encuesta("¿Cuál es tu color favorito?", ["Rojo", "Azul", "Verde"]);
    const encuesta2 = new Encuesta("¿Cuál es tu animal favorito?", ["Perro", "Gato", "Pájaro"]);
    const encuesta3 = new Encuesta("¿Cuál es tu comida favorita?", ["Pizza", "Hamburguesa", "Sushi"]);
  
    // Devolvemos un array con las encuestas creadas
    return [encuesta1, encuesta2, encuesta3];
  }
  
  // Función para que el usuario responda una encuesta
  function responderEncuesta(encuesta) {
    // Construimos el mensaje de la encuesta
    let encuestaMsg = `Pregunta: ${encuesta.pregunta}\n\n`;
    encuestaMsg += `Opciones de respuesta:\n`;
    encuesta.opciones.forEach((opcion, index) => {
      encuestaMsg += `${index + 1}: ${opcion}\n`;
    });
  
    // Solicitamos al usuario que elija una opción de respuesta ingresando un número,convierte cadena en numero parseInt
    const respuesta = parseInt(prompt(encuestaMsg + "\nIngrese el número de la opción que considera correcta:"));
  
    // Validamos la respuesta del usuario
    if (respuesta >= 1 && respuesta <= encuesta.opciones.length) {
      const opcionSeleccionada = encuesta.opciones[respuesta - 1];
      alert(`¡Has seleccionado "${opcionSeleccionada}" como respuesta!\n¡Gracias por participar en nuestra encuesta!`);
    } else {
      alert("Selección inválida. Por favor, ingrese un número válido.");
    }
  }
  
  // Función principal para ejecutar decide que acciones y orden
  function main() {
    // Creamos una lista de encuestas predefinidas llamando a la función crearEncuestasPredefinidas
    const encuestas = crearEncuestasPredefinidas();
  
    // Constru el mensaje de las encuestas disponibles
    let encuestasDisponiblesMsg = "Encuestas disponibles:\n";
    encuestas.forEach((encuesta, index) => {
      encuestasDisponiblesMsg += `${index + 1}: ${encuesta.pregunta}\n`;
    });
  
    // Solicitamos al usuario que elija una encuesta ingresando un número
    const seleccion = parseInt(prompt(encuestasDisponiblesMsg + "\nIngrese el número de la encuesta que desea responder:"));
  
    // Validamos la selección del usuario
    if (seleccion >= 1 && seleccion <= encuestas.length) {
      // Obtenemos la encuesta que eligio
      const encuestaSeleccionada = encuestas[seleccion - 1];
  
      // Permitimos al usuario responder la encuesta seleccionada
      responderEncuesta(encuestaSeleccionada);
    } else {
      alert("Selección inválida. Por favor, ingrese un número válido.");
    }
  }
  
  // Llamamos a la función principal para iniciar el programa
  main();