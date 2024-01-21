// components/SearchResults.js

import React, { useEffect, useState } from 'react';
import FlightCard from './FlightCard';
import { getAllFlights } from '@/pages/api/flights';
import { fetchAirports } from '@/pages/api/airports';
import { FormControl, InputLabel, Select, MenuItem, Typography } from '@mui/material';

const SearchResults = ({ departureAirport, arrivalAirport, departureDate, returnDate, oneWay }) => {

  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(true);
  const [airports, setAirports] = useState([]);
  const [sortBy, setSortBy] = useState('departureTime');

  useEffect(() => {

    const fetchFlights = async () => {

      try {
        const allFlights = await getAllFlights();
        const allAirports = await fetchAirports();

        const filteredFlights = allFlights.filter(flight =>
          // flight.departureAirportId === parseInt(departureAirport?.value) &&
          // flight.arrivalAirportId === parseInt(arrivalAirport?.value) &&
          new Date(flight.departureDate) >= new Date(departureDate) &&
          (oneWay || new Date(flight.returnDate) <= new Date(returnDate))
        );

        // sorting
        const sortedFlights = [...filteredFlights].sort((a, b) => {
          switch (sortBy) {
            case 'departureTime':
              return new Date(a.departureDate) - new Date(b.departureDate);
            case 'returnTime':
              return new Date(a.returnDate) - new Date(b.returnDate);
            case 'price':
              return a.price - b.price;
            default:
              return 0;
          }
        });

        setFlights(sortedFlights);
        setAirports(allAirports);
        setLoading(false);

      } catch (error) {
        console.error('Error fetching and filtering flights:', error);
      }
    };

    fetchFlights();
  }, [departureAirport, arrivalAirport, departureDate, returnDate, oneWay, sortBy]);

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  }


  return (
    <div>
      <Typography variant='h2' align='center'>Search Results</Typography>
      <FormControl>
        <InputLabel>Sort By</InputLabel>
        <Select value={sortBy} onChange={handleSortChange}>
          <MenuItem value="departureTime">Departure Time</MenuItem>
          <MenuItem value="returnTime">Return Time</MenuItem>
          <MenuItem value="price">Price</MenuItem>
        </Select>
      </FormControl>
      {loading ? (
        <div>Loading...</div>
      ) : (
        flights.length > 0 ? (
          flights.map((flight) => (
            <FlightCard key={flight.id} flight={flight} airports={airports || []} />
          ))
        ) : (
          <p>No flights found for the selected criteria.</p>
        )
      )}
    </div>
  );
};

export default SearchResults;
