import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { ClipLoader } from 'react-spinners';
import { AiOutlineCheck } from 'react-icons/ai';

function CountryDetail() {
    const [loading, setLoading] = useState(true);
    const [countryData, setCountryData] = useState([]);
    const { CountryName } = useParams();

    const getCountryByName = async () => {
        try {
            const response = await axios.get(`https://restcountries.com/v3.1/name/${CountryName}`);
            setCountryData(response.data[0]);
            setLoading(false);

        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getCountryByName();
    }, [CountryName]);


    return (
        <>
            {loading ? (
                <div className="h-[70vh] flex justify-center items-center">
                    <ClipLoader color="#000" loading={loading} size={80} />
                </div>
            ) : (
                <>
                    <div className="dark:bg-gray-800 dark:text-gray-100 relative">
                        <div className="absolute top-10 left-10">
                            <Link to={'/country'} title='Go Back'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="animate-bounce bg-gray-700 text-white rounded-full p-2 w-10 h-10">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                                </svg>
                            </Link>

                        </div>
                        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                            <div className="max-w-3xl mx-auto text-center">
                                <h1 className='text-3xl font-bold'>
                                    {`${countryData.name.official} `}
                                </h1>
                                <div className="flex justify-center items-center">
                                    <div className="relative">
                                        <p className='absolute top-12 left-2 text-xs font-medium text-white rounded px-4 py-1 bg-gray-800'>{countryData.region}</p>
                                        <img src={countryData.flags.svg} alt={countryData.flags.alt} className="w-96 rounded-lg shadow-lg dark:bg-gray-500 sm:min-h-16 mt-10" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-wrap justify-between items-center gap-4 px-2 w-full p-10">
                                <div className="w-full sm:w-1/4 lg:w-1/5 border-2 flex flex-col items-start justify-center rounded-xs bg-white bg-clip-border px-3 py-4 shadow-md">
                                    <p className="text-sm text-gray-600 font-medium">Native Name</p>
                                    <p className="text-base font-semibold text-navy-700 dark:text-white">{countryData.name.common}</p>
                                </div>
                                <div className="w-full sm:w-1/4 lg:w-1/5 border-2 flex flex-col items-start justify-center rounded-xs bg-white bg-clip-border px-3 py-4 shadow-md">
                                    <p className="text-sm text-gray-600 font-medium">Top Level Domain</p>
                                    <p className="text-base font-semibold text-navy-700 dark:text-white">{countryData.tld[0]}</p>
                                </div>
                                <div className="w-full sm:w-1/4 lg:w-1/5 border-2 flex flex-col items-start justify-center rounded-xs bg-white bg-clip-border px-3 py-4 shadow-md">
                                    <p className="text-sm text-gray-600 font-medium">Population</p>
                                    <p className="text-base font-semibold text-navy-700 dark:text-white">{countryData.population.toLocaleString()}</p>
                                </div>
                                <div className="w-full sm:w-1/4 lg:w-1/5 border-2 flex flex-col items-start justify-center rounded-xs bg-white bg-clip-border px-3 py-4 shadow-md">
                                    <p className="text-sm text-gray-600 font-medium">Timezones</p>
                                    <p className="text-base font-semibold text-navy-700 dark:text-white">{countryData.timezones}</p>
                                </div>
                                <div className="w-full sm:w-1/4 lg:w-1/5 border-2 flex flex-col items-start justify-center rounded-xs bg-white bg-clip-border px-3 py-4 shadow-md">
                                    <p className="text-sm text-gray-600 font-medium">Sub Region</p>
                                    <p className="text-base font-semibold text-navy-700 dark:text-white">{countryData.subregion}</p>
                                </div>
                                <div className="w-full sm:w-1/4 lg:w-1/5 border-2 flex flex-col items-start justify-center rounded-xs bg-white bg-clip-border px-3 py-4 shadow-md">
                                    <p className="text-sm text-gray-600 font-medium">Country Calling Code</p>
                                    <p className="text-base font-semibold text-navy-700 dark:text-white">{countryData.idd.root + countryData.idd.suffixes}</p>
                                </div>
                                <div className="w-full sm:w-1/4 lg:w-1/5 border-2 flex flex-col items-start justify-center rounded-xs bg-white bg-clip-border px-3 py-4 shadow-md">
                                    <p className="text-sm text-gray-600 font-medium">Official Language</p>
                                    <p className="text-base font-semibold text-navy-700 dark:text-white">

                                    </p>
                                </div>
                                <div className="w-full sm:w-1/4 lg:w-1/5 border-2 flex flex-col items-start justify-center rounded-xs bg-white bg-clip-border px-3 py-4 shadow-md">
                                    <p className="text-sm text-gray-600 font-medium">Capital</p>
                                    <p className="text-base font-semibold text-navy-700 dark:text-white">{countryData.capital}</p>
                                </div>


                                <div className="w-full sm:w-1/4 lg:w-3/4 border-2 flex flex-col items-start justify-center rounded-xs bg-white bg-clip-border pl-4 py-4 shadow-md">
                                    <p className="text-sm text-gray-600 font-medium">Borders</p>
                                    <p className="text-base font-semibold text-navy-700 dark:text-white flex gap-2 py-2 flex-wrap">
                                        {countryData.borders !== undefined
                                            ? countryData.borders.map((border, index) => (
                                                <p key={index} className="bg-gray-800 text-white px-10 rounded py-2">
                                                    {border}
                                                </p>
                                            ))
                                            : <p className="bg-gray-800 text-white px-10 rounded py-2">No Borders</p>}
                                    </p>
                                </div>


                                <div className="w-full sm:w-1/4 lg:w-1/5 border-2 flex flex-col items-start justify-center rounded-xs bg-white bg-clip-border px-3 py-4 shadow-md">
                                    <p className="text-sm text-gray-600 font-medium">Capital</p>
                                    <p className="text-base font-semibold text-navy-700 dark:text-white">{countryData.capital}</p>
                                </div>

                            </div>

                        </div>
                    </div>

                </>
            )}

        </>
    );
}

export default CountryDetail;
