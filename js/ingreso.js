let datos=[]

const inicioBoton = document.querySelector('#botonInicio')
const registroBoton = document.querySelector('#botonRegistro')
const container = document.querySelector('.containerContac')
let btnIngresar = document.querySelector('#btnLogin')
let btnRegistrar = document.querySelector('#btnRegistro')


registroBoton.addEventListener('click', ()=>{
    container.classList.add('modoRegistro');
});

inicioBoton.addEventListener('click', ()=>{
    container.classList.remove('modoRegistro')
})

btnRegistrar.addEventListener('click', ()=>{
    const usuarioRegistrado=document.getElementById('nuevoUsuario').value
    const passwordRegistrado = document.getElementById('nuevoPassword').value
    const emailRegistrado = document.getElementById('nuevoEmail').value

    validar(usuarioRegistrado, passwordRegistrado, emailRegistrado)
})

class Usuario{
    constructor(usuario, pass, email){
        this.usuario=usuario
        this.pass=pass
        this.email=email
    }
}
function validar (usuarioRegistrado,passwordRegistrado,emailRegistrado){
    if(usuarioRegistrado == "" || passwordRegistrado== "" || emailRegistrado == ""){
        alert('Los campos no pueden estar vacios')
    }
    else if(passwordRegistrado.length < 6){
        alert('El password debe tener mas de 6 digitos')
    }
    else{
        datos.push(new Usuario(usuarioRegistrado,passwordRegistrado,emailRegistrado))
        localStorage.setItem('dato' , JSON.stringify(datos))
        document.getElementById('nuevoUsuario').value=""
        document.getElementById('nuevoPassword').value=""
        document.getElementById('nuevoEmail').value=""
        alert('Usuario creado correctamente')
    }
}
btnRegistrar.addEventListener('click', ()=>{
    container.classList.remove('modoRegistro')
})

function ingresamos(){
    location.href = "productos1.html"
}
btnIngresar.addEventListener('click', ingresar)

function ingresar(){
    const usuario = document.getElementById('user').value 
    const contraseña = document.getElementById('pass').value
    let validacion = validarIngreso(usuario,contraseña)
    let recuperoLocalS =JSON.parse(localStorage.getItem('dato'))

    if (validacion){
        if((recuperoLocalS[0].usuario == usuario) &&(recuperoLocalS[0].pass == contraseña)){
            document.getElementById('user').value= ""
            document.getElementById('pass').value= ""
            ingresamos()
            alert('inicio de sesion correcto')
            
            
        }else{
            alert('debes registrarte para poder iniciar sesion')
        }
    }else{
        alert('Lo siento debes registrarte')
    }
console.log(validacion)

}

function validarIngreso(usuario,contraseña) {
    if(usuario == "" || contraseña == ""){
        return false
    }else{
        return true
    }
    
}