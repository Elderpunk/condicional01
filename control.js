/**CONDICIONAL MULTIPLE */

/**IF Y ELSE

/** 

 * ¿Está usted vacunado?Por favor muestreme sus credenciales

 * si la persona que va a comprar la entrada, no esta vacunada, se le dice amablemente que Lamentablemente debido al protocolo de salud de la comunidad Balear no permite que pueda comprar la entrada.Esperamos su rapida mejoria y esperamos verle nuevamente.


* Y si, esta vacunada  se le dice que Pase por favor, esta autorizada para comprar la entrada */

/**let credencial = prompt('¿Está usted vacunado?Por favor muestreme sus credenciales').toLowerCase()
if(credencial === 'si') {
    console.log('Pase por favor, esta autorizada para comprar la entrada')
}else if (credencial === 'no') {
    console.log('Lamentablemente debido al protocolo de salud de la comunidad Balear no permite que pueda comprar la entrada.Esperamos su rapida mejoria y esperamos verle nuevamente.')
}*/
/**SWITCH */
let vacuna = prompt('¿Está usted vacunado?').toLowerCase()
let persona = 'Jose'
switch (vacuna) {
    case 'si' : 
    console.log(`${persona} Pase por favor, esta autorizada para comprar la entrada`)
    break
    case 'no' : 
    console.log(`${persona} Lamentablemente debido al protocolo de salud de la comunidad Balear no permite que pueda comprar la entrada.Esperamos su rapida mejoria y esperamos verle nuevamente.`)
    break
    default: console.log(`${persona} conteste si o no`)
}
