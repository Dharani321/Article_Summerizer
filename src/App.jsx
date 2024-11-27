import { useState } from 'react';
import React from 'react';
import './App.css';
import axios from 'axios';

function App() {
 
  const [url2,seturl]=useState("");
  const [para,setpara]=useState("");
  function change(e)
  {
    e.preventDefault();
    //console.log(e.target.value);
    seturl(e.target.value);
    // console.log(url2);

  }

  async function summerize()
  {
   
    const options = {
      method: 'GET',
      url: 'https://article-extractor-and-summarizer.p.rapidapi.com/summarize',
      params: {
        url:`${url2}`,
        lang: 'en',
        engine: '2'
      },
      headers: {
        'x-rapidapi-key': import.meta.env.VITE_API_KEY,
        'x-rapidapi-host': 'article-extractor-and-summarizer.p.rapidapi.com'
      }
    };
    
    try {
      const response = await axios.request(options);
      console.log(response);
      setpara(JSON.stringify(response.data.summary));
    } catch (error) {
      const pi="Not Matched Found";
      alert(`${pi}`);
      setpara(JSON.stringify(error));
    }


  }

  return (
    <>
     {/* <div>Dharani Mahata</div> */}

     <div className="w-4/4 flex flex-col gap-y-10 h-screen content-center text-center bg-gradient-to-r from-cyan-200 to-blue-200 sky-800 place-items-center justify-center rounded-lg">
        <div className="text-3xl text-center font-bold text-black-500">
          <h3>Article Summerizer</h3>
        </div>
         
        <div className='flex gap-x-6 text-center items-center justify-center' >
          <input type="url" onChange={change} className="rounded-lg border-solid border-2 border-sky-500 ..." placeholder="Enter  a valid url"/>
          <button  className='rounded-lg bg-sky-500 hover:text-white-500 hover:bg-sky-700' onClick={summerize}>Search</button>
        </div>
        <div className="w-3/4 h-1/4 text-center bg-violet-100 rounded-lg overflow-y-scroll">
          <p className="text-blue-500  font-bold">{para}</p>
        </div>
     </div>
   </> 
  )
}

export default App;
