import React from "react";
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import { RiotGame } from "../../svg";

function Footer() {
    return (
        <div className="bg-[#111] border-[#343434] border-t-2 text-white py-[24px] flex justify-center">
            <div className="flex flex-col items-center gap-[40px]">
                <div className="flex gap-5">
                    <div className="p-3 bg-[#343434] cursor-pointer hover:bg-[#444] transition-colors rounded-[20px] text-[1.2rem]">
                        <BsFacebook />
                    </div>
                    <div className="p-3 bg-[#343434] cursor-pointer hover:bg-[#444] transition-colors rounded-[20px] text-[1.2rem]">
                        <BsTwitter />
                    </div>
                    <div className="p-3 bg-[#343434] cursor-pointer hover:bg-[#444] transition-colors rounded-[20px] text-[1.2rem]">
                        <BsInstagram />
                    </div>
                    <div className="p-3 bg-[#343434] cursor-pointer hover:bg-[#444] transition-colors rounded-[20px] text-[1.2rem]">
                        <BsGithub />
                    </div>
                </div>
                <div className="text-[#fff]">
                    <RiotGame />
                </div>
                <p className="text-[#7e7e7e] md:max-w-[650px] max-w-[400px] text-center">
                    ™ & © 2023 Riot Games, Inc. League of Legends and all related logos, characters, names and
                    distinctive likenesses thereof are exclusive property of Riot Games, Inc. All Rights Reserved.
                </p>
                <div className="flex md:gap-8 font-semibold uppercase cursor-pointer gap-2 md:flex-row items-center text-center flex-col">
                    <span className="px-3 py-1 bg-transparent rounded-[6px] hover:bg-[#343434] transition-colors duration-500">
                        Privacy Notice
                    </span>
                    <span className="px-3 py-1 bg-transparent rounded-[6px] hover:bg-[#343434] transition-colors duration-500">
                        Terms of Service
                    </span>
                    <span className="px-3 py-1 bg-transparent rounded-[6px] hover:bg-[#343434] transition-colors duration-500">
                        Cookie Policy
                    </span>
                    <span className="px-3 py-1 bg-transparent rounded-[6px] hover:bg-[#343434] transition-colors duration-500">
                        Company Information
                    </span>
                    <span className="px-3 py-1 bg-transparent rounded-[6px] hover:bg-[#343434] transition-colors duration-500">
                        Cookie Preferences
                    </span>
                </div>
                <p className="text-[#7e7e7e]">
                    Made possible by{" "}
                    <a href="https://www.facebook.com/DoanHaiDuy.Profile/" target="_blank" rel="noreferrer">
                        Doan Hai Duy
                    </a>
                </p>
            </div>
        </div>
    );
}

export default Footer;
