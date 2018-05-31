/* Acá va tu código */
window.onload = function(){
const button_uno = document.getElementById("button_uno");
let txt_uno = document.getElementById("txt_uno");
let txt_dos = document.getElementById("txt_dos");

// dom cifrado
button_uno.addEventListener('click', () => {
    let txt_uno = document.getElementById("txt_uno").value;
    txt_descifrado.innerHTML = "Tu resultado es:" + txt_uno; 
}); 

button_dos.addEventListener('click', () => {
    let txt_dos = document.getElementById("txt_dos").value;
    txt_cifrado.innerHTML = "Tu resultado es:" + txt_dos; 
}); 
}