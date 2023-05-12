import React, { useState } from "react";

function SkinItem({ skin, name, setShowModal, onClick }) {
    return (
        <div key={skin.id}>
            <div className="group  mx-5 rounded-[12px] overflow-hidden">
                <img
                    src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${name}_${skin.num}.jpg
    `}
                    alt=""
                    className="w-full cursor-pointer object-cover hover:scale-110 transition-transform mb-3"
                    onClick={() => {
                        setShowModal(true);
                        onClick(skin);
                    }}
                />
            </div>
            <h2 className="text-[1.4rem] mt-[12px] font-bold text-center line-clamp-2">{skin.name}</h2>
        </div>
    );
}

export default SkinItem;
