import axios from "axios"

const url='http://localhost:5000';

export const getPieChart=async(month)=>{
    try{
        const json=await axios.get(`${url}/stats/PieChartData?month=${month}`);
        console.log(json.data)
        return json.data
    }
    catch(error){
        console.log('Error in getPieChart API',error.message);
    }
}