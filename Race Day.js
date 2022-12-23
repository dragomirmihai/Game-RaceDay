let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = false;
const runnerAge = 22;

if (runnerAge > 18 && registeredEarly){
  raceNumber += 1000;
};

if(runnerAge > 18 && registeredEarly){
  console.log(`Race will begin at at 9:30am, your race number is: ${raceNumber}.`)
}else if(runnerAge > 18 && !registeredEarly){
  console.log(`Race will begin at 11:00am, your race number is: ${raceNumber}.`)
}else if(runnerAge < 18){
  console.log(`Race will begin at 12:30pm, your race number is: ${raceNumber}.`);
}else{
  console.log('Visit Registration Desk');
}
