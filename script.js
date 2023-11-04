function temperature() {
  // to convert celcius to fahrenheit
  // (CEL * 9/5) +32
  let celciusTemp = document.getElementById("celcius").value;
  let fahrenheitTemp = (celciusTemp * 9) / 5 + 32;
  document.getElementById("fahrenheit").value = fahrenheitTemp;
}

function weight() {
  //to convert kg to pounds
  //kg * 2.2

  let kg = document.getElementById("kilo").value;
  let pound = kg * 2.2;

  document.getElementById("pounds").value = pound;
}

function distance() {
  // to convert km to miles
  //km * 0.62137

  let km = document.getElementById("km").value;
  let mile = km * 0.62137;
  document.getElementById("miles").value = mile;
}
