const request = require('request');

var getWeather =(lat,lng,callback) =>{
  request ({
    url: `https://api.darksky.net/forecast/7551bde03b9d81f9201369af756cff56/${lat},${lng}`,
    json:true
  },
  (error,response,body)=>{
    if(error){
      callback('Error in fetching weather');
    }
    else{
      callback(undefined,{
        temperature: body.currently.temperature,
        actual_temperature: body.currently.apparentTemperature
        });
    }
  }
);
}

module.exports ={
  getWeather
};
