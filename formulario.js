|document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario

    // Obtén los valores del formulario
    const nombre = document.getElementById('nombre').value;
    const edad = document.getElementById('edad').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;
    const ciudad = document.getElementById('ciudad').value;
    const intereses = document.getElementById('intereses').value;
    const motivo = document.getElementById('motivo').value;
    const emocion = document.getElementById('emocion').value;
    const ejercicio = document.getElementById('ejercicio').checked ? 'Sí' : 'No';
    const sintomas = document.getElementById('sintomas').value;

    // Muestra los datos ingresados
    document.getElementById('displayNombre').textContent = nombre;
    document.getElementById('displayEdad').textContent = edad;
    document.getElementById('displayEmail').textContent = email;
    document.getElementById('displayTelefono').textContent = telefono;
    document.getElementById('displayCiudad').textContent = ciudad;
    document.getElementById('displayIntereses').textContent = intereses;
    document.getElementById('displayMotivo').textContent = motivo;
    document.getElementById('displayEmocion').textContent = emocion;
    document.getElementById('displayEjercicio').textContent = ejercicio;
    document.getElementById('displaySintomas').textContent = sintomas;

    // Muestra el contenedor con los datos ingresados
    document.getElementById('datosIngresados').style.display = 'block';
});
