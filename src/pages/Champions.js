import React, { useEffect, useState } from "react";
import ListChampion from "../Components/ListChampion/ListChampion";
import Search from "../Components/Search/Search";

function Champions() {

    
    
    return (
        <div className="page-champions mt-[90px] py-[50px]">
            <div className="flex justify-center flex-col items-center gap-y-[50px] flex-1 text-white px-8">
                <div className="flex  gap-[20px] flex-col">
                    <div className="text-center font-bold">
                        <h2 className=" text-[50px] mb-[20px] mt-[50px] italic">CHOOSE YOUR</h2>
                        <h2 className="text-[120px] mt-[-16px] italic">CHAMPION</h2>
                    </div>

                    <p className="text-center italic font-medium">
                        With more than 140 champions, you’ll find the perfect match for your playstyle. Master one, or
                        master them all.
                    </p>
                </div>
            </div>
            <Search />
            <h2 className="text-center font-bold">
                <ListChampion />
            </h2>
        </div>
    );
}

export default Champions;
