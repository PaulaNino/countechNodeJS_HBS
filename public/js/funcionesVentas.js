verificarFormulario = () => {
    const validarOrdenTrabajoRespuesta = validarOrdenTrabajo();
    const validarValorTotalRespuesta = validarValorTotal ();
    const validarFechaOrdenTrabajoRespuesta = validarFechaOrdenTrabajo ();
    const validarFechaEntregaOrdenTrabajoRespuesta = validarFechaEntregaOrdenTrabajo ();
    const validarPedidoRespuesta = validarPedido ();

    if (validarOrdenTrabajoRespuesta && validarFechaOrdenTrabajoRespuesta && validarFechaEntregaOrdenTrabajoRespuesta && validarValorTotalRespuesta && validarPedidoRespuesta){
       // document.getElementById('texto3').innerHTML = '';
        //window.location.href = '/ventas'
        //return true;
       // windows.location.href='/ventas';
        //window.location.href = "/ventas"
        setTimeout(() => {
          window.location.href = '/ventas';
        }, 1000);
      
  }
}



validarOrdenTrabajo = () => {
    let ordenTrabajo = document.getElementById('ordenTrabajo').value;
    let texto;
    let expresion = /[0-9]/;
  
    if (ordenTrabajo === null || ordenTrabajo === '' || ordenTrabajo.length === 0) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese un numero de orden de trabajo</span   >';
      document.getElementById('errorOrdenTrabajo').innerHTML = texto;
      return false;
    } else if (!expresion.test(ordenTrabajo)) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Solo se permite numeros</span>';
      document.getElementById('errorOrdenTrabajo').innerHTML = texto;
      return false;
    } else if (ordenTrabajo.length < 3) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">El numero tiene que ser mayor o igual a 3 caracteres numericos</span>';
      document.getElementById('errorOrdenTrabajo').innerHTML = texto;
      return false;
    } else if (ordenTrabajo.length > 7) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">El numero tiene que ser menor o igual carcateres numericos</span>';
      document.getElementById('errorOrdenTrabajo').innerHTML = texto;
      return false;    
    }else{
      document.getElementById('errorOrdenTrabajo').innerHTML = '';
      return true;
    } 
}


validarValorTotal = () => {
    let valorTotal = document.getElementById('valorTotal').value;
    let texto;
    let expresion = /[0-9]/;
  
    if (valorTotal === null || valorTotal === '' || valorTotal.length === 0) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese el valor total</span   >';
      document.getElementById('errorValorTotal').innerHTML = texto;
      return false;
    } else if (!expresion.test(valorTotal)) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Solo se permite numeros</span>';
      document.getElementById('errorValorTotal').innerHTML = texto;
      return false;
    } else if (valorTotal.length <= 0) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">El valor total no puede ser menor o igual a 0</span>';
      document.getElementById('errorValorTotal').innerHTML = texto;
      return false;
    } else{
      document.getElementById('errorValorTotal').innerHTML = '';
      return true;
    } 
}



validarFechaOrdenTrabajo = () => {

    let fechaOrdenTrabajo = document.getElementById('fechaOrdenTrabajo').value
    let texto;
    let fechaEntregaOrdenTrabajo = document.getElementById('fechaEntregaOrdenTrabajo').value
    let fechaActual = new Date().toISOString().split('T')[0];
    
    if (fechaOrdenTrabajo === null || fechaOrdenTrabajo === '' || fechaOrdenTrabajo.length === 0) {
        texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese la fecha de la orden de trabajo</span>';
        document.getElementById('errorFechaOrdenTrabajo').innerHTML = texto;
        return false;
      }else if (fechaOrdenTrabajo > fechaActual){
        texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">La fecha no puede ser mayor a la fecha de registro</span>';
        document.getElementById('errorFechaOrdenTrabajo').innerHTML = texto;
        return false;
      }else if(fechaOrdenTrabajo > fechaEntregaOrdenTrabajo){
        texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">La fecha no puede ser mayor a la fecha de entrega</span>';
        document.getElementById('errorFechaOrdenTrabajo').innerHTML = texto;
        return false;
      }else{
        document.getElementById('errorFechaOrdenTrabajo').innerHTML = '';
      return true;
      }
}

validarFechaEntregaOrdenTrabajo = () => {

    let fechaEntregaOrdenTrabajo = document.getElementById('fechaEntregaOrdenTrabajo').value
    let texto;
    let fechaActual = new Date().toISOString().split('T')[0];
    let fechaOrdenTrabajo = document.getElementById('fechaOrdenTrabajo').value

    if (fechaEntregaOrdenTrabajo === null || fechaEntregaOrdenTrabajo === '' || fechaEntregaOrdenTrabajo.length === 0) {
        texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese la fecha de entrega de la orden de trabajo</span>';
        document.getElementById('errorFechaEntregaOrdenTrabajo').innerHTML = texto;
        return false;
      }else if (fechaEntregaOrdenTrabajo > fechaActual){
        texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">La fecha no puede ser mayor a la fecha de venta</span>';
        document.getElementById('errorFechaEntregaOrdenTrabajo').innerHTML = texto;
        return false;
      }else if(fechaEntregaOrdenTrabajo < fechaOrdenTrabajo){
        texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">La fecha no puede ser menor a la fecha de Orden de trabajo</span>';
        document.getElementById('errorFechaEntregaOrdenTrabajo').innerHTML = texto;
        return false;
      }else{
        document.getElementById('errorFechaEntregaOrdenTrabajo').innerHTML = '';
      return true;
      }
}


