// Set the date and time of the target countdown (Friday 4:00 PM UTC)
let targetDate = new Date();
targetDate.setUTCHours(16);
targetDate.setUTCMinutes(0);
targetDate.setUTCSeconds(0);
targetDate.setUTCMilliseconds(0);
targetDate.setUTCDate(targetDate.getUTCDate() + (5 - targetDate.getUTCDay()) % 7);

// Update the countdown every second
let countdownInterval = setInterval(updateCountdown, 1000);

function updateCountdown() {
  // Calculate the time remaining until the target date
  const now = new Date();
  let timeRemaining = targetDate.getTime() - now.getTime();

  if (timeRemaining <= 0) {
    // If countdown finished, clear the existing interval and set a new target date
    clearInterval(countdownInterval);

    targetDate = new Date();
    targetDate.setUTCHours(16);
    targetDate.setUTCMinutes(0);
    targetDate.setUTCSeconds(0);
    targetDate.setUTCMilliseconds(0);
    targetDate.setUTCDate(targetDate.getUTCDate() + (5 - targetDate.getUTCDay()) % 7 + 7); // Updated to add 14 days

    // Start a new countdown
    countdownInterval = setInterval(updateCountdown, 1000);
  } else {
    // Calculate the remaining days, hours, minutes, and seconds
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Update the HTML with the remaining time
    const dayscontent = document.getElementById("days");
    const hourscontent = document.getElementById("hours");
    const minutescontent = document.getElementById("minutes");
    const secondscontent = document.getElementById("seconds");
    dayscontent.textContent = `${days}`;
    hourscontent.textContent = `${hours}`;
    minutescontent.textContent = `${minutes}`;
    secondscontent.textContent = `${seconds}`;
  }
}