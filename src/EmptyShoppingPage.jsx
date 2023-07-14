import React from 'react'
import { MdOutlineRemoveShoppingCart } from 'react-icons/md';
import { Link } from 'react-router-dom';

function EmptyShoppingPage() {
    return (
        <>
            <div className="flex h-[70vh] items-center justify-center p-5 w-full m-auto">
                <div className="text-center">
                    <div className="inline-flex rounded-full bg-gray-100 p-4">
                        <div className="rounded-full stroke-gray-600 bg-gray-200 p-4">
                            <MdOutlineRemoveShoppingCart size={80} className="text-gray-800" />
                        </div>
                    </div>
                    <h1 className="mt-5 text-[36px] font-bold text-slate-800 lg:text-[50px]">
                        Your Cart is Empty
                    </h1>
                    <p className="text-slate-600 mt-5 lg:text-lg mb-6">
                        Add Something to make me happy :)
                    </p>
                    <Link to={'/products'} className="bg-gray-700 text-sm hover:bg-gray-800 text-white font-semibold py-2 px-6 rounded">
                        Continue Shopping
                    </Link>
                </div>
            </div>

        </>
    )
}

export default EmptyShoppingPage