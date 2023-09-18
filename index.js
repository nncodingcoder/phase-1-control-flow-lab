function scuberGreetingForFeet(ride){
  // Write your code here!
  let rideDistance
  if (ride <= 400) {
   rideDistance = "This one is on me!"
  } else if (ride > 2000 && ride < 2500) {
    rideDistance = 'I will gladly take your thirty bucks.'
  } else {
  rideDistance = 'No can do.'
  }
  return rideDistance
}
scuberGreetingForFeet(199)
scuberGreetingForFeet(2001)
scuberGreetingForFeet(2501)


function ternaryCheckCity(city){
  // Write your code here!
//let checkCity
let checkCity =  city === 'NYC' ? "Ok, sounds good." : "No go."
return checkCity;
}
ternaryCheckCity('NYC')
ternaryCheckCity('Pittsburgh')

function switchOnCharmFromTip(tip){
  // Write your code here!
let tipAmount
switch (tip)  {
  case 'generous':
  tipAmount = "Thank you so much.";
  break;
  case 'not as generous':
tipAmount = "Thank you.";
break;
default:
  tipAmount = "Bye."
  break;
  
}
return tipAmount
}
switchOnCharmFromTip('generous')
switchOnCharmFromTip('not as generous')
switchOnCharmFromTip('thanks for everything')
