import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="h-[100vh] justify-between items-center flex bg-[#000] py-[50px] md:flex-row flex-col-reverse mt-[90px] md:mt-0">
            <div className="bg-cover bg-bg-homepage w-[50%] ">
                <img
                    src="https://www.leagueoflegends.com/static/player-guide-map-1440-32575baa2f8d2b2bfd5cfd07e11d1361.png"
                    alt=""
                />
            </div>
            <div className="flex justify-center flex-col items-center gap-y-[50px] flex-1 text-white px-8">
                <div className="">
                    <div className="text-center font-bold">
                        <h2 className=" text-[50px] italic">START YOUR</h2>
                        <h2 className="text-[120px] mt-[-16px] italic">LEGEND</h2>
                    </div>

                    <p className="text-center italic font-medium">
                        New to League? Get a rundown on the basics for the most popular game mode.
                    </p>
                </div>
                <div className="flex items-center gap-x-5 uppercase" aria-label="button-combination ">
                    <Link
                        to="/champions"
                        className="text-[24px] inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg h-[50px] hover:opacity-80"
                    >
                        Get started
                    </Link>
                    <button className="text-[24px] inline-flex items-center justify-center uppercase px-8 py-4 font-sans font-semibold tracking-wide text-blue-500 border border-blue-500 rounded-lg h-[50px] hover:bg-blue-500 hover:text-white transition-colors">
                        Play for free
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Home;
