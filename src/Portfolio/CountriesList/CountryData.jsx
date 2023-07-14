import axios from 'axios';
import React, { useState, useEffect } from 'react';

function CountryData() {
    const [countryData, setCountryData] = useState([]);
    useEffect(() => {
        const getCountryByName = async () => {
            const response = await axios.get(`https://restcountries.com/v3.1/name/pakistan`);
            setCountryData(response.data);
        };
        getCountryByName();
        }, []);
    return (
        <>
            {countryData.map((item) => {
                return (
                    <ul key={item.name.common}>
                        <li>
                            {item.name.nativeName &&
                                Object.keys(item.name.nativeName).map((key) => {
                                    return (
                                        <div key={key}>
                                            <div>{item.name.nativeName[key].official}</div>
                                        </div>
                                    );
                                })}
                        </li>
                    </ul>
                );
            })}
        </>
    )
}

export default CountryData