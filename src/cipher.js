window.cipher = {
  /* Acá va tu código */
  encode: (txt_uno, espacios_cif) => {
    let esto = "";
    for (let i = 0; i< txt_uno.length; i++){
    let x = txt_uno.charCodeAt(i);
    let n = parseInt(espacios_cif);
    let formula = ((x - 65 + n) % 26 + 65);
    esto += String.fromCharCode(formula);
    console.log(esto);
    } 
    return esto;

  },
  /* Acá va tu código */
  decode: (txt_dos, espacios_des) => {
    let esti = "";
    for (let i = 0; i< txt_dos.length; i++){
      let y = txt_dos.charCodeAt(i);
      let m = parseInt(espacios_des);
      let equacion = ((y + 65 - m) % 26 + 65);
      esti += String.fromCharCode(equacion);
      console.log(esti);
    }
    return esti;
  }
}