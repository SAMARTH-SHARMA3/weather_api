import { Request, Response } from "express";
import {
  generateDublinWeatherData,
  generateLondonWeatherData,
  IndiaWeatherData,
  generatelondontemperature,
  generateDublintemperature,
  generateIndiatemperature
} from "../services/weatherService.js";

/**
 * Gets the weather data for a city
 * @param req the request object
 * @param res the response object
 */
export const getWeatherData = async (req: Request, res: Response) => {
  // We will use a try catch block to catch any errors
  try {
    // Get the city param from the request
    const { city } = req.params;
    console.log(city);

    // We will create a variable with a type of WeatherData
    let finalWeatherData: WeatherData;

    // We will use an if statement to check which city was passed in
    if (city === "london") {
      console.log(generateLondonWeatherData());
      finalWeatherData = generateLondonWeatherData();
    } else if (city === "dublin") {
      finalWeatherData = generateDublinWeatherData();
    }
    else if (city === "India") {
      finalWeatherData = IndiaWeatherData();
    } else {
      // If the city is not london or dublin, we will throw an error
      res.status(404).send("City not found");
    }

    // We will return the weather data as JSON
    res.status(200).json(finalWeatherData);
  } catch (error) {
    // If there is an error, we will log it and send a 500 status code
    res.status(500).send("Error in fetching weather data");
  }
};

export const gettemperature = async (req: Request, res: Response) =>{
  try{
    const { city } = req.params;
    console.log(city);

    let finaltemperatureData: threedaytemp;

    
    if (city === "london") {
      console.log(generatelondontemperature());
      finaltemperatureData = generatelondontemperature(); 
    }else if (city === "dublin") {
    console.log(generateDublintemperature());
    finaltemperatureData = generateDublintemperature(); 
    }else if (city === "India") {
    console.log(generateIndiatemperature());
    finaltemperatureData = generateIndiatemperature(); 
  }else {
    // If the city is not london or dublinor India, we will throw an error
    res.status(404).send("City not found");
  }
  res.status(200).json(finaltemperatureData);}
  catch (error) {
    // If there is an error, we will log it and send a 500 status code
    res.status(500).send("Error in fetching temperature data");
  }
  
};
