import React from 'react'
import {useState,useEffect} from 'react'

function useCurrencyInfo(currency){
    const[data,setData]=useState({})//empty object for recieving no value after the api call
    useEffect(()=>{
      fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
      .then((res)=>res.json())//response coverted to json
      .then((res)=>setData(res[currency]))//objects of json file can be accessed with []
    },[currency])//currency main change kar rahe hain api main toh change aa raha h object main,so it is a dependency
    return data;
  }
  export default useCurrencyInfo;// returning method from which the data can also be extracted