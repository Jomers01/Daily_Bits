const registrarse = document.getElementById('btnSingUp');

registrarse.addEventListener('click', ()=>{
    Swal.fire({
        title: '<strong>Registrate</strong>',
        html:
        `<form id="form-registro">
        <label for="nombre">Nombre</label>
        <input class="email-input" type="text" id="nombre" required>
        <label for="apellido">Apellido</label>
        <input class="email-input" type="text" id="apellido" required>
        <label for="email">Correo Electronico</label>
        <input class="email-input" type="email" id="email" required>
        </form>`
      })
})