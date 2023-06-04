function showtime() {
  let date = new Date();

  let day = date.getDay();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  let days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  if (hours < 10) {
    document.getElementById("hours").innerHTML = "0" + hours;
  } else {
    document.getElementById("hours").innerHTML = hours;
  }

  if (minutes < 10) {
    document.getElementById("minutes").innerHTML = "0" + minutes;
  } else {
    document.getElementById("minutes").innerHTML = minutes;
  }

  if (seconds < 10) {
    document.getElementById("seconds").innerHTML = "0" + seconds;
  } else {
    document.getElementById("seconds").innerHTML = seconds;
  }

  if (hours > 12) {
    document.getElementById("meridian").innerHTML = "PM";
  } else {
    document.getElementById("meridian").innerHTML = "AM";
  }

  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("day").innerHTML = days[day];

  setTimeout(() => {
    showtime();
  }, 200);
}

showtime();

console.log("HI");
console.log(new Date());
