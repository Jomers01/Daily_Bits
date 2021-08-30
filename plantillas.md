//Platilla de Pregunta seleccion simple
principal.innerHTML = 
                `<div class="container-curso">
                <div class="curso-encabezado">
                    <span id="atras" onclick="atras()"><i class="fas fa-times"></i></span>
                    <div class="bar-progress">
                        <div class="progress" style="width: ${progreso}%"></div>
                    </div>
                    <span><b class="vidas">${life}</b> <i class="fas fa-heart" style="color: red;"></i></span>
                </div>
                <div class="pregunta">
                    <img src="./images/chico.png" alt="">
                    <p class="preguntaP">${cursohtml[rand].pregunta}</p>
                </div>
                <div class="opciones">
                    <label class="opcion-select" onclick="pintar()" for="main">
                        <span>${cursohtml[rand].opcion1}</span><input type="radio" id="main" value="${cursohtml[rand].opcion1}" name="check">
                    </label>
                    <label class="opcion-select" onclick="pintar()" for="section">
                        <span>${cursohtml[rand].opcion2}</span><input type="radio" id="section" value="${cursohtml[rand].opcion2}" name="check">
                    </label>
                    <label class="opcion-select" onclick="pintar()" for="header">
                        <span>${cursohtml[rand].opcion3}</span><input type="radio" id="header" value="${cursohtml[rand].opcion3}" name="check">
                    </label>
                    <button id="btnComprobar" class="btnComprobar" onclick="comprobarRespSeleccion(cursohtml[rand])">COMPROBAR</button>
                </div>
                </div>`

//Platilla de seleccion de imagenes
principal.innerHTML = 
                `<div class="curso-encabezado">
                <span id="atras" onclick="atras()"><i class="fas fa-times"></i></span>
                <div class="bar-progress">
                    <div class="progress" style="width: 10%"></div>
                </div>
                <span><b class="vidas">${life}</b> <i class="fas fa-heart" style="color: red;"></i></span>
            </div>
            <div class="pregunta">
                <p class="preguntaO">${cursohtml[rand].pregunta}</p>
            </div>
            <div class="opcionesImg">
                <label class="opcion-select" onclick="pintar()" for="main" style="width: 150px; margin-right: 10px;">
                    <span>${cursohtml[rand].opcion1} ${cursohtml[rand].opcion1text}</span><input type="radio" id="main" value="${cursohtml[rand].opcion1text}" name="check" style="display: none;">
                </label>
                <label class="opcion-select" onclick="pintar()" for="section" style="width: 150px;">
                    <span>${cursohtml[rand].opcion2} ${cursohtml[rand].opcion2text}</span><input type="radio" id="section" value="${cursohtml[rand].opcion2text}" name="check" style="display: none;">
                </label>
                <label class="opcion-select" onclick="pintar()" for="header" style="width: 150px; margin-right: 10px;">
                    <span>${cursohtml[rand].opcion3}${cursohtml[rand].opcion3text}</span><input type="radio" id="header" value="${cursohtml[rand].opcion3text}" name="check" style="display: none;">
                </label>
                <label class="opcion-select" onclick="pintar()" for="header" style="width: 150px;">
                    <span>${cursohtml[rand].opcion4}${cursohtml[rand].opcion4text}</span><input type="radio" id="header" value="${cursohtml[rand].opcion4text}" name="check" style="display: none;">
                </label>
                <button id="btnComprobar" class="btnComprobar" onclick="comprobarRespSeleccion(cursohtml[rand])">COMPROBAR</button>
            </div>`

//Curso.js completo
const URL_API = 'http://localhost:3000/Usuarios';
const URL_API2 = 'http://localhost:3001/cursohtml';
const  inicio = document.getElementById('home');
const  status = document.getElementById('status');
const  perfil = document.getElementById('perfil');
const container = document.getElementById('container');
const principal = document.getElementById('container-abuelo');
//Vidas
let life = 4;
let x;

//Apenas carge el documento me aseguro de que llame a mi contenido del inicio
document.addEventListener('DOMContentLoaded', inicioP())

