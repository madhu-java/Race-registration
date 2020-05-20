let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = '';
let runnerAge = 18;
if(runnerAge>18 && registeredEarly) {
  raceNumber = 1000;
}
if(runnerAge>18 && registeredEarly) {
  console.log(`your race is at 9.30am ${raceNumber}`);
}
else if(runnerAge>18 && !registeredEarly) {
  console.log(`your race is at 11.00am ${raceNumber}`);
}
if(runnerAge<18) {
  console.log(`your race is at 12.30 pm ${raceNumber}`);
}
else{
  console.log('see the registration desk');
}
    