const request = require('request');

var getLocation = (address,callback)=>{
  var encodedAddress = encodeURIComponent(address);
  request ({
     url:`http://www.mapquestapi.com/geocoding/v1/address?key=R4Jjqc1CVGDBoIoSQFGyG9o9JGGdwRsg&location=${encodedAddress}`,
     json:true
   },
   (error,response,body) => {
    //console.log(response.body.status);
     if(body.info.statuscode != 0){
       //console.log(error);
       callback('Error in fetching address');
     }
     else{
       callback(undefined, {
         place:body.results[0].locations[0].adminArea5,
         lat:body.results[0].locations[0].latLng.lat,
         lng: body.results[0].locations[0].latLng.lat
       });
   }
 }
 );
}

module.exports = {
  getLocation
};
