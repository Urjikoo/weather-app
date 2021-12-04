let submitButton = document.querySelector(".submit");
let content = document.querySelector(".content");
const API_Key = "d5885f215ffdfb9248e11e2db389dcbc";
submitButton.addEventListener("click", weather);

function weather() {
  let city = document.querySelector("#city").value;
  let country = document.querySelector("#country").value;
  console.log(city);
  console.log(country);
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_Key}`;

  console.log(url);
  fetch(url)
    .then((returns) => returns.json())
    .then((data) => {
      console.log(data.main.temp);
      console.log(data);
      let temp = Math.floor((data.main.temp - 273.15) * 1.8) + 32 + "℉";
      console.log(temp);
      document.querySelector("#output").innerHTML = temp;

      // × 9/5) + 32
      // ((valNum-273.15)*1.8)+32;
      // content.innerText.innerHTML = temp;
    })
    .catch((err) => console.log(err));
}
