import React, { useEffect, useState } from 'react'
import { getAllTransactions } from '../api/getAllTransactions'
import Table from './Table';
import Dropdown from './Dropdown';
import { getSales } from '../api/getSales';
import SalesData from './SalesData';
import { getBarChart } from '../api/getBarChart';
import BarChartStats from './BarChartStats';

const Dashboard = () => {
    const [tableData,setTableData]=useState(null);
    const [selectedMonth,setSelectedMonth]=useState("03");
    const [search,setSearch]=useState("");
    const [page,setPage]=useState(1);

    const [statsData,setStatsData]=useState(null);
    const [statsMonth,setStatsMonth]=useState("01");

    const [barData,setBarData]=useState(null);
    const [barMonth,setBarMonth]=useState("01");

    function handleMonthChange1(e){
      setSelectedMonth(e.target.value); 
      setPage(1);
    }
    function handleMonthChange2(e){
      setStatsMonth(e.target.value); 
    }
    function handleMonthChange3(e){
      setBarMonth(e.target.value); 
    }

    useEffect(()=>{
        setTableData(null)
        getAllTransactions(page.toString(),search,selectedMonth)
        .then((res)=>setTableData(res))
        .catch(error=>console.log("error in getAllTransactions useEffect",error.message))
    },[search,selectedMonth,page])

    useEffect(()=>{
        getSales(statsMonth)
        .then((res)=>setStatsData(res))
        .catch(error=>console.log("error in getSales useEffect",error.message))
    },[statsMonth])

    useEffect(()=>{
        getBarChart(barMonth)
        .then((res)=>setBarData(res))
        .catch(error=>console.log("error in getBarChart useEffect",error.message))
    },[barMonth])

  return (
    <div>

      {!tableData? 'loading...':
      <>
        <div className='parent'>
          {/* <input className='table-search' onChange={(e) => {setSearch(e.target.value); setPage(1);}} name='search' placeholder='search...' value={search} type="text" /> */}
          <Dropdown month={selectedMonth} handleMonthChange={handleMonthChange1}/>
        </div>

        <Table tableData={tableData}/>

        <div className='pagination-parent'>
          <button className='pagination-buttons' type="button" disabled={page<2} onClick={(e)=>setPage(prev=>prev-1)}>Prev</button>
          Page-{page}
          <button className='pagination-buttons' type="button" disabled={tableData.length===0} onClick={(e)=>setPage(prev=>prev+1)}>Next</button>
        </div>
      </>
      }

      <hr/>

      {statsData &&
      <>
        <div className='parent'>
          <h2>Statistics--</h2>
          <Dropdown month={statsMonth} handleMonthChange={handleMonthChange2}/>
        </div>

        <SalesData statsData={statsData}/>

      </>
      }

      <hr/>

      {barData && 
      <>
        <div className='parent'>
          <h2>Bar Chart Stats--</h2>
          <Dropdown month={barMonth} handleMonthChange={handleMonthChange3}/>
        </div>

        <BarChartStats barData={barData}/>
  
      </>
      }

    </div>
  )
}

export default Dashboard