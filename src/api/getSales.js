import axios from "axios"

const url=process.env.REACT_APP_BACKEND_URL;

export const getSales=async(month)=>{
    try{
        const json=await axios.get(`${url}/stats/sales?month=${month}`);
        console.log(json.data)
        return json.data
    }
    catch(error){
        console.log('Error in getSales API',error.message);
    }
}