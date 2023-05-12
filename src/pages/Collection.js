import React, { useContext, useEffect } from "react";
import { AppContext } from "../store";
import { deleteCollection } from "../store/action";
import Search from "../Components/Search/Search";
import { Link } from "react-router-dom";

function Collection(props) {
    const [state, dispatch] = useContext(AppContext);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
    const handleDelete = (payload) => {
        dispatch(deleteCollection(payload));
    };

    const handleShowDetail = (data) => {
        localStorage.setItem("dataChampionCurrent", JSON.stringify(data.id));
    };
    return (
        <div className="px-8 page-collection min-h-[100vh] py-[50px]">
            <div className=" h-[90px]"></div>
            <div className="flex justify-center flex-col items-center gap-y-[50px] flex-1 text-gray-300 px-8">
                <div className="flex gap-[20px] flex-col bg-transparent backdrop-blur-sm p-4 rounded-[25px]">
                    <div className="text-center font-bold ">
                        <h2 className=" text-[50px] mb-[20px] mt-[50px] italic">SLAY WITH</h2>
                        <h2 className="text-[120px] mt-[-16px] italic">STYLE</h2>
                    </div>

                    <p className="text-center italic font-medium">
                        Make it personal by changing up the look of your favorite champions with skins.
                    </p>
                </div>
            </div>
            <Search isCollection />
            {state.collection.length > 0 ? (
                <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mt-[100px]">
                    {state.collection.map((champ, index) => (
                        <div
                            key={index}
                            className="flex flex-col flex-1 bg-transparent rounded-[30px] group hover:shadow-xl hover:bg-white transition-all duration-500 border-[2px] border-gray-300 backdrop-blur-xl"
                        >
                            <Link
                                to={`/champion-detail/${champ.payload.id}`}
                                onClick={() => {
                                    handleShowDetail(champ.payload);
                                }}
                            >
                                <img
                                    src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champ.payload.id}_0.jpg`}
                                    alt=""
                                    className="scale-90 group-hover:scale-100 transition-all cursor-pointer duration-500 rounded-[30px] group-hover:rounded-b-none"
                                />
                            </Link>
                            <div className="p-4 px-8 flex items-center justify-between text-white ">
                                <h2 className="text-[2.2rem] font-bold italic   group-hover:text-blue-600">
                                    {champ.payload.name}
                                </h2>
                                <button
                                    onClick={() => handleDelete(index)}
                                    className="rounded-lg font-bold bg-blue-100 text-blue-500 px-6 py-3 group-hover:text-blue-800 group-hover:bg-white group-hover:shadow-2xl  group-hover:ring-2 "
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <h2 className="text-[40px] mb-[20px] italic text-white text-center font-bold mt-[90px]">
                    You don't have any champions in your collection yet
                </h2>
            )}
        </div>
    );
}

export default Collection;
