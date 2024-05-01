import { faker } from "@faker-js/faker";

export const generateLondonWeatherData = (): WeatherData => {
  // Generate random weather data
  const generatedWeatherData = {
    city: "London",
    temperature: faker.number.int({ min: -15, max: 30 }),
    humidity: faker.number.int({ min: 79, max: 86 }),
    wind: faker.number.int({ min: 2, max: 78 }),
    rain: faker.number.int({ min: 65, max: 75 }),
  };

  // Return weather data
  return generatedWeatherData;
};

export const IndiaWeatherData = (): WeatherData => {
  // Generate random weather data
  const generatedWeatherData = {
    city: "India",
    temperature: faker.number.int({ min: 12, max: 49 }),
    humidity: faker.number.int({ min: 20, max: 120 }),
    wind: faker.number.int({ min: 1, max: 10 }),
    rain: faker.number.int({ min: 20, max: 100 }),
  };

  // Return weather data
  return generatedWeatherData;
};

export const generateDublinWeatherData = (): WeatherData => {
  // Generate random weather data
  const generatedWeatherData: WeatherData = {
    city: "Dublin",
    temperature: faker.number.int({ min: -15, max: 30 }),
    humidity: faker.number.int({ min: 79, max: 86 }),
    wind: faker.number.int({ min: 2, max: 78 }),
    rain: faker.number.int({ min: 65, max: 75 }),
  };

  // Return weather data
  return generatedWeatherData;
};

export const generatelondontemperature =(): threedaytemp =>{
  const generatetemperature: threedaytemp={
    city: "London",
    dayone: faker.number.int({min: -15, max:30}),
    daytwo: faker.number.int({min: -12, max:22}),
    daythree: faker.number.int({min: 4, max:40}),
  };

  return generatetemperature;
};

export const generateDublintemperature =(): threedaytemp =>{
  const generatetemperature: threedaytemp={
    city: "dublin",
    dayone: faker.number.int({min: -15, max:30}),
    daytwo: faker.number.int({min: -12, max:22}),
    daythree: faker.number.int({min: 4, max:40}),
  };

  return generatetemperature;
};

export const generateIndiatemperature =(): threedaytemp =>{
  const generatetemperature: threedaytemp={
    city: "India",
    dayone: faker.number.int({min: -15, max:30}),
    daytwo: faker.number.int({min: -12, max:22}),
    daythree: faker.number.int({min: 4, max:40}),
  };

  return generatetemperature;
};
