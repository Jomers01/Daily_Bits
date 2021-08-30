const registrarse = document.getElementById('btnSingUp');
const URL_API = 'http://localhost:3000/Usuarios';
const iniciarS = document.getElementById('btnIniciar');
const btnGoogle = document.getElementById('google');
let login = []

document.addEventListener('DOMContentLoaded', ()=>{
  login = JSON.parse(localStorage.getItem('Login'));

  if (login != null) {
    window.location="./cursos.html";
  }else{
    login = [];
  }

})

//Inicio de sesion
iniciarS.addEventListener('click', async()=>{
  //Cada que un usuario inicia sesion llamo a la API para realizar verificaciones
  const resp = await fetch(URL_API);
  const data = await resp.json();

    //Capturo el email ingresado
    let email = document.getElementById('Email').value;
    //Si el usuario ingreso algo en el campo input
    if (email != '') {
      //recorro mi API en donde verifirico si esta un correo igual al que esta ingresando
      let comprobador = data.find(correo => correo.email.toLowerCase() == email.toLowerCase());

      //Si consiguio algun correo 
      if (comprobador != undefined) {
        //Verifica que el correo que encontro sea igual al que ingreso el usuario
        if (comprobador.email.toLowerCase() == email.toLowerCase()) {
          window.location="./cursos.html";
          login.push(comprobador)
          localStorage.setItem('Login', JSON.stringify(login));
        }
      //Si no consiguio ningun correo 
      }else{
        //Manda una alerta en donde dice que el correo no es valido para iniciar sesion
        Swal.fire({
          icon: 'error',
          title: 'Correo no registrado',
          showConfirmButton: false,
          timer: 2000
        })
      }
    //Si no ingreso nada en el input
    }else{
      //Le manda una alerta diciendo que debe ingresar un correo
      Swal.fire({
        icon: 'error',
        title: 'Debes ingresar un correo',
        showConfirmButton: false,
        timer: 2000
      })
    }
})

//Registro de nuevo usuario.
registrarse.addEventListener('click', async()=>{

    //Cada que un usuario se registra llamo a la API para realizar verificaciones
    const resp = await fetch(URL_API);
    const data = await resp.json();

    //Muestro la alerta del formulario de registro
    Swal.fire({
        title: '<strong>Registrate</strong>',
        backdrop: true,
        confirmButtonText: `Registrarse`,
        html:
        `<input type="text" placeholder="Nombre y Apellido" id="nombre"><br><br>
        <input type="email" placeholder="Email" id="email"><br><br>
        <input type="text" placeholder="Teléfono" id="telefono"><br><br>
        <input type="date" placeholder="Fecha de nacimiento" id="date">`
      }).then((result)=>{
        //Si le da al boton de registrase
        if (result.isConfirmed) {
          //Capturo los datos almacenados en los inputs
            let name = document.getElementById('nombre').value;
            let email = document.getElementById('email').value;
            let tel = document.getElementById('telefono').value;
            let date = document.getElementById('date').value;
            
            //Verifico si todos los campos estan llenos
            if (name, email, tel, date != '') {
              //Recorro mis API verificando que el correo ingresado no haya otro usuario con el mismo
              let comprobador = data.find(correo => correo.email.toLowerCase() == email.toLowerCase())
              //Si consiguio algun correo
              if (comprobador != undefined) {
                //Si hay un correo que concuerda con el correo que acaba de ingresar no le permitira registrarse
                if (comprobador.email.toLowerCase() == email.toLowerCase()) {
                  Swal.fire({
                    icon: 'warning',
                    title: 'Este email ya esta registrado',
                    showConfirmButton: false,
                    timer: 3000
                  })
                //Si el correo no existe en mi base de datos le dara una alerta que el registro fue exitoso
                }
              }else{
                //llamo a mi funcion registro en donde hara la peticion POST a mi API en donde guardara el nuevo usuario
                regitro(name, email, tel, date);
              }
            //Si algun campo falta por llenar le mostrara una alerta diciendole que debe llenar todos los campos
            }else{
              Swal.fire({
                icon: 'error',
                title: 'Porfavor llena todos los campos',
                showConfirmButton: false,
                timer: 2000
              })
            }
            
        }
      })
})

//funcion en donde hago la peticion POST a mi API para ingresar el nuevo usuario
const regitro = async(name, email, tel, date)=>{

  await fetch(URL_API,{
    method:'POST',
    body:JSON.stringify({
      nombre: name,
      email: email,
      telefono: tel,
      date: date,
      curso: []
    }),
    headers:{"Content-Type": "application/json; charset=UTF-8"}
  });

  const resp = await fetch(URL_API);
  const data = await resp.json();
  let comprobador = data.find(correo => correo.email.toLowerCase() == email.toLowerCase())

  const newR = {
    nombre: name,
    email: email,
    telefono: tel,
    date: date,
    id: comprobador.id,
    curso: []
  }
  login.push(newR)
  localStorage.setItem('Login', JSON.stringify(login));
  //Recargo a la pagina de cursos
  window.location="./cursos.html";
}

//Boton de Google
btnGoogle.addEventListener('click', ()=>{
  Swal.fire({
    icon: 'info',
    title: 'Proximamente',
    showConfirmButton: false,
    timer: 1200,
  })
})