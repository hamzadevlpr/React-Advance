import axios from 'axios';
import React, { useContext, useState, useEffect } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import CartContext from './CartContext'
import { Link } from 'react-router-dom';
import Pagination from './Pagination';
import { ClipLoader } from 'react-spinners';

function Products() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const { addtoCart } = useContext(CartContext);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6; // Number of items to display per page

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`https://fakestoreapi.com/products`);
                setProducts(response.data);
            } catch (error) {
                console.log('Error fetching product:', error);
            } finally {
                setLoading(false); // Set loading to false after data fetch, regardless of success or error
            }
        };

        fetchProduct();
    }, []);
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // Calculate the index of the first and last item for the current page
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    // Slice the products array based on the current page and items per page
    const currentProducts = products.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <>

            {
                loading ? (
                    <div className="h-[70vh] flex justify-center items-center">
                        <ClipLoader color='#000' loading={loading} size={80} />
                    </div>
                ) : (
                    <>
                        {/* component */}
                        <div className="flex justify-center items-center flex-wrap w-[75vw] m-auto">
                            {
                                currentProducts.map((product, index) => {
                                    return (
                                        <div key={index} className="container mx-auto max-w-sm w-72  p-4">
                                            <div className="items-center flex flex-col justify-center py-5 px-0 bg-white rounded-lg shadow-2xl border border-gray-300">
                                                <div className="prod-title text-center">
                                                    <Link to={`/product/${product.id}`} className="text-1xl uppercase text-gray-900 font-bold">{product.title.slice(0, 20)}
                                                    </Link>
                                                    <p className="uppercase text-xs text-gray-400">
                                                        {product.description.slice(0, 30) + ' . . . '}
                                                    </p>
                                                </div>
                                                <div className="prod-img ">
                                                    <img
                                                        src={product.image}
                                                        className="mix-blend-multiply p-5 object-contain text-center object-center w-40 h-40"
                                                    />
                                                </div>
                                                <div className="prod-info grid gap-10 ">
                                                    <div className="flex flex-col md:flex-row space-x-[6rem] items-center text-gray-900">
                                                        <p className="font-bold text-md">{product.price} $</p>
                                                        <button onClick={() => addtoCart(
                                                            product.title,
                                                            product.description,
                                                            product.price,
                                                            product.image

                                                        )} className="px-3 py-1 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-600 hover:text-white  focus:outline-none">
                                                            <AiOutlineShoppingCart size={25} />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        {/* Pagination component */}
                        <Pagination
                            items={products}
                            itemsPerPage={itemsPerPage}
                            currentPage={currentPage}
                            onPageChange={handlePageChange}
                        />
                    </>
                )}
        </>
    )
}

export default Products