//Funcion que me mostrara el inicio de mi app cuando logre iniciar sesion
function inicioP(){
    //Le agrego la clase active a la categoria inicio y se las elimino a las demas
    inicio.setAttribute('class', "container-nav active")
    status.setAttribute('class', "container-nav")
    perfil.setAttribute('class', "container-nav")

    //Imprimo en mi documento el contenido de la pagina inicio
    container.innerHTML = 
    `<div class="container">
        <div class="encabezado">
        <p class="text">Practica tus conocimientos en la categoría que prefieras.</p>
    </div>
    <div class="cursos">
        <div class="html" onclick="learHtml()">
            <span class="icon-html"><i class="fab fa-html5" style="color: white;"></i></span>
            <div class="icon-background" style="background-color: orangered"></div>
            <span class="title-icon-html">HTML</span>
        </div>
    </div>
    <div class="cursos">
        <div class="css" onclick="learCss()">
            <span class="icon-css"><i class="fab fa-css3-alt" style="color: white;"></i></i></span>
            <div class="icon-background" style="background-color: rgb(65, 202, 236);"></div>
            <span class="title-icon-css">CSS</span>
        </div>
        <div class="js" onclick="learJs()">
            <span class="icon-js"><i class="fab fa-js-square" style="color: white;"></i></span>
            <div class="icon-background" style="background-color: #ffbf00;"></div>
            <span class="title-icon-js">JAVASCRIPT</span>
        </div>
    </div>
    <div class="cursos">
        <div class="js" onclick="prox()">
            <span class="icon-fig"><i class="fab fa-figma" style="color: white;"></i></span>
            <div class="icon-background" style="background-color: rgb(63, 63, 62);"></div>
            <span class="title-icon-fig">FIGMA</span>
        </div>
        <div class="js" onclick="prox()">
            <span class="icon-bts"><i class="fab fa-bootstrap" style="color: white;"></i></span>
            <div class="icon-background" style="background-color: #572364;"></div>
            <span class="title-icon-ux">BOOTSTRAP</span>
        </div>
    </div>
</div>`
}
//Escucho el envento click en caso de que el usuario quiera volver al inicio
inicio.addEventListener('click', inicioP)

//Escucho el evento click en la categoria de status para mostrar el perfil
status.addEventListener('click', ()=>{
    //Le agrego la clase active a la categoria status y se las elimino a las demas
    inicio.setAttribute('class', "container-nav")
    status.setAttribute('class', "container-nav active")
    perfil.setAttribute('class', "container-nav")

    //Imprimo en mi documento el contenido de la pagina status
    container.innerHTML = '';
})

//Escucho el evento click en la categoria de perfil para mostrar el perfil
perfil.addEventListener('click', mostrarPerfil)

function mostrarPerfil() {
    //Le agrego la clase active a la categoria perfil y se las elimino a las demas
    inicio.setAttribute('class', "container-nav")
    status.setAttribute('class', "container-nav")
    perfil.setAttribute('class', "container-nav active")

    let datos = JSON.parse(localStorage.getItem('Login'));

    //Imprimo en mi documento el contenido de la pagina perfil
    container.innerHTML = 
    `<div class="container-perfil">
    <h1 class="title-perfil">Perfil</h1>
    <div class="info-perfil">
        <h2 class="nombre">${datos[0].nombre}</h2>
        <h3 class="email">${datos[0].email}</h3>
        <h4 class="logout" onclick="editar()">Editar perfil</h4>
        <h4 class="logout" onclick="logout()">Cerrar Sesion</h4>
    </div>`;
}


