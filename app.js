//const axios=require('axios');
const lugar=require('./lugar/lugar.js');
const clima=require('./clima/clima.js');

const argv=require('yargs').options({
	direccion: {
		alias: 'd',
		desc: 'Dirección de la ciudad para obtener el clima',
		demand: true
	}
}).argv;


let getInfo = async(direccion)=>{


	try{
	let coors = await lugar.getLugarLatLng(direccion);
	let temp = await clima.getClima(coors.lat,coors.lng);

	return `El clima en ${coors.direccion} es de ${temp}`;

	}catch(e){
		return `No se pudo obtener un clima para ${direccion}`;		
	}


}


getInfo(argv.direccion)
	.then(mensaje=>console.log(mensaje))
	.catch(e=>console.log(e));