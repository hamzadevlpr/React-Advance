import React, { useState } from "react";
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation } from "react-router-dom";
import { BsEyeSlash, BsEye } from 'react-icons/bs';
import ClipLoader from "react-spinners/ClipLoader";


function Sigup() {
    const [passwordType, setPasswordType] = useState("password");
    const [passwordInput, setPasswordInput] = useState("");


    // Sign in Button Loading
    const [btnloading, tsetLoading] = useState(false);
    const handleClick = () => {
        tsetLoading(true);
        setTimeout(() => {
            tsetLoading(false);
        }, 1000);
    };
    // Password Toggle Button
    const togglePassword = () => {
        if (passwordType === "password") {
            setPasswordType("text")
            return;
        }
        setPasswordType("password")
    }
    const handlePasswordChange = (evnt) => {
        setPasswordInput(evnt.target.value);
    }
    const location = useLocation();
    console.log(location.pathname);
    return (
        <div className="h-full w-full px-4 my-5 ">
            <div className="flex flex-col items-center justify-center ">
                <div className="bg-white shadow-xl rounded lg:w-1/3  md:w-1/2 w-full p-10  ">

                    <p tabIndex={0} role="heading" aria-label="Login to your account" className="text-2xl font-extrabold leading-6 text-gray-800">
                        <span className="">Unlock your potential,</span> <br />
                        {/* <span className="bg-gradient-to-tl from-green-400 to-indigo-900 bg-clip-text text-transparent uppercase text-2xl">register now.</span> */}
                    </p>

                    <p className="text-sm mt-4 font-medium leading-none text-gray-500">
                        Already have an account?{" "}

                        <Link to={location.pathname === '/signup' ? '/login' : '/signup'} tabIndex={0} role="link" aria-label="Sign up here" className="text-sm font-medium leading-none underline text-gray-800 cursor-pointer">
                            {" "}
                            {location.pathname === '/signup' ? 'Login here' : 'Sign up here'}
                        </Link>

                    </p>
                    <button aria-label="Continue with google" role="button" className="focus: outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-2 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-10">
                        <FcGoogle size={25} />
                        <p className="text-xs font-medium ml-4 text-gray-700 flex-end">Continue with Google</p>
                    </button>


                    <div className="w-full flex items-center justify-between py-5">
                        <hr className="w-full bg-gray-400" />
                        <p className="text-base font-medium leading-4 px-2.5 text-gray-400">OR</p>
                        <hr className="w-full bg-gray-400  " />
                    </div>
                    <div>
                        <lable className="text-sm font-medium leading-none text-gray-800">Full Name</lable>
                        <input aria-label="enter email adress" role="input" type="text" className="bg-gray-200 border rounded focus: outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2" />
                    </div>
                    <div className="mt-6  w-full">
                        <lable className="text-sm font-medium leading-none text-gray-800">Email</lable>
                        <input aria-label="enter email adress" role="input" type="email" className="bg-gray-200 border rounded focus: outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2" />
                    </div>
                    <div className="mt-6  w-full">
                        <lable className="text-sm font-medium leading-none text-gray-800">Password</lable>
                        <div className="relative flex items-center justify-center">
                            {/* // password */}
                            <input aria-label="enter Password" className="bg-gray-200 border rounded focus: outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2" type={passwordType}
                                onChange={handlePasswordChange}
                                value={passwordInput} />
                            <div className="absolute right-0 mt-2 mr-3 cursor-pointer" onClick={togglePassword}>
                                {passwordType === "password" ? <BsEyeSlash size={20} /> : <BsEye size={20} />}
                            </div>
                        </div>
                    </div>
                    <div className="mt-8">
                        <button role="button" aria-label="create my account" onClick={handleClick} className="focus: ring-2 focus:ring-offset-2 focus:ring-gray-800 text-sm font-semibold leading-none text-white focus:outline-none bg-gray-800 border rounded hover:bg-gray-700 py-4 w-full">
                            {btnloading ? <ClipLoader size={20} color='#fff' /> : 'Sign up'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sigup;
