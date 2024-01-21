import React from 'react';
import { useRouter } from 'next/router';
import SearchResults from '@/component/SearchResults';

const SearchResultsPage = () => {
  const router = useRouter();
  const { departureAirport, arrivalAirport, departureDate, returnDate, oneWay } = router.query;

  console.log('Departure Airport:', departureAirport);
  console.log('Arrival Airport:', arrivalAirport);
  console.log('Departure Date:', departureDate);
  console.log('Return Date:', returnDate);
  console.log('One Way:', oneWay);

  return (
    <div>
      
      <SearchResults
        departureAirport={departureAirport}
        arrivalAirport={arrivalAirport}
        departureDate={departureDate}
        returnDate={returnDate}
        oneWay={oneWay === 'true'}
      />
    </div>
  );
};

export default SearchResultsPage;
