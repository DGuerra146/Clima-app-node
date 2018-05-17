const axios=require('axios');

const getClima=async(lat,lng)=>{

	//axios

	let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=60e71f53fc25259b0adcac13789a9931`) 

	return resp.data.main.temp;
}

module.exports={
	getClima
}