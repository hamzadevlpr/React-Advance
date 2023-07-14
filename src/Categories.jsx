import React, { useState } from 'react'
import axios from 'axios';

function Categories() {
    // const [cate, setCate] = useState([]);
    axios.get('https://shoes-collections.p.rapidapi.com/shoes/3', { headers: { 'X-RapidAPI-Key': 'c09327d1d3msha4a379bcac42b62p110bfdjsn592618995aeb', 'X-RapidAPI-Host': 'shoes-collections.p.rapidapi.com' } })
        .then(response => {
            console.log(response.data);
            // setCate(response.data);
        })
        .catch(error => console.error(error));
    return (
        <>
            <h1>Categories</h1>
            {/* <img src={cate.image} alt="d" className='w-20 h-20'/> */}
        </>
    )
}

export default Categories