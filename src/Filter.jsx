import React from 'react'
import { BiSearchAlt } from 'react-icons/bi';

function Filter() {
    return (
        <>
            <div className="w-full">
                <div className="relative">
                    <div className="absolute flex items-center ml-2 h-full">
                        <BiSearchAlt size={25}/>
                    </div>
                    <input
                        type="text"
                        placeholder="Search by listing, location, bedroom number..."
                        className="px-10 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
                    />
                </div>
                <div className="flex items-center justify-between mt-4">
                    <p className="font-medium">Filters</p>
                    <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md">
                        Reset Filter
                    </button>
                </div>
                <div>
                    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
                        <select className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
                            <option value="">All Type</option>
                            <option value="for-rent">For Rent</option>
                            <option value="for-sale">For Sale</option>
                        </select>
                        <select className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
                            <option value="">Furnish Type</option>
                            <option value="fully-furnished">Fully Furnished</option>
                            <option value="partially-furnished">Partially Furnished</option>
                            <option value="not-furnished">Not Furnished</option>
                        </select>
                        <select className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
                            <option value="">Any Price</option>
                            <option value={1000}>RM 1000</option>
                            <option value={2000}>RM 2000</option>
                            <option value={3000}>RM 3000</option>
                            <option value={4000}>RM 4000</option>
                        </select>
                        <select className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
                            <option value="">Floor Area</option>
                            <option value={200}>200 sq.ft</option>
                            <option value={400}>400 sq.ft</option>
                            <option value={600}>600 sq.ft</option>
                            <option value="800 sq.ft">800</option>
                            <option value="1000 sq.ft">1000</option>
                            <option value="1200 sq.ft">1200</option>
                        </select>
                        <select className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
                            <option value="">Bedrooms</option>
                            <option value={1}>1 bedroom</option>
                            <option value={2}>2 bedrooms</option>
                            <option value={3}>3 bedrooms</option>
                            <option value={4}>4 bedrooms</option>
                            <option value={5}>5 bedrooms</option>
                        </select>
                        <select className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
                            <option value="">Bathrooms</option>
                            <option value={1}>1 bathroom</option>
                            <option value={2}>2 bathrooms</option>
                            <option value={3}>3 bathrooms</option>
                            <option value={4}>4 bathrooms</option>
                            <option value={5}>5 bathrooms</option>
                        </select>
                        <select className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
                            <option value="">Bathrooms</option>
                            <option value={1}>1 space</option>
                            <option value={2}>2 space</option>
                            <option value={3}>3 space</option>
                        </select>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Filter