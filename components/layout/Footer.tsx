import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-50 border-t mt-12">
            <div className="mx-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
                <div className=" flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                    <div>
                        <h3 className=" text-lg font-semibold"> LuxStay</h3>
                        <p className="text-sm text-gray-600">The best places, trusted hosts.</p>

                    </div>

                    <div className="flex space-x-6">
                        <a className="text-sm text-gray-600 hover:text-gray-900" href="#">About</a>
                        <a className="text-sm text-gray-600 hover:text-gray-900" href="#">Contact</a>
                        <a className="text-sm text-gray-600 hover:text-gray-900" href="#">Terms</a>
                        <a className="text-sm text-gray-600 hover:text-gray-900" href="#">Privacy</a>
                    </div>
                </div>
                <div className="mt-6 text-sm text-gray-500">
                    &copy; {new Date().getFullYear()} LuxStay. All rights reserved.
                </div>
            </div>
        </footer>
    )
}

export default Footer;