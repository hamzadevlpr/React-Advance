import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Pagination from './Pagination';
import { ClipLoader } from 'react-spinners';
import defaultImage from '../src/assets/defaultImage.png';
import { FaSearch } from 'react-icons/fa';
import Filter from './Filter';
import DatePicker from './DatePicker';

function News({ startDate, endDate }) {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    console.log("startDate:", startDate);
    console.log("endDate:", endDate);

    // pagination starts
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12; // Number of items to display per page
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    // Calculate the index of the first and last item for the current page
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    // Slice the products array based on the current page and items per page
    const currentNews = news.slice(indexOfFirstItem, indexOfLastItem);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await axios.get(`https://newsapi.org/v2/everything?q=apple&from=2023-07-02&to=2020-07-02&sortBy=popularity&apiKey=138f811f92d04554a454eb5521dcc769`);
                setNews(response.data.articles);
            } catch (error) {
                console.log('Error fetching product:', error);
            } finally {
                setLoading(false); // Set loading to false after data fetch, regardless of success or error
            }
        };

        fetchNews();
    }, []);
    return (
        <>
            {
                loading ? (
                    <div className="h-[70vh] flex justify-center items-center">
                        <ClipLoader color='#000' loading={loading} size={80} />
                    </div>
                ) : (
                    <>
                        <div className="max-w-screen-xl  mx-auto dark:bg-gray-800 dark:text-gray-100">
                            <div className="flex h-20 flex-row justify-end ">
                                <DatePicker />
                            </div>
                            <div className="grid grid-cols-1 gap-5 lg:grid-cols-4 sm:grid-cols-2 ">
                                {
                                    currentNews.map((newsList, index) => {
                                        return (
                                            <div key={index}
                                                className="rounded-xl
                                         relative flex items-end justify-start w-full text-left bg-center bg-cover h-96 dark:bg-gray-500 bg-gradient-to-t from-transparent to-gray-900"
                                                style={{
                                                    backgroundImage: `url(${newsList.urlToImage === null
                                                        ? { defaultImage }
                                                        : newsList.urlToImage
                                                        })`
                                                }}
                                            >
                                                <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-gray-900 dark:to-gray-900" />
                                                <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3 ">
                                                    <a
                                                        rel="noopener noreferrer"
                                                        href="#"
                                                        className="px-3 py-2 text-xs font-semibold tracki uppercase text-gray-100 bgundefined"
                                                    >
                                                        {newsList.source.name}
                                                    </a>
                                                    <div key={newsList.publishedAt} className="flex flex-col justify-start text-center text-gray-100">
                                                        <span className="text-3xl font-semibold leading tracking">
                                                            {new Date(newsList.publishedAt).getDate().toString().padStart(2, '0')}
                                                        </span>
                                                        <span className="leading uppercase">
                                                            {new Intl.DateTimeFormat('en', { month: 'short' }).format(new Date(newsList.publishedAt))}
                                                        </span>
                                                        <span className="text-sm uppercase">
                                                            {new Date(newsList.publishedAt).getFullYear()}
                                                        </span>
                                                    </div>
                                                </div>
                                                <h2 className="z-10 p-5">
                                                    <p className="font-medium text-sm text-gray-100 ">
                                                        {" "}
                                                        {newsList.description.slice(0, 50) + ' . . . . . '} <a href={newsList.url}
                                                            target='_blank' className="text-blue-500 text-xs">Read more</a>
                                                    </p>
                                                </h2>
                                            </div>
                                        )
                                    })
                                }

                            </div>
                        </div>
                        {/* Pagination component */}
                        <Pagination
                            items={news}
                            itemsPerPage={itemsPerPage}
                            currentPage={currentPage}
                            onPageChange={handlePageChange}
                        />
                    </>
                )}
        </>
    )
}

export default News