import React from "react";

export default function Footer() {
    return (
        <footer className="w-64 bg-gray-100 h-screen fixed right-0 top-20 border-r  scrollbar-none border-gray-200 px-2 overflow-scroll">
            <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mb-8">
                {/* First Block - Sale */}
                <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-between size-60">
                    <div>
                        <h2 className="text-lg font-bold text-gray-800">Summer Big</h2>
                        <h1 className="text-3xl font-extrabold text-yellow-500">SALE</h1>
                        <p className="text-gray-600 text-sm">Limited Time Offer Until Dec 31, 2025</p>
                    </div>
                    <div className="text-right">
                        <p className="text-gray-400 line-through">$300</p>
                        <p className="text-2xl font-bold text-green-600">$29 Only!</p>
                    </div>
                </div>

                {/* Second Block - Advertise */}
                <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center size-60">
                    <img
                        src="/reddit-icon-svgrepo-com.svg"
                        alt="Reddit"
                        className="w-12 h-12 mb-4"
                    />
                    <h2 className="text-lg font-bold text-gray-800">Advertise on Reddit</h2>
                    <button className="mt-4 px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600">
                        GET STARTED
                    </button>
                </div>
            </div>

            <div className="container mx-auto px-2">
                {/* Footer Links */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 bottom-0 mb-8 text-xs text-gray-600">
                    <a href="#" className="hover:text-gray-800">
                        About
                    </a>
                    <a href="#" className="hover:text-gray-800">
                        Careers
                    </a>
                    <a href="#" className="hover:text-gray-800">
                        Reddit Hits
                    </a>
                    <a href="#" className="hover:text-gray-800">
                        Advertise
                    </a>
                    <a href="#" className="hover:text-gray-800">
                        Help
                    </a>
                    <a href="#" className="hover:text-gray-800">
                        Reddit Gold
                    </a>
                    <a href="#" className="hover:text-gray-800">
                        Press
                    </a>
                    <a href="#" className="hover:text-gray-800">
                        Blog
                    </a>
                    <a href="#" className="hover:text-gray-800">
                        Reddit App
                    </a>
                    <a className="text-sm text-gray-500">
                        © 2020
                    </a>
                    <a href="#" className="hover:text-gray-800">
                        Privacy
                    </a>
                    <a href="#" className="hover:text-gray-800">
                        Terms
                    </a>
                </div>

                {/* Branding */}

            </div>
        </footer>
    );
}
