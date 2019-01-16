const yargs = require ('yargs');

const geocode = require('./geocode.js');
const weather = require ('./weather.js');

const argv = yargs
  .options({
    location:{
      demand:true,
      desctibe: 'Address/location for weather',
    }
})
.help()
.argv;
//console.log(argv);

geocode.getLocation(argv.location,(error,location) => {
  if(error){
    console.log(error);
  }
  else{
    console.log(location.place);
    weather.getWeather(location.lat,location.lng,(error,weather) => {
      if(error){
        console.log(error);
      }
      else{
        console.log(`Temperature is ${weather.temperature}F but feels like ${weather.actual_temperature}F`);
        console.log(`Humidity: ${weather.humidity*100}%`);
        console.log(`${weather.summary}`);
      }
    });
  }
}
);
