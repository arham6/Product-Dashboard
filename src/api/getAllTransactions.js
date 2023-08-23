import axios from "axios"

const url='http://localhost:5000';

export const getAllTransactions=async(pageNo="1",searchVal="",month="03")=>{
    try{
        const json=await axios.get(`${url}/api/getAllTransactions?pageNo=${pageNo}&searchVal=${searchVal}&month=${month}`);
        console.log(json.data)
        return json.data;
    }
    catch(error){
        console.log('Error in getAllTransactions API',error.message);
    }
}