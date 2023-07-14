import React, { useState } from "react";
import { FcGoogle } from 'react-icons/fc';
import { BsEyeSlash, BsEye } from 'react-icons/bs';
import { Link, useLocation } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import axios from "axios";

function Login() {
    const location = useLocation();
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



    // Handle Submit
    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const TargetEmail = e.target.email.value;
            const TargetPass = e.target.password.value;

            const url = 'https://dummyjson.com/users';
            const response = await axios.get(url);
            const users = Array.isArray(response.data.users) ? response.data.users : []; // Ensure users is an

            const foundUser = users.find((user) => user.email === TargetEmail && user.password === TargetPass);
            if (foundUser) {
                alert('Logged in Successfully!');
            } else {
                alert('Invalid Credentials');
            }
        } catch (error) {
            console.log('An error occurred:', error);
        }

    }

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
    console.log(location.pathname);
    return (
        <div className="h-full w-full px-4 my-10 ">
            <div className="flex flex-col items-center justify-center ">
                <div className="bg-white shadow-xl rounded lg:w-1/3  md:w-1/2 w-full p-10  ">
                    <p tabIndex={0} role="heading" aria-label="Login to your account" className="text-2xl font-extrabold leading-6 text-gray-800">
                        <span className="">Unlock your door to</span> <br />
                        {/* <span className="bg-gradient-to-tl from-green-400 to-indigo-900 bg-clip-text text-transparent uppercase text-2xl">possibilities.</span> */}
                    </p>
                    <p className="text-sm mt-4 font-medium leading-none text-gray-500">
                        Don't have an account?{" "}
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
                    <form onSubmit={handleSubmit}>
                        <div>
                            <lable className="text-sm font-medium leading-none text-gray-800">Email</lable>
                            {/* // email */}
                            <input aria-label="enter email adress" type="email" className="bg-gray-200 border rounded focus: outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2" />
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
                                {btnloading ? <ClipLoader size={20} color='#fff' /> : 'Login'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
