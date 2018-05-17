const axios=require('axios');


const getLugarLatLng= async(direccion)=>{

	let encoudedUrl=encodeURI(direccion);

	let resp= await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encoudedUrl}&key=AIzaSyAxWGfb9ZodEO_a0-g0-Gg1bVxGOXwK2D4`)
		
	if(resp.data.status==='ZERO_RESULTS'){
		throw new Error(`No hay resultados para la ciudad ${direccion}`);
	}


	let location=resp.data.results[0];
	let coors=location.geometry.location;
	
	

	return{
		direccion: location.formatted_address,
		lat: coors.lat,
		lng: coors.lng
	}
}

module.exports={
	getLugarLatLng
}




