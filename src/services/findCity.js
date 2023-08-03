const apiKey = "3670ca660ca84d8bba484542232907 ";

export const getCityName = (latitude, longitude) => {
  if (latitude && longitude) {
    return fetch(
      `http://api.weatherapi.com/v1/forecast.json"?key=${apiKey}&q=${latitude},${longitude}&days=1`
    ).then((res) => res.json());
  } else {
    return "error";
  }
};
