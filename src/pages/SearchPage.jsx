import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";

const SearchPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate(); // Initialize useNavigate

    const handleSearch = (e) => {
        e.preventDefault();
        navigate(`/search?query=${searchQuery}`); // Use navigate instead of Navigate
        console.log("Search initiated for: ", searchQuery);
    };

    return (
        <div className="flex justify-center p-5">
            <form onSubmit={handleSearch} className="flex">
                <input
                    type="text"
                    placeholder="Search for eBooks"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="p-2 rounded-l-lg border border-yellow-400 text-black outline-none"
                />
                <button
                    type="submit"
                    className="bg-yellow-500 p-2 rounded-r-lg hover:bg-yellow-400"
                >
                    Search
                </button>
            </form>
            
        </div>
    );
}

export default SearchPage;
