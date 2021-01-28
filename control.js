/**CONDICIONAL MULTIPLE */


/** 

 * ¿Está usted vacunado?Por favor muestreme sus credenciales

 * si la persona que va a comprar la entrada, no esta vacunada, se le dice amablemente que Lamentablemente debido al protocolo de salud de la comunidad Balear no permite que pueda comprar la entrada.Esperamos su rapida mejoria y esperamos verle nuevamente.


* Y si, esta vacunada  se le dice que Pase por favor, esta autorizada para comprar la entrada */

let credencial = prompt('¿Está usted vacunado?Por favor muestreme sus credenciales')
if(credencial === 'si') {
    console.log('Pase por favor, esta autorizada para comprar la entrada')
}else if (credencial === 'no') {
    console.log('Lamentablemente debido al protocolo de salud de la comunidad Balear no permite que pueda comprar la entrada.Esperamos su rapida mejoria y esperamos verle nuevamente.')
}



