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
console.log(argv);

geocode.getLocation(argv.location,(error,location) => {
  if(error){
    console.log(error);
  }
  else{
    console.log(location);
    weather.getWeather(location.lat,location.lng,(error,weather) => {
      if(error){
        console.log(error);
      }
      else{
        console.log(weather);
      }
    });
  }
}
);
