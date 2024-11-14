
const key = ""

async function logWeather() {
    const response = await fetch();
    const weather = await response.json();
    console.log(weather);
  }
