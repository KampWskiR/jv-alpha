function roundNumber(num) {
  var rounded = Math.round(num);
  if (rounded % 2 === 0 && num % 2 !== 0) {
    rounded = Math.ceil(num);
  }
  return rounded;
}

function convertTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  const remainingSeconds = seconds % 60;
  const remainingMinutes = minutes % 60;
  const remainingHours = hours % 24;

  return `${days} days, ${remainingHours} hours, ${remainingMinutes} minutes, ${remainingSeconds} seconds`;
}

function calcExp() {
  const currentLv = document.getElementById("currentlevel");
  const currentProc = document.getElementById("current%");

  var level = parseInt(currentLv.value);
  var proc = parseInt(currentProc.value);

  const maxExp = Math.pow(2, level - 1) * 100;
  const exp = (proc / 100) * maxExp;

  const missingExp = maxExp - exp;
  const secondsToLevelUp = missingExp / 1.75; // Number of seconds to level up at a rate of 1.75 exp per second

  console.log(`If your level is ${level} and you have ${proc}%, you need to open ${Math.round(missingExp / 7)} eggs to level up!`);
  console.log(`If your level is ${level} and you have ${proc}%, it will take ~${convertTime(Math.round(secondsToLevelUp))} to level up!`);
}