function updateTime() {
  // Brussels
  let brusselsElement = document.querySelector("#brussels");
  if (brusselsElement) {
    let brusselsDateElement = brusselsElement.querySelector(".date");
    let brusselsTimeElement = brusselsElement.querySelector(".time");
    let brusselsTime = moment().tz("Europe/Brussels");

    brusselsDateElement.innerHTML = brusselsTime.format("MMMM Do YYYY");
    brusselsTimeElement.innerHTML = brusselsTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  // Johannesburg
  let johannesburgElement = document.querySelector("#johannesburg");
  if (johannesburgElement) {
    let johannesburgDateElement = johannesburgElement.querySelector(".date");
    let johannesburgTimeElement = johannesburgElement.querySelector(".time");
    let johannesburgTime = moment().tz("Africa/Johannesburg");

    johannesburgDateElement.innerHTML = johannesburgTime.format("MMMM Do YYYY");
    johannesburgTimeElement.innerHTML = johannesburgTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  // Darwin
  let darwinElement = document.querySelector("#darwin");
  if (darwinElement) {
    let darwinDateElement = darwinElement.querySelector(".date");
    let darwinTimeElement = darwinElement.querySelector(".time");
    let darwinTime = moment().tz("Australia/Darwin");

    darwinDateElement.innerHTML = darwinTime.format("MMMM Do YYYY");
    darwinTimeElement.innerHTML = darwinTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  // Galapagos
  let galapagosElement = document.querySelector("#galapagos");
  if (galapagosElement) {
    let galapagosDateElement = galapagosElement.querySelector(".date");
    let galapagosTimeElement = galapagosElement.querySelector(".time");
    let galapagosTime = moment().tz("Pacific/Galapagos");

    galapagosDateElement.innerHTML = galapagosTime.format("MMMM Do YYYY");
    galapagosTimeElement.innerHTML = galapagosTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
    <div class="city">
    <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
        </div>
        <div class="time">${cityTime.format(
          "h:mm:ss"
        )} <small>${cityTime.format("A")}</small></div>
            </div>
            <a href="/">All cities</a>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");

citiesSelectElement.addEventListener("change", updateCity);
