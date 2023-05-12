import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

function Champion({ data, handleAddCollection }) {
    const handleShowDetail = () => {
        localStorage.setItem("dataChampionCurrent", JSON.stringify(data.id));
    };

    return (
        <li className="mb-[20px] border-[1px] bg-[#000] text-white flex items-center flex-col rounded-[12px] overflow-hidden">
            <div className="w-full flex-1 relative group-img">
                <div className="absolute top-0 z-[9] font-medium left-[50%]  translate-x-[-50%]  flex-col  w-full group-button hidden">
                    <p className="w-full bg-[#000] bg-opacity-60 p-4 min-h-[300px]">{data.blurb}</p>
                    <div
                        className=" items-center flex  justify-center  flex-col mt-4 gap-y-4"
                        aria-label="button-combination "
                    >
                        <button
                            className="text-[16px] inline-flex items-center justify-center px-6 py-2 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg h-[40px] hover:opacity-90"
                            onClick={() => handleAddCollection(data)}
                        >
                            Add Collection
                        </button>
                        <Link
                            to={`/champion-detail/${data.id}`}
                            onClick={handleShowDetail}
                            className="text-[16px] inline-flex items-center justify-center px-6 py-2 font-sans font-semibold tracking-wide text-blue-500 border border-blue-500 rounded-lg h-[40px] hover:bg-blue-500 hover:text-white transition-colors"
                        >
                            Learn more
                        </Link>
                    </div>
                </div>
                <img
                    src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${data.id}_0.jpg`}
                    alt=""
                    className="w-full h-full object-cover  transition-transform "
                />
            </div>
            <div className="p-[24px] text-center">
                <h2 className="text-[30px] font-semibold">{data.name}</h2>
                <p className="line-clamp-1 font-medium">{data.title}</p>
            </div>
        </li>
    );
}

export default Champion;
