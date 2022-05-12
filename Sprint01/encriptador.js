
const textoIngresado = document.querySelector(".IngresarTexto");
textoIngresado.focus();
const mensaje = document.querySelector(".TextAreaMensaje");
var img = document.querySelector(".Muneco");
var botonCopiar = document.querySelector(".BotonCopiar");
botonCopiar.style.visibility = "hidden";
var ningumMensajeEncontrado = document.querySelector(".NingunMensajeEncontrado");
ningumMensajeEncontrado.style.visibility = "visible";
var textoDeseaDesencriptar = document.querySelector(".TextoDeseaDesencriptar");
textoDeseaDesencriptar.style.visibility = "visible";

//Boton encriptar
function btnEncriptar() {
    if (textoIngresado.value == "") {
        alert("Ingresar texto para encriptar.");
        textoIngresado.focus();
    } else {
        const btnTextoEncriptado = encriptar(textoIngresado.value);
        mensaje.value = btnTextoEncriptado;
        textoIngresado.value = "";
        img.style.visibility = "hidden";
        ningumMensajeEncontrado.style.visibility = "hidden";
        textoDeseaDesencriptar.style.visibility = "hidden";
        botonCopiar.style.visibility = "visible";
        mensajeBtnCopiar.style.visibility = "visible";

    }
}


//Funcion para hacer la encriptacion del texto que ingresa el usuario.
function encriptar(textoParaEncriptar) {

    let matrizCodigo = [["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]];

    textoParaEncriptar = textoParaEncriptar.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (textoParaEncriptar.includes(matrizCodigo[i][0])) {
            textoParaEncriptar = textoParaEncriptar.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return textoParaEncriptar;
}


//Boton copiar
function btnCopiar() {

    var btnMensaje = document.getElementById("textAreaMensaje").value;
    document.getElementById("ingresarTexto").value = btnMensaje;
    mensaje.value = "";
    botonCopiar.style.visibility = "hidden";
    img.style.visibility = "visible";
    ningumMensajeEncontrado.style.visibility = "visible";
    textoDeseaDesencriptar.style.visibility = "visible";

}

//Boton desencriptar
function btnDesencriptar() {
    if (textoIngresado.value == "") {
        alert("COPIAR texto para desencriptar.");
        textoIngresado.focus();
    } else {
        const btnTextoEncriptado = desencriptar(textoIngresado.value);
        mensaje.value = btnTextoEncriptado;
        if (mensaje.value == "") {
            img.style.visibility = "visible";
            ningumMensajeEncontrado.style.visibility = "visible";
            textoDeseaDesencriptar.style.visibility = "visible";
            botonCopiar.style.visibility = "hidden";
        } else {
            img.style.visibility = "hidden";
            ningumMensajeEncontrado.style.visibility = "hidden";
            textoDeseaDesencriptar.style.visibility = "hidden";
            botonCopiar.style.visibility = "visible";
            textoIngresado.value = "";
            textoIngresado.focus();
        }
    }
}

//Funcion para desencriptar el texto encriptado por el usuario.
function desencriptar(textoEncriptado) {

    let matrizCodigo = [["enter", "e"],
    ["imes", "i"],
    ["ai", "a"],
    ["ober", "o"],
    ["ufat", "u"]];

    textoEncriptado = textoEncriptado.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (textoEncriptado.includes(matrizCodigo[i][0])) {
            textoEncriptado = textoEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return textoEncriptado;
}


