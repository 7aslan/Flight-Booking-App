import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const FlightCard = ({ flight, airports = [] }) => {
  const departureAirport = airports.find((airport) => airport.value === flight.departureAirportId.toString());
  const arrivalAirport = airports.find((airport) => airport.value === flight.arrivalAirportId.toString());
  console.log(flight)

  const departureCity = departureAirport ? departureAirport.label: 'Unknown';
  const arrivalCity = arrivalAirport ? arrivalAirport.label : 'Unknown';

  const departureDate = new Date(flight.departureDate).toLocaleString();
  const returnDate = new Date(flight.returnDate).toLocaleString();

  return (
    <Card sx={{ marginBottom: '20px' }}>
      <CardContent>
        <Typography variant="subtitle1">Departure: {departureCity}</Typography>
        <Typography variant="subtitle1">Arrival: {arrivalCity}</Typography>
        <Typography variant="subtitle1">Departure Time: {departureDate}</Typography>
        <Typography variant="subtitle1">Return Time: {returnDate}</Typography>
        <Typography variant="subtitle1">Price: ${flight.price.toFixed(2)}</Typography>
        <Typography variant="h6">{flight.airline}</Typography>
      </CardContent>
    </Card>
  );
};

export default FlightCard;
