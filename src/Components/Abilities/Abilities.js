import React from "react";

function Abilities({ spells, className }) {
    console.log(spells);
    return (
        <div className="grid lg:grid-cols-4 md:grid-cols-2 mt-4 p-4 gap-6 grid-cols-1 ">
            {spells
                ? spells.map((spell) => (
                      <div
                          className={
                              className +
                              " text-center p-3 text-[#fff] rounded-[20px] overflow-hidden sm:block flex items-center gap-5"
                          }
                          key={spell.id}
                      >
                          <img
                              src={`https://ddragon.leagueoflegends.com/cdn/13.9.1/img/spell/${spell.id}.png`}
                              alt=""
                              className="mx-auto object-cover w-[64px] h-[64px]"
                          />
                          <div className="text-left sm:text-center">
                              <h2 className="font-semibold my-4 text-[1.6rem]">{spell.name}</h2>
                              <p className="text-[1.2rem] ">{spell.description}</p>
                          </div>
                      </div>
                  ))
                : null}
        </div>
    );
}

export default Abilities;
