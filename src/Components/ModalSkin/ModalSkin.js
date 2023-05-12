import React, { Fragment } from "react";

function ModalSkin({ img, setShowModal }) {
    return (
        <Fragment>
            <div className="w-[70%] h-full mx-auto z-[51] absolute top-[50%] left-[50%] rounded-[12px] overflow-hidden translate-x-[-50%] translate-y-[-50%] ">
                <span
                    className="text-white absolute top-0 right-4 rounded-[12px] text-[3rem] cursor-pointer"
                    onClick={() => setShowModal(false)}
                >
                    &times;
                </span>
                <img src={img} alt="" className="w-full h-full object-cover rounded-[12px]" />
            </div>
        </Fragment>
    );
}

export default ModalSkin;
