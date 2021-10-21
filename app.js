class Cotizacion {
    constructor( nombre, precio, supply) {    
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.supply = supply;
    }
}
const criptomoneda = []
criptomoneda.push(new Cotizacion('Bitcoin', '60000', '19000000'));
criptomoneda.push(new Cotizacion('Moc', '0.13', '1400000000'));
criptomoneda.push(new Cotizacion('Ether', '4000', '100000000'));
criptomoneda.push(new Cotizacion('Sol', '180', '400000000'));
criptomoneda.push(new Cotizacion('Sov', '25', '4200000'));
console.log(Cotizacion)
console.log(criptomoneda)

let seleccion = prompt("¡Too The Moon, su cotizador amigo! Conozca el precio en pesos argentinos de las siguientes criptomonedas: seleccione el número de la criptomeneda... \n 1 - Bitcoin \n 2 - Moc \n 3 - Ether \n 4 - Sol \n 5 - Sov");
switch (seleccion) {
    case "1":
        alert("$" + 64000*200);
        break;
    case "2":
        alert("$" + 0.13*200);
        break;
    case "3":
        alert("$" + 4000*200);
        break;
    case "4":
        alert("$" + 180*200);
        break;
    case "5":
        alert("$" + 25*200);
        break;              
    default:
        break;
}

/*function saludo() {
    alert("Desde Too the Moon le deseamos éxitos en sus finanzas. Un cordial saludo. ");
}
*/