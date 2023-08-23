import { getSales } from "./getSales";
import { getBarChart } from "./getBarChart";
import { getPieChart } from "./getPieChart";

export const combinedAPI=async(month)=>{
    try{
        const res1=await getSales(month)
        const res2=await getBarChart(month)
        const res3=await getPieChart(month)
        return {res1,res2,res3}
    }
    catch(error){
        console.log('Error in combinedAPI',error.message);
    }
}