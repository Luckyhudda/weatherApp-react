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
export const getTime = () => {
  const currentDate = new Date();
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = currentDate.toLocaleDateString(undefined, options);
  return formattedDate;
};
