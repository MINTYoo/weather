
const key = "https://www.weatherapi.com/docs/#9b6219a86fe34eb088e73910243001"

async function logWeather() {
    const response = await fetch();
    const weather = await response.json();
    console.log(weather);
  }