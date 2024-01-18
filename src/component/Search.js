// components/Search.js

import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const Search = () => {
    const [departureAirport, setDepartureAirport] = useState('');
    const [arrivalAirport, setArrivalAirport] = useState('');
    const [departureDate, setDepartureDate] = useState('');
    const [returnDate, setReturnDate] = useState('');
    const [oneWay, setOneWay] = useState(false);
    const [flights, setFlights] = useState([]);

    const handleSearch = async () => {

        const queryParams = {
            departureAirport,
            arrivalAirport,
            departureDate,
            returnDate: oneWay ? '' : returnDate,
        };

        // window.location.href = `/search?${new URLSearchParams(queryParams).toString()}`;
    };

    return (
        <div style={{ width: '100%', margin: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ width: '60%', margin: '5rem', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', background: `url("/airplane.jpg")`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <TextField
                    label="Departure Airport"
                    value={departureAirport}
                    onChange={(e) => setDepartureAirport(e.target.value)}
                    style={{ marginBottom: '15px', width: '100%' }}
                    InputProps={{ style: { color: 'white' } }}
                />
                <TextField
                    label="Arrival Airport"
                    value={arrivalAirport}
                    onChange={(e) => setArrivalAirport(e.target.value)}
                    style={{ marginBottom: '15px', width: '100%' }}
                    InputProps={{ style: { color: 'white' } }}
                />
                <TextField
                    label="Departure Date"
                    type="date"
                    value={departureDate}
                    onChange={(e) => setDepartureDate(e.target.value)}
                    InputLabelProps={{ shrink: true }}
                    style={{ marginBottom: '15px', width: '100%' }}
                    InputProps={{ style: { color: 'white' } }}
                />
                {!oneWay && (
                    <TextField
                        label="Return Date"
                        type="date"
                        value={returnDate}
                        onChange={(e) => setReturnDate(e.target.value)}
                        InputLabelProps={{ shrink: true }}
                        style={{ marginBottom: '15px', width: '100%' }}
                        InputProps={{ style: { color: 'white' } }}
                    />
                )}
                <FormControlLabel
                    control={<Checkbox checked={oneWay} onChange={() => setOneWay((prev) => !prev)} />}
                    label="One Way"
                    style={{
                        color: 'white'}}
                />
                <Button variant="contained" color="primary" onClick={handleSearch} style={{ width: '100%' }}>
                    Search
                </Button>
            </div>
        </div>
    );
};

export default Search;
