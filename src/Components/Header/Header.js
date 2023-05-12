import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Logo } from "../../svg";

function Header() {
    return (
        <div className="flex bg-[#000] text-gray-200 h-[90px] items-center justify-between lg:px-[200px] px-[40px]  fixed left-0 right-0 top-0 z-20">
            <Link to="/" className="px-[12px]">
                <Logo />
            </Link>

            <ul className="flex gap-10 text-[16px] sm:text-[28px] font-bold ">
                <li className="hover:text-blue-700 ">
                    <NavLink to="/">Home</NavLink>
                </li>
                <li className="hover:text-blue-700 ">
                    <NavLink to="/champions">Champions</NavLink>
                </li>
                {/* <li className="hover:text-blue-700 ">
                    <NavLink to="/champion-detail/:id">ChampionDetail</NavLink>
                </li> */}
                <li className="hover:text-blue-700 ">
                    <NavLink to="/collection">Collection</NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Header;
