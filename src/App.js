import "./App.css";
//import countriesData from "./countries.json"
import CountriesList from "./components/CountriesList";
import CountryDetails from "./components/CountryDetails";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { Row } from 'antd';
import { useState,useEffect } from 'react'
const axios = require('axios').default;


function App() {
  const [countryData,setCountryData] = useState([])
  useEffect(()=>{
    axios.get('https://ih-countries-api.herokuapp.com/countries')
    .then((allCountries)=>{
      setCountryData(allCountries.data)})
    .catch((err)=>{
      console.log(err)
    })  
  },[])
  return (
  <div className="App">
    <Navbar/>
    <Row gutter={24}>
    <CountriesList countryData={countryData}/>
    <Routes>
      <Route path="/:code" element={<CountryDetails countryData={countryData}/>}/>
    </Routes>
    </Row>
  </div>
  )
}
export default App;