validarPedido = () => {
    let pedido = document.getElementById('pedido').value
    let texto;
    if (pedido === null || pedido === '' || pedido === 0) {
        texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese el pedido de la venta</span>';
        document.getElementById('errorPedido').innerHTML = texto;
        return false;
    }else{
          document.getElementById('errorPedido').innerHTML = '';
          return true;
    } 
}

//_________________________________________________________________________



/*
const validarFormulario = () => {

    const formulario = document.getElementById('formulario');
    const campoPedido = document.getElementById('pedido');
    const campoOrdenTrabajo = document.getElementById('ordenTrabajo');
    const campoFechaOrdenTrabajo = document.getElementById('fechaOrdenTrabajo');
    const campoFechaEntregaOrden = document.getElementById('fechaEntregaOrden');
    const campoFechaVenta = document.getElementById('fechaVenta');
    const campoFechaRegistro = document.getElementById('fechaRegistro');
    const campoValorTotal = document.getElementById('valorTotal');
  // Validar cada campo según las condiciones especificadas

  // Verificar que ningún campo esté nulo, vacío o igual a 0
  if (
    campoPedido.value === null ||
    campoPedido.value === '' ||
    campoPedido.value === '0' ||
    campoOrdenTrabajo.value === null ||
    campoOrdenTrabajo.value === '' ||
    campoOrdenTrabajo.value === '0' ||
    campoFechaOrdenTrabajo.value === null ||
    campoFechaOrdenTrabajo.value === '' ||
    campoFechaEntregaOrden.value === null ||
    campoFechaEntregaOrden.value === '' ||
    campoFechaVenta.value === null ||
    campoFechaVenta.value === '' ||
    campoFechaRegistro.value === null ||
    campoFechaRegistro.value === '' ||
    campoValorTotal.value === null ||
    campoValorTotal.value === '' ||
    parseFloat(campoValorTotal.value) <= 0
  ) {
    //alert('Por favor, completa todos los campos y asegúrate de que no sean nulos, vacíos o iguales a 0.');
    //return;

    texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Por favor, completa todos los campos y asegúrate de que no sean nulos, vacíos o iguales a 0.</span   >';
    document.getElementById('errorCamposVacios').innerHTML = texto;
    return false;
  }


  

//  /*
  // Validar que los campos de pedido y orden de trabajo solo contengan números
  const regexNumeros = /^[0-9]+$/;
  if (!regexNumeros.test(campoPedido.value) || !regexNumeros.test(campoOrdenTrabajo.value)) {
    alert('Por favor, ingresa solo números en los campos de pedido y orden de trabajo.');
    return;
  }

  // Validar la fecha de orden de trabajo
  varificarFechas = () => {
  const fechaOrdenTrabajo = new Date(campoFechaOrdenTrabajo.value);
  const fechaEntregaOrden = new Date(campoFechaEntregaOrden.value);
  const fechaVenta = new Date(campoFechaVenta.value);
  const fechaActual = new Date();

  if (fechaOrdenTrabajo >= fechaEntregaOrden || fechaOrdenTrabajo >= fechaVenta || fechaOrdenTrabajo < fechaActual) {
    alert('La fecha de orden de trabajo debe ser inferior a la fecha de entrega de la orden y a la fecha de venta.');
    return;
  }

}


  // Validar la fecha de registro (debe ser igual a la fecha actual)
  const fechaRegistro = new Date(campoFechaRegistro.value);
  if (fechaRegistro.getTime() !== fechaActual.getTime()) {
    alert('La fecha de registro debe ser igual a la fecha actual.');
    return;
  }

  // Validar la fecha de venta (debe ser inferior o igual a la fecha actual)
  if (fechaVenta > fechaActual) {
    alert('La fecha de venta debe ser igual o inferior a la fecha actual.');
    return;
  }

  // Validar el valor total (no debe ser menor o igual a 0)
  if (parseFloat(campoValorTotal.value) <= 0) {
    alert('El valor total debe ser mayor que 0.');
    return;
  }

  // Si se pasaron todas las validaciones, se puede enviar el formulario
  formulario.submit();
}

//
*/

//exports.validarFormulario = validarFormulario;

const boton = document.querySelector('#formularioVentas')

boton.addEventListener('click', verificarFormulario)
