// Definición de la función para evaluar la altura y la edad de las personas
function evaluarAlturaEdad() {
    var nombre = prompt("Ingresa tu nombre:");
  
    var fechaNacimiento = prompt("Ingresa tu fecha de nacimiento en formato 'año/mes/día':");
  
    
    var fechaActual = new Date();
  
    
    var fechaNacimientoObjeto = new Date(fechaNacimiento);
  
   
    var diferenciaTiempo = fechaActual - fechaNacimientoObjeto;
  
   
    var edad = Math.floor(diferenciaTiempo / (1000 * 60 * 60 * 24 * 365.25));
  
    
    var altura = parseFloat(prompt("Ingresa tu altura en metros:"));
  
    
    var motivo = "";
  
    
    if (altura >= 1.60 && edad >= 15) {
     
      console.log(nombre + ", puedes subir al juego porque tu altura " + altura + " es mayor a 1.60 y tu edad " + edad + " años es mayor a 15 .");
    } else if (altura < 1.60 && edad >= 15) {
      
      console.log(nombre + ", no puedes subir al juego porque tu altura " + altura + "metros es menor a 1.60 metros.");
    } else if (altura >= 1.60 && edad < 15) {
      
      console.log(nombre + ", no puedes subir al juego porque tu edad " + edad + " años es menor a 15.");
    } else {
      
      console.log(nombre + ", no puedes subir al juego porque tu altura " + altura + " metros es menor a 1.60 y tu edad " + edad + " años es menor a 15.");
    }
  }
  
  evaluarAlturaEdad();