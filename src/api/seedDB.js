import axios from "axios"

const url='http://localhost:5000';

export const seedDB=async()=>{
    try{
        const json=await axios.get(`${url}/api/seedDB`);
        console.log(json.data)  
        return true;
    }
    catch(error){
        console.log('Error in seedDB API',error.message);
    }
}