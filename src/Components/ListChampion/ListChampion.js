import React, { useContext, useEffect, useState } from "react";
import Champion from "../Champion/Champion";
import { AppContext } from "../../store";
import { addToCollection } from "../../store/action";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ListChampion() {
    const [listChampions, setListChampions] = useState([]);
    const [moreChamp, setMoreChamp] = useState(20);
    const [state, dispatch] = useContext(AppContext);

    const fetchApi = async (moreChamp, keySearch) => {
        await fetch("https://ddragon.leagueoflegends.com/cdn/13.9.1/data/en_US/champion.json")
            .then((response) => response.json())
            .then((data) => {
                const champions = Object.values(data.data);
                let filteredArray;
                if (state.keySearch !== "") {
                    filteredArray = champions.filter((obj) =>
                        obj.name.toLowerCase().replace(/\s/g, "").includes(keySearch.toLowerCase().replace(/\s/g, ""))
                    );
                } else {
                    filteredArray = champions;
                }
                setListChampions(filteredArray.slice(0, moreChamp));
            })
            .catch((error) => {
                console.error("Đã xảy ra lỗi:", error);
            });
    };

    const handleSeeMore = () => {
        if (moreChamp >= 160) {
            console.log("full");
        } else {
            setMoreChamp((prev) => prev + 20);
        }
    };

    const handleSeeLess = () => {
        if (moreChamp > 20) {
            setMoreChamp((prev) => prev - 20);
        } else {
            console.log("full");
        }
    };

    const handleAddCollection = async (payload) => {
        const targetId = payload.id;
        if (state.collection.some((item) => item.payload.id === targetId)) {
            await toast.error(`${payload.name} is already in the collection!`, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        } else {
            dispatch(addToCollection({ payload }));
            await toast.success(`Successfully added ${payload.name} to the collection!`, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    };

    useEffect(() => {
        fetchApi(moreChamp, state.keySearch);
    }, [moreChamp, state.keySearch]);
    return (
        <div className="mt-[40px] p-4 ">
            <div className="text-left">
                <ToastContainer
                    position="bottom-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
                <ToastContainer />
            </div>
            <ul className="grid 2xl:grid-cols-6 lg:grid-cols-4 xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[40px]">
                {listChampions.map((champ) => (
                    <Champion key={champ.id} data={champ} handleAddCollection={handleAddCollection} />
                ))}
            </ul>
            <div className="flex justify-center gap-4">
                <div className="text-center">
                    <button
                        onClick={handleSeeMore}
                        className="inline-flex items-center text-[12px] hover:opacity-90  justify-center px-3 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg h-[30px]"
                    >
                        See more
                    </button>
                </div>
                <div className="text-center">
                    <button
                        onClick={handleSeeLess}
                        className="inline-flex items-center text-[12px] hover:opacity-90  justify-center px-3 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg h-[30px]"
                    >
                        See less
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ListChampion;