//Aprender HTML
async function learHtml(){
    let progreso = localStorage.getItem('Progreso');
    if (progreso < 100) {
        const resp = await fetch(URL_API2);
        const data = await resp.json();
        cursohtml = []
        rand = Math.floor((Math.random() * (4 - 0 + 1)) + 0);
        for (let i = 0; i < data.length; i++) {
        const element = data[i];
        cursohtml.push(element)
        }
        
        let idCurso = cursohtml.find(tipo => tipo.id == rand);
        if (cursohtml.length >= 0 && x != rand && idCurso.tipo == "seleccion") {
            x = rand;
            principal.innerHTML = 
                `<div class="container-curso">
                <div class="curso-encabezado">
                    <span id="atras" onclick="atras()"><i class="fas fa-times"></i></span>
                    <div class="bar-progress">
                        <div class="progress" style="width: ${progreso}%"></div>
                    </div>
                    <span><b class="vidas">${life}</b> <i class="fas fa-heart" style="color: red;"></i></span>
                </div>
                <div class="pregunta">
                    <img src="./images/chico.png" alt="">
                    <p class="preguntaP">${cursohtml[rand].pregunta}</p>
                </div>
                <div class="opciones">
                    <label class="opcion-select" onclick="pintar()" for="main">
                        <span>${cursohtml[rand].opcion1}</span><input type="radio" id="main" value="${cursohtml[rand].opcion1}" name="check">
                    </label>
                    <label class="opcion-select" onclick="pintar()" for="section">
                        <span>${cursohtml[rand].opcion2}</span><input type="radio" id="section" value="${cursohtml[rand].opcion2}" name="check">
                    </label>
                    <label class="opcion-select" onclick="pintar()" for="header">
                        <span>${cursohtml[rand].opcion3}</span><input type="radio" id="header" value="${cursohtml[rand].opcion3}" name="check">
                    </label>
                    <button id="btnComprobar" class="btnComprobar" onclick="comprobarRespSeleccion(cursohtml[rand])">COMPROBAR</button>
                </div>
                </div>`
        }else if(cursohtml.length >= 0 && x != rand && idCurso.tipo == "arrastrar"){
            x = rand;

            principal.innerHTML = 
                `<div class="container-curso">
                <div class="curso-encabezado">
                    <span id="atras" onclick="atras()"><i class="fas fa-times"></i></span>
                    <div class="bar-progress">
                        <div class="progress" style="width: ${progreso}%"></div>
                    </div>
                    <span><b class="vidas">${life}</b> <i class="fas fa-heart" style="color: red;"></i></span>
                </div>
                <div class="pregunta">
                    <img src="./images/chico.png" alt="">
                    <p class="preguntaP">${cursohtml[rand].pregunta}</p>
                </div>
                <div class="opciones">
                    <label class="opcion-select" onclick="pintar()" for="main">
                        <span>${cursohtml[rand].opcion1}</span><input type="radio" id="main" value="${cursohtml[rand].opcion1}" name="check">
                    </label>
                    <label class="opcion-select" onclick="pintar()" for="section">
                        <span>${cursohtml[rand].opcion2}</span><input type="radio" id="section" value="${cursohtml[rand].opcion2}" name="check">
                    </label>
                    <label class="opcion-select" onclick="pintar()" for="header">
                        <span>${cursohtml[rand].opcion3}</span><input type="radio" id="header" value="${cursohtml[rand].opcion3}" name="check">
                    </label>
                    <button id="btnComprobar" class="btnComprobar" onclick="comprobarResp(cursohtml[rand])">COMPROBAR</button>
                </div>
                </div>`
        }else{
            x = rand;

            principal.innerHTML = 
                `<div class="curso-encabezado">
                <span id="atras" onclick="atras()"><i class="fas fa-times"></i></span>
                <div class="bar-progress">
                    <div class="progress" style="width: 10%"></div>
                </div>
                <span><b class="vidas">${life}</b> <i class="fas fa-heart" style="color: red;"></i></span>
            </div>
            <div class="pregunta">
                <p class="preguntaO">${cursohtml[rand].pregunta}</p>
            </div>
            <div class="opcionesImg">
                <label class="opcion-select" onclick="pintar()" for="main" style="width: 150px; margin-right: 10px;">
                    <span>${cursohtml[rand].opcion1} ${cursohtml[rand].opcion1text}</span><input type="radio" id="main" value="${cursohtml[rand].opcion1text}" name="check" style="display: none;">
                </label>
                <label class="opcion-select" onclick="pintar()" for="section" style="width: 150px;">
                    <span>${cursohtml[rand].opcion2} ${cursohtml[rand].opcion2text}</span><input type="radio" id="section" value="${cursohtml[rand].opcion2text}" name="check" style="display: none;">
                </label>
                <label class="opcion-select" onclick="pintar()" for="header" style="width: 150px; margin-right: 10px;">
                    <span>${cursohtml[rand].opcion3}${cursohtml[rand].opcion3text}</span><input type="radio" id="header" value="${cursohtml[rand].opcion3text}" name="check" style="display: none;">
                </label>
                <label class="opcion-select" onclick="pintar()" for="header" style="width: 150px;">
                    <span>${cursohtml[rand].opcion4}${cursohtml[rand].opcion4text}</span><input type="radio" id="header" value="${cursohtml[rand].opcion4text}" name="check" style="display: none;">
                </label>
                <button id="btnComprobar" class="btnComprobar" onclick="comprobarRespSeleccion(cursohtml[rand])">COMPROBAR</button>
            </div>`
        }
    }else{
        window.location="./cursos.html";
    }
    


            
}

