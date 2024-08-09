import {Link} from "react-router-dom";

export function Register() {
    return (
        <div className="flex items-center justify-center h-screen w-full px-5 sm:px-0">
            <div className="flex bg-white rounded-lg shadow-lg border overflow-hidden max-w-sm lg:max-w-4xl w-full">
                <div
                    className="hidden md:block lg:w-1/2 bg-cover bg-blue-700"
                    style={{
                        backgroundImage: `url(https://www.tailwindtap.com//assets/components/form/userlogin/login_tailwindtap.jpg)`,
                    }}
                ></div>
                <div className="w-full p-8 lg:w-1/2">
                    <p className="text-xl text-gray-600 text-center">Create an account</p>
                    <div className="mt-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Email Address
                        </label>
                        <input
                            className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
                            type="email"
                            required
                        />
                    </div>
                    <div className="mt-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Password
                        </label>
                        <input
                            className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
                            type="password"
                            required
                        />
                    </div>
                    <div className="mt-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Confirm Password
                        </label>
                        <input
                            className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
                            type="password"
                            required
                        />
                    </div>
                    <div className="mt-8">
                        <button className="bg-blue-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-blue-600">
                            Sign Up
                        </button>
                    </div>
                    <div className="mt-4 flex items-center w-full text-center">
                        <Link
                            to="/"
                            className="text-xs text-gray-500 capitalize text-center w-full"
                        >
                            Already have an account?
                            <span className="text-blue-700"> Login</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}