import React, { useEffect, useState } from "react";
import Abilities from "../Components/Abilities/Abilities";
import Skins from "../Components/Skins/Skins";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";

function ChampionDetail() {
    const [champion, setChampion] = useState({});
    const dataChampionCurrent = JSON.parse(localStorage.getItem("dataChampionCurrent"));
    const fetchApi = async (id) => {
        await fetch(`https://ddragon.leagueoflegends.com/cdn/13.9.1/data/en_US/champion/${id}.json`)
            .then((Response) => Response.json())
            .then((newData) => setChampion(newData.data[id]))
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        fetchApi(dataChampionCurrent);
    }, [dataChampionCurrent]);
    console.log(champion);
    return (
        <div className="mt-[90px] ">
            <div
                className="w-full h-[120vh] lg:h-[140vh]  bg-cover text-[#fff] relative "
                style={{
                    backgroundImage: `url('http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg')`,
                }}
            >
                <Link
                    to={"/champions"}
                    className="fixed top-[100px] left-[12px] gap-2  z-20 inline-flex items-center justify-center px-2 py-4 text-sm font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg h-[40px]"
                >
                    <AiOutlineArrowLeft className="font-bold" />
                    All Champion
                </Link>
                <div
                    className="absolute inset-0 backdrop-filter backdrop-blur-md "
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
                >
                    <div className="flex justify-center items-center mt-12 flex-col ">
                        <div className="lg:w-[850px] md:w-[700px] sm:w-[580px] w-[90%] overflow-hidden rounded-[16px]">
                            <img
                                className="object-cover hover:scale-125 transition-transform w-full"
                                src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`}
                                alt=""
                            />
                        </div>
                        <div className="text-center translate-y-[-100px] pointer-events-none">
                            <h4 className="text-[2rem] font-semibold italic uppercase ">{champion.title}</h4>
                            <h1 className="text-[5rem] font-bold italic mt-[-12px] uppercase">{champion.name}</h1>
                        </div>
                        <div className="flex w-[80%] mx-auto border-[2px] py-12 items-center min-h-[251px]">
                            <div className="text-center w-[50%] p-4">
                                <span className="text-blue-700 font-bold text-[2rem]">Role</span>
                                <div className="font-bold flex gap-4 justify-center ">
                                    {champion?.tags?.map((role, index) => (
                                        <span key={index}>{role}</span>
                                    ))}
                                </div>
                            </div>
                            <div className="w-[50%] p-4 line-clamp-5">
                                <p>{champion.lore}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="detail py-[40px] text-[#fff]">
                <div className="p-6 relative z-10">
                    <h2 className="text-[50px] uppercase italic text-center font-bold">ABILITIES</h2>
                    <Abilities className="backdrop-blur-2xl" spells={champion.spells} />
                </div>
                <div className="p-6 relative z-10 overflow-hidden">
                    <h2 className="text-[50px] uppercase italic text-center font-bold">Skins</h2>
                    <Skins skins={champion.skins} name={champion.id} />
                </div>
            </div>
        </div>
    );
}

export default ChampionDetail;
