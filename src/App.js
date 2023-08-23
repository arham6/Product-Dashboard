import { useEffect, useState } from 'react';
import './App.css';
import { seedDB } from './api/seedDB';
import Dashboard from './components/Dashboard';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [DB,setDB]=useState(false)
  useEffect(()=>{
    seedDB()
    .then((res)=>{
      setDB(res)
    })
    .catch(error=>console.log("error in App.js useEffect",error.message))
  },[])
  
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={DB?<Dashboard/>:null}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;