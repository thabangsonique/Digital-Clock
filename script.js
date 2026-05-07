function clock() {
  //months
  let monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  //days
  let dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  //assign new current live date to "today variable"
  let today = new Date();

  //manipulate html class.
  document.getElementById("date").innerHTML =
    dayNames[today.getDay()] +
    " " +
    today.getDate() +
    " " +
    monthNames[today.getMonth()] +
    " " +
    today.getFullYear();

  //time manipulation
  let hrs = today.getHours(); //get hours from the dateTime live return by number of hours
  let mins = today.getMinutes();
  let seconds = today.getSeconds();

  //change PM and AM based on hours of day. (session manipulation)
  if (hrs > 12) {
    document.getElementById("session").innerHTML = "PM";
  } else {
    document.getElementById("session").innerHTML = "AM";
  }

  //render times stored in variables
  document.getElementById("hours").innerHTML = hrs;
  document.getElementById("minutes").innerHTML = mins;
  document.getElementById("seconds").innerHTML = seconds;
}

setInterval(clock, 1000); //show updated time display every second

clock();
