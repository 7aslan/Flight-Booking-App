import axios from "axios";

export const fetchAirports = async ()=> {
    try{
        const response = await axios.get('http://localhost:3001/airports');
        return response.data.map(airport => ({label: airport.name, value:airport.id}))
    } catch(error){
        console.error('Error occured !! Airport fetching cannot be completed.',error);
        throw error;
    }
}