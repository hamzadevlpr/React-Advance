import React, { useContext, useState } from 'react'
import CartContext from './CartContext'
import { MdDeleteForever } from 'react-icons/md';
import EmptyShoppingPage from './EmptyShoppingPage';

function Cart() {
  const { item } = useContext(CartContext);
  const [count, setCount] = useState(1);
  console.log(item);
  return (
    <>
      {
        item.length == 0 ?
          <EmptyShoppingPage />
          :
          <div className="h-screen ">
            <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
            <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
              <div className="rounded-lg md:w-2/3">

                {
                  item.map((item, index) => {
                    return (
                      <>
                        <div key={index} className="relative justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                          <img
                            src={item.pImage}
                            alt="product-image"
                            className="w-40 h-40 rounded-lg sm:w-40 "
                          />
                          <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                            <div className="mt-5 sm:mt-0">
                              <h2 className="text-lg font-bold text-gray-900">
                                {item.name}
                              </h2>
                              <p className="mt-1 text-xs text-gray-700 w-44">{item.disc.slice(0,150) + ' . . . .'}</p>
                            </div>
                            <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6 ">
                              <div className="flex items-center border-2 float-right">
                                <button className="cursor-pointer rounded-l py-1 px-3.5 duration-100 hover:bg-gray-600 hover:text-blue-50 font-medium text-md" >-</button>
                                <input
                                  className="h-6 w-6 bg-white text-center text-xs outline-none"
                                  type="number"  disabled value={count}
                                />
                                <button className="cursor-pointer rounded-r py-1 px-3 duration-100 hover:bg-gray-600 hover:text-blue-50 font-medium text-md" >+</button>
                              </div>
                              <div className="flex items-center space-x-4 bottom-5 right-5 absolute">
                                <div className="flex flex-col space-y-3 justify-evenly">
                                  <p className="text-sm font-medium">Unit Price $ <span className='text-indigo-600'>{item.price}</span></p>
                                  <p className="text-sm font-medium">Total Price $ <span className='text-indigo-600'>4522</span></p>
                                </div>
                                <MdDeleteForever size={25} color='red' className='cursor-pointer' title='Delete' />
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    )
                  })
                }






              </div>
              {/* Sub total */}
              <div className="sticky top-20 mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
                <div className="mb-2 flex justify-between">
                  <p className="text-gray-700">Subtotal</p>
                  <p className="text-gray-700 font-medium">$ 4111</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-gray-700">Shipping</p>
                  <p className="text-gray-700">$</p>
                </div>
                <hr className="my-4" />
                <div className="flex justify-between">
                  <p className="text-lg font-bold">Total</p>
                  <div className="">
                    <p className="mb-1 text-lg font-bold">548454 $</p>
                    <p className="text-sm text-gray-700">including VAT</p>
                  </div>
                </div>
                <button className="mt-6 w-full h-10 bg-gray-800 px-5 py-1.5 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none active:bg-gray-00 rounded-xl ">
                  Check out
                </button>
              </div>
            </div>
          </div>
      }
    </>
  )
}

export default Cart;