import React from "react";

const Header: React.FC = () => {
    return (
        <header className="bg-white border-b">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-6">
                    {/* logo */}
                    <div className="flex items-center space-x-3">
                        <a href="" className="flex items-center">
                            <span className="inline-block w-10 h-10 bg-linear-to-br from-indigo-600 to-pink-500 rounded-md mr-2" aria-hidden/>
                            <span className=" font-semibold text-xl">LuxStay</span>
                        </a>

                        {/* navbar */}
                        <nav className=" hidden sm:flex space-x-4 text-sm text-gray-600">
                            <a className="hover: text-gray-900" href="#">Rooms</a>
                            <a className="hover: text-gray-900" href="#">Villas</a>
                            <a className="hover: text-gray-900" href="#">Cabins</a>
                            <a className="hover: text-gray-900" href="#">Safari</a>
                        </nav>
                    </div>

                    {/* search and auth */}
                    <div className="flex-1 flex justify-center pc-4">
                        <label htmlFor="search" className="sr-only">Search properties</label>
                        <div className="w-full max-w-md">
                            <input type="search" id="search" placeholder="Search city, state or property name..." className=" w-full border rounded-full px-4 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-300 " aria-label="Search property" />

                        </div>
                    </div>

                    <div className="flex items-center space-x-3">
                        <a className="text-sm px-3 py-1 rounded-md hover:bg-gray-50" href="#">Sign in</a>
                        <a className="bg-indigo-600 text-white px-4 py-1.5 rounded-md text-sm hover:bg-indigo-700" href="#">Sign up</a>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header