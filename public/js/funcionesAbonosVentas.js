/*
verificarFormulario = () => {
    const validarFechaAbono = validarFechaAbono();



    if (validarFechaAbono){
            windows.location.href='/abonosVentas';
  
    }
}


validarFechaAbono = () => {
    let fechaAbono = new date(document.getElementById('fechaAbono').value);
    let texto;
    let fechaActual = new Date();
    if (fechaAbono === null || fechaAbono === '' || fechaAbono.length === 0) {
        texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese una fecha en este campo</span   >';
        document.getElementById('errorFechaAbono').innerHTML = texto;
        return false;
    }else if (fechaAbono > fechaActual){
        texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">La fecha no puede ser mayor a la fecha actual</span>';
        document.getElementById('errorFechaAbono').innerHTML = texto;
        return false;
    }
}
*/

const verificarFormulario = async () => {
    const validarIdVentaRespuesta = validarIdVenta();
    const validarFechaAbonoRespuesta = validarFechaAbono();
    const validarValorAbonoRespuesta = validarValorAbono();
  
    if (validarIdVentaRespuesta && validarFechaAbonoRespuesta && validarValorAbonoRespuesta) {
        setTimeout(() => {
            window.location.href = '/abonosVentas';
          }, 1000);
    }
}    




validarFechaAbono = () => {
    let fechaAbono = document.getElementById('fechaAbono').value
    let texto;
    let fechaActual = new Date();
    
    if (fechaAbono === null || fechaAbono === '' || fechaAbono.length === 0) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese la fecha de abono</span>';
      document.getElementById('errorFechaAbono').innerHTML = texto;
      return false;
    } else if (fechaAbono > fechaActual) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">La fecha de abono no puede superar la fecha actual</span>';
      document.getElementById('errorFechaAbono').innerHTML = texto;
      return false;
    } else {
      document.getElementById('errorFechaAbono').innerHTML = '';
      return true;
    }
  }
  
  validarValorAbono = () => {
    let valorAbono = document.getElementById('valorAbono').value;
    let texto;
    let expresion = /[0-9]/;
  
    if (valorAbono === null && valorAbono === '') {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese el valor del abono</span   >';
      document.getElementById('errorValorAbono').innerHTML = texto;
      return false;
    } else if (!expresion.test(valorAbono)) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese el valor del abono</span>';
      document.getElementById('errorValorAbono').innerHTML = texto;
      return false;
    } else if (valorAbono <= 0) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">El valor del abono no puede ser menor o igual a 0</span>';
      document.getElementById('errorValorAbono').innerHTML = texto;
      return false;
    } else {
      document.getElementById('errorValorAbono').innerHTML = '';
      return true;
    }
  }
  
  validarIdVenta = () => {
    let idVenta = document.getElementById('idVenta').value
    
    let texto;
    let expresion = /[0-9]/;
  
    if (idVenta === null || idVenta === '' || idVenta.length === 0) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese un numero de venta</span   >';
      document.getElementById('errorIdVenta').innerHTML = texto;
      return false;
    } else if (!expresion.test(idVenta)) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Solo se permite numeros</span>';
      document.getElementById('errorIdVenta').innerHTML = texto;
      return false;
    } else if (idVenta.length < 3) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">El id de venta debe que ser mayor a 3 caracteres numericos</span>';
      document.getElementById('errorIdVenta').innerHTML = texto;
      return false;
    } else if (idVenta.length > 10) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">El id de venta debe que ser menor a 10 caracteres numericos</span>';
      document.getElementById('errorIdVenta').innerHTML = texto;
      return false;
    } else {
      document.getElementById('errorIdVenta').innerHTML = '';
      return true;
    }
  }
  


const boton = document.querySelector('#formularioAbonosVentas')

boton.addEventListener('click',verificarFormulario)


/*
if (document.querySelector('#btnRegistrar')) {
    document.querySelector('#btnRegistrar')
      .addEventListener('click', verificarFormulario)
  }
  */