//Aprender CSS
function learCss(){
    prox()
}

//Aprender JS
function learJs(){
    prox()
}

//Comprobar preguntas de seleccion
function comprobarRespSeleccion(curso){
    
    let progreso = Number(localStorage.getItem('Progreso'));
    const respuesta = document.querySelector('input[name=check]:checked').value

    if (curso.respuesta === respuesta){
        Swal.fire({
            title: '¡Buen Trabajo!',
            position: 'bottom',
            background: '#ACFFCF',
            confirmButtonColor: '#2CB67D',
            confirmButtonText: 'CONTINUAR',
            buttonsStyling: 'width="100%"'
        }).then((result)=>{
            progreso += 10;
            localStorage.setItem('Progreso', progreso);
            cursohtml.splice(rand, 1);
            learHtml()
        })
        
    }else{
        Swal.fire({
            title: '¡Sigue intentando!',
            position: 'bottom'
        })
    }
}

//Comprobar preguntas con imagenes
function comprobarRespImagen(curso){
    let progreso = Number(localStorage.getItem('Progreso'));
    const respuesta = document.querySelector('input[name=check]:checked').value
    cursohtml.splice(rand, 1);
}

//ir atras
function atras(){
    window.location="./cursos.html"
} 

//Cursos no habilitados
function prox(){
    Swal.fire({
        icon: 'info',
        title: 'Aun no disponible',
        showConfirmButton: false,
        timer: 1200,
      })
}

//Funcion para cerrar sesion
function logout(){
    localStorage.setItem('Login', null)
    window.location="./index.html";
}

//Funcion editar
async function editar(){
    //Llamamos a nuestra API
    const resp = await fetch(URL_API);
    const data = await resp.json();
    let datos = JSON.parse(localStorage.getItem('Login'));
    //Realizamos la busqueda de el objeto que tenga el mismo id del que esta logeado
    const comprobador = data.find(usrE => datos[0].id === usrE.id)

    //Imprimimos la info previamente capturada para luego editar
    container.innerHTML = 
    `<div class="container-perfil">
    <h1 class="title-perfil">Perfil</h1>
    <div class="info-perfil">
        <label for="nombre">Nombre y Apellido</label>
        <input type="text" id="nombre" value="${comprobador.nombre}"><br>
        <label for="email">Email</label>
        <input type="email" id="email" value="${comprobador.email}" readonly><br>
        <label for="tel">Telefono</label>
        <input type="text" id="tel" value="${comprobador.telefono}"><br>
        <label for="date">Fecha de nacimiento</label>
        <input type="date" id="date" value="${comprobador.date}"><br>
        <input type="hidden" id="id" value="${comprobador.id}">
        <h4 class="logout" onclick="editarSi()">Editar perfil</h4>
        <h4 class="logout" onclick="mostrarPerfil()">Atras</h4>
    </div>`;
}

async function editarSi() {
    
    const newName = document.getElementById('nombre').value;
    const newEmail = document.getElementById('email').value;
    const newTel = document.getElementById('tel').value;
    const newDate = document.getElementById('date').value;
    const id = Number(document.getElementById('id').value);

    await fetch(`${URL_API}/${id}`,({
        method: 'PUT',
        body: JSON.stringify({
            nombre: newName,
            email: newEmail,
            telefono: newTel,
            date: newDate
        }),
        headers: {"Content-Type": "application/json; charset=UTF-8"}
    }))

    const newProfile = [{
        nombre: newName,
        email: newEmail,
        telefono: newTel,
        date: newDate,
        id: id
    }];

    localStorage.setItem('Login', JSON.stringify(newProfile))
}

function pintar() {
    const botonComprobar = document.getElementById('btnComprobar'); 
    botonComprobar.setAttribute('class', "btnComprobar resp")
}