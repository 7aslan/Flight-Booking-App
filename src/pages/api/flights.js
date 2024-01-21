import axios from "axios";

const FLIGHTS_API_URL = "http://localhost:3001/flights";

const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toISOString();
  };
  
  export const getAllFlights = async () => {
    try {
      const response = await axios.get(FLIGHTS_API_URL);
      const flights = response.data;

      const formattedFlights = flights.map(flight => ({
        ...flight,
        departureDate: formatDate(flight.departureDate),
        returnDate: formatDate(flight.returnDate),
      }));
  
      return formattedFlights;
    } catch (error) {
      console.error('Error occurred. Fetching flights cannot be completed:', error);
      throw error;
    }
  };
  