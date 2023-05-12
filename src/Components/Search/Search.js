import React, { useContext, useRef, useState } from "react";
import { AppContext } from "../../store";
import { searchChamp } from "../../store/action";

function Search({ isCollection }) {
    const [inputSearch, setInputSearch] = useState("");
    const [state, dispatch] = useContext(AppContext);

    const handleSearch = () => {
        !isCollection && dispatch(searchChamp(inputSearch));
        setInputSearch("");
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleSearch();
        }
    };
    return (
        <div>
            <div className="mt-9 flex w-[60%] mx-auto items-center p-6 space-x-6  bg-black bg-opacity-30 rounded-xl shadow-lg hover:shadow-xl transform  transition duration-500">
                <div className="flex flex-1 bg-gray-100 p-4 w-72 space-x-4 rounded-lg">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 opacity-30"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                    <input
                        onChange={(e) => setInputSearch(e.target.value)}
                        value={inputSearch}
                        onKeyDown={handleKeyDown}
                        className="w-full bg-gray-100 outline-none"
                        type="text"
                        placeholder="Champion name or keyword..."
                    />
                </div>
                <div className="flex py-3 px-4 rounded-lg text-gray-500 font-semibold cursor-pointer">
                    <span>All</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
                <div
                    className="bg-blue-600 py-3 px-5 text-white font-semibold rounded-lg hover:shadow-lg transition duration-3000 cursor-pointer"
                    onClick={handleSearch}
                >
                    <span>Search</span>
                </div>
            </div>
        </div>
    );
}

export default Search;
