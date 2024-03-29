import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FeaturesCarousel from './FeaturesCarousel';
import { fetchAirports } from '@/pages/api/airports';
import Select from 'react-select';
import { useRouter } from 'next/router';


const customStyles = {
    control: (provided) => ({
        ...provided,
        width: '100%',
        marginBottom: '15px',
        backgroundColor: 'transparent',
        border: 'none',
    }),
    option: (provided, state) => ({
        ...provided,
        color: 'black',
        backgroundColor: state.isSelected ? 'rgba(0, 0, 0, 0.5)' : 'transparent',
    }),
    input: (provided) => ({
        ...provided,
        color: 'white',
    }),
    placeholder: (provided) => ({
        ...provided,
        color: 'rgba(255, 255, 255, 0.7)',
    }),
};

const selectMargin = {
    marginTop: '15px',
};


const Search = () => {
    const [departureAirport, setDepartureAirport] = useState(null);
    const [arrivalAirport, setArrivalAirport] = useState(null);
    const [departureDate, setDepartureDate] = useState("");
    const [returnDate, setReturnDate] = useState('');
    const [oneWay, setOneWay] = useState(false);
    const [airportOptions, setAirportOptions] = useState([]);
    const router = useRouter();


    useEffect(() => {
        const fetchData = async () => {
            try {
                const airports = await fetchAirports();
                setAirportOptions(airports);
            } catch (error) {
                console.error("Error occured , airports cannot be fetched : ", error)
            }
        };
        fetchData();
    }, []);



    const handleDepartureAirportChange = (selectedOption) => {
        console.log("Departure Airport Selected ( Search.js) : ", selectedOption)
        console.log("Departure Date (Search.js): ", departureDate)
        console.log("Arrival Date (Search.js): ", returnDate)
        setDepartureAirport(selectedOption);
    };

    const handleArrivalAirportChange = (selectedOption) => {
        console.log("Arrival Airport Selected ( Search.js) : ", selectedOption)
        setArrivalAirport(selectedOption);
    };

    const handleSearch = async () => {
        const queryParams = {
            departureAirport: departureAirport?.value,
            arrivalAirport: arrivalAirport?.value,
            departureDate,
            returnDate: oneWay ? '' : returnDate,
        };
        console.log('Query Params:', queryParams);
        router.push({
            pathname: '/search-results',
            query: queryParams,
        });
    };



    return (
        <div style={{ width: '100%', margin: 'auto', display: 'flex', flexDirection: 'row', alignItems: 'left', background: `url("/airplane.jpg")`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div style={{ width: '40%', margin: '5rem 5rem 5rem 0', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                <Select
                    options={airportOptions}
                    isSearchable
                    placeholder="Departure Airport"
                    onChange={handleDepartureAirportChange}
                    value={departureAirport}
                    styles={customStyles}

                />
                <Select
                    options={airportOptions}
                    isSearchable
                    placeholder="Arrival Airport"
                    onChange={handleArrivalAirportChange}
                    value={arrivalAirport}
                    styles={{ ...customStyles, ...selectMargin }}


                />
                <TextField
                    label="Departure Date"
                    type="date"
                    value={departureDate}
                    onChange={(e) => setDepartureDate(e.target.value)}
                    InputLabelProps={{ shrink: true }}
                    style={{ marginBottom: '15px', width: '100%', border: 'none' }}
                    InputProps={{ style: { color: 'white' } }}
                />
                {!oneWay && (
                    <TextField
                        label="Return Date"
                        type="date"
                        value={returnDate}
                        onChange={(e) => setReturnDate(e.target.value)}
                        InputLabelProps={{ shrink: true }}
                        style={{ marginBottom: '15px', width: '100%', border: 'none' }}
                        InputProps={{ style: { color: 'white' } }}
                    />
                )}
                <FormControlLabel
                    control={<Checkbox checked={oneWay} onChange={() => setOneWay((prev) => !prev)} />}
                    label="One Way"
                    style={{
                        color: 'white'
                    }}
                />
                <Button variant="contained" color="primary" onClick={handleSearch} style={{ width: '100%' }}>
                    Search
                </Button>
            </div>
            <FeaturesCarousel />
        </div>

    );
};

export default Search;
