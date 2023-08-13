const nombreInput = document.getElementById("nombre");

  nombreInput.addEventListener("input", function(event) {
    const inputValue = event.target.value;
    const soloLetras =  /^[A-Za-z][a-z]{2,10}$/; // Expresión regular para validar solo letras

    // Si el valor ingresado no contiene solo letras, muestra un mensaje de error
    if (!soloLetras.test(inputValue)) {
      document.getElementById("msj__nombre").textContent = "Formato de nombre incorrecto.";
      msj__nombre.style.color = 'red';
      msj__nombre.style.flexDirection = "column";
    } else {
      document.getElementById("msj__nombre").textContent = ""; // Limpia el mensaje de error
    }
  });

  const apellidoInput = document.getElementById("apellido");
  apellidoInput.addEventListener("input", function(event) {
    const inputValue = event.target.value;
    const soloLetras = /^[A-Za-záéíóúñÁÉÍÓÚÑ'``]{2,20}$/; // Expresión regular para validar solo letras
    if (!soloLetras.test(inputValue)) {
      document.getElementById("msj__apellido").textContent = "Formato de apellido incorrecto";
      msj__apellido.style.color = 'red';
    } else {
      document.getElementById("msj__apellido").textContent = "";
    }
  });

  
  const documentoInput = document.getElementById("documento");
  documentoInput.addEventListener("input", function(event) {
    const inputValue = event.target.value;
    const soloNumeros = /^[0-9]*$/; // Expresión regular para validar solo números
    if (!soloNumeros.test(inputValue)) {
      document.getElementById("msj__documento").textContent = "Por favor, ingresa solo números.";
      msj__documento.style.color = 'red';
    } else {
      document.getElementById("msj__documento").textContent = ""; // Limpia el mensaje de error
    }
  });

  const direccionInput = document.getElementById("direccion");
  direccionInput.addEventListener("input", function(event) {
    const inputValue = event.target.value;
    const caracteresPermitidos =  /^[A-Za-z0-9\s,.\-()'°"/]{10,200}$/; // Expresión regular para validar letras, números y espacios
    if (!caracteresPermitidos.test(inputValue)) {
      document.getElementById("msj__direccion").textContent = "Ingrese Calle y Altura. Solo números y letras";
      msj__direccion.style.color = 'red';
    } else {
      document.getElementById("msj__direccion").textContent = "";
    }
  });




