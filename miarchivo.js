// Realizaremos un pedido de combo: Hamburguesa + Bebida


let nombre;

// Aplicaremos un while para descartar ingreso de numeros o cancele la solicitud
while(nombre === undefined || nombre === parseInt(nombre)) {

    nombre = prompt("Ingrese su nombre")
    if (nombre === undefined || nombre === parseInt(nombre)){
        alert(`ERROR! debe ingresar un nombre valido`);
    } else {
        alert(`Bienvenido a la tienda REY BURGER online ${nombre}! \n
        Vamos a tomar el pedido de tu combo`);
    }
}


// Incluiremos en un Array de objetos, los valores de las Hamburguesas y Bebidas con el precio de cada uno.

let tipoHamburguesa = [{Hamburguesa: "clasica", Precio: "8"},
                       {Hamburguesa: "royal", Precio: "10"},
                       {Hamburguesa: "suprema", Precio: "15"}]

let tipoBebida = [{Bebida: "coca cola", Precio: "3"},
                  {Bebida: "pepsi", Precio: "2"},
                  {Bebida: "fanta", Precio: "1.5"}]

let hamburguesa;
let refresco;

// Armaremos la funcion Hamburguesa para luego invocarla.
function pedidoHamburguesa(){

   alert(`Paso 1: Vamos a tomar el pedido de tu Hamburguesa`)
   
// Si el pedido es distinto a las 3 opciones o cancela el promp, se repite el bucle
    while ((hamburguesa != "clasica" && hamburguesa != "royal" && hamburguesa != "suprema") || (hamburguesa === undefined)) {
        hamburguesa = prompt(`Ingrese una de las 3 disponibles: "Clasica", "Royal", "Suprema"`);
    
        if(hamburguesa) hamburguesa = hamburguesa.toLowerCase()
    
    
        if((hamburguesa != "clasica" && hamburguesa != "royal" && hamburguesa != "suprema") || (hamburguesa === undefined)) {
            alert(`ERROR! debes elegir entre las 3 opciones`);
        } else {  
            alert(`El pedido de tu hamburguesa es una "${hamburguesa}"`);
        }
}
}

pedidoHamburguesa();


// Armaremos la funcion Bebida para luego invocarla.
function pedidoBebida(){

    alert(`Paso 2: Vamos a tomar el pedido de tu Bebida`)
    
// Si el pedido es distinto a las 2 opciones o cancela el promp, se repite el bucle
    while ((refresco != "coca cola" && refresco != "pepsi" && refresco != "fanta") || (refresco === undefined)) {
        refresco = prompt(`Ingrese una de las 2 disponibles: "Coca Cola", "Pepsi", "Fanta"`)

        if(refresco) refresco = refresco.toLowerCase()
    
        if ((refresco != "coca cola" && refresco != "pepsi" && refresco != "fanta") || (refresco === undefined)){
            alert(`ERROR! debes elegir entre las 3 bebidas`);
        } else {
            alert(`El pedido de tu bebida es una "${refresco}"`)
        }
    }
    }

    pedidoBebida();

    
    
    
  // Para el precio, aplicaremos un for para determinar la concidencia del valor Hamburguesa/refreso y obtener su precio.
  // Estamos aplicando el metodo length para la validacion del dato requerido en toda su lengitud del array de objetos.

    function precioProducto(){
         

        for(let i=0; i<tipoHamburguesa.length; i++) {
                if(tipoHamburguesa[i].Hamburguesa === hamburguesa) {
            alert(`El precio de tu Hamburguesa ${hamburguesa} es de: ${tipoHamburguesa[i]["Precio"]}$`)
            }
        }
        
        for(let i=0; i<tipoBebida.length; i++) {
            if(tipoBebida[i].Bebida === refresco) {
            alert(`El precio de tu Bebida ${refresco} es de: ${tipoBebida[i]["Precio"]}$`)
            }
        }

        alert(`Gracias por tu compra!`)
        
}
   
precioProducto();

