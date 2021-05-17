//making a function where the value of time is calculated
function calculate(){
//first get the destination input from the user
	var destination = document.getElementById('destination').value;
//Get the input of the speed that the user puts in
	var speed = document.getElementById('speed').value;
//Make sure to have a function that will calculate the time left
	var time = ((destination/speed)*60);
//make the value of time will be replaced with the new time.
	document.getElementById("time").value= time;

}

var distanceTraveled = 29;
var fuelLeft = 30;
setInterval(function()
{
  distanceTraveled--  
  fuelLeft--
  if (distanceTraveled === 15) {
    alert("You're halfway there!");
  }  
  if(distanceTraveled == 0){
  	alert("Arrived at your destination");
  }
  if (fuelLeft === 20) {
    alert("20.000 gallons of fuel left");
  }  
  if(fuelLeft == 0){
  	alert("0 gallons of fuel left");
  }
}, 1000);

