import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ClipLoader } from 'react-spinners';
import Pagination from '../../Pagination';
import { Link } from 'react-router-dom';
import SearchInput from './SearchInput';

function CountryList() {
  const [loading, setLoading] = useState(true);
  const [flag, setFlag] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 40; // Number of items to display per page
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  // Calculate the index of the first and last item for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // Slice the products array based on the current page and items per page
  const currentFlag = flag.slice(indexOfFirstItem, indexOfLastItem);

  useEffect(() => {
    const fetchFlags = async () => {
      try {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        setFlag(response.data);
        setLoading(false);
      } catch (error) {
        console.log('Error fetching country list:', error);
        setLoading(false);
      }
    };

    fetchFlags();
  }, []);

  const getCountryByName = async (countryName) => {
    try {
      const response = await axios.get(`https://restcountries.com/v3.1/name/${countryName}`);
      setFlag(response.data);
    } catch (error) {
      console.log('Error fetching country:', error);
    }
  };

  const handleSearch = (countryName) => {
    if (countryName.trim() !== '') {
      setLoading(true);
      getCountryByName(countryName);
    }
  };

  return (
    <>
      {loading ? (
        <div className="h-[70vh] flex justify-center items-center">
          <ClipLoader color="#000" loading={loading} size={80} />
        </div>
      ) : (
        <>
          <section>
            <h1 className="font-poppins text-6xl font-bold text-gray-800 text-center">Country List</h1>
            <div className="flex justify-between p-5 items-center">
              <SearchInput onSearch={handleSearch} />
              <h5 className="bg-gray-800 text-white px-4 py-1.5 rounded font-bold text-center">
                Total Countries: {flag.length}
              </h5>
            </div>
            <div className="flex justify-center flex-wrap mt-10">
              {currentFlag.map((country, index) => (
                <Link
                  to={`/country/${country.name.common}`}
                  key={index}
                  className="shadow-xl relative flex flex-col min-w-0 rounded-xl break-words border bg-white w-[18rem] cursor-pointer m-5"
                >
                  <img
                    src={country.flags.svg}
                    className="h-[10rem] object-cover w-full rounded-tl-xl rounded-tr-xl"
                    alt="Country Flag"
                  />
                  <div className="flex-auto p-5 custom-font font-medium">
                    <h5 className="mb-3 font-bold">{country.name.common}</h5>
                    <p>Population: {country.population}</p>
                    <p>Capital: {country.capital}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
          {/* Pagination component */}
          <Pagination
            items={flag}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </>
  );
}

export default CountryList;
