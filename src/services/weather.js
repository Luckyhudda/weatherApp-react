const apiKey = "3670ca660ca84d8bba484542232907 ";

export const weatherData = (cityName) => {
  const data = fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${cityName}&days=7&aqi=yes&alerts=no'`
  ).then((res) => res.json());

  if (data.code == 1006) {
    return "1006";
  } else {
    return data;
  }
};

export async function getData(cityName) {
  try {
    let data = await fetch(
      `http://api.weatherapi.com/v1/timezone.json?key=${apiKey}&q=${cityName}`
    );
    let finalData = data.json();
    return finalData;
  } catch {
    return "Error";
  }
}
let currentDate;
export const getTime = (cityName) => {
  return getData(cityName).then((day) => {
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const months = [
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
    currentDate = day?.location?.localtime;
    const date = new Date(currentDate);
    let currentday = date.getDay();
    let currentdate = date.getDate();
    let currentTime = date.getMonth();
    let today = days[currentday];
    let month = months[currentTime];
    return { today, month, currentdate };
  });
};
