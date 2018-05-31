/* Acá va tu código */
window.onload = function(){
const button_uno = document.getElementById("button_uno");
let espacios_cif = document.getElementById("espacios_cif");
let espacios_des = document.getElementById("espacios_des");


// dom cifrado
button_uno.addEventListener('click', () => {
    let txt_uno = document.getElementById("txt_uno").value.toUpperCase();
    console.log(txt_uno);
    let espacios_cif = document.getElementById("espacios_cif").value;
    console.log(espacios_cif);
    let cifrado = window.cipher.encode(txt_uno, espacios_cif);
    console.log(cifrado);
    txt_cifrado.innerHTML = "Tu resultado es:" + cifrado;
}); 

// dom descifrado
button_dos.addEventListener('click', () => {
    let txt_dos = document.getElementById("txt_dos").value.toUpperCase();
    console.log(txt_dos);
    let espacios_des = document.getElementById("espacios_des").value;
    console.log(espacios_des);
    let descifrado = window.cipher.decode(txt_dos, espacios_des);
    console.log(descifrado);
    txt_descifrado.innerHTML = "Tu resultado es:" + descifrado; 
}); 
}