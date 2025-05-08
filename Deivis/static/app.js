// script.js
document.getElementById('registroForm').addEventListener('submit', function(event) {
    const contrasena = document.getElementById('contrasena').value;
    const confirmarContrasena = document.getElementById('confirmarContrasena').value;
    const terminos = document.getElementById('terminos').checked;
  
    if (contrasena !== confirmarContrasena) {
      alert('Las contraseñas no coinciden.');
      event.preventDefault();
      return;
    }
  
    if (!terminos) {
      alert('Debes aceptar los términos y condiciones.');
      event.preventDefault();
      return;
    }
  
    alert('Formulario enviado correctamente.');
  });
  