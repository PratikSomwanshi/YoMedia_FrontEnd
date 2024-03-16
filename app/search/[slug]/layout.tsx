"use client";
import useStore from "@/store";
import React from "react";

function layout({ children }: { children: React.ReactNode }) {
    const { searchToggle, setSearchToggle } = useStore();

    return (
        <section className="flex justify-center w-full ">
            <div className="bg-slate-100 container py-2 ml-2 mr-2 mt-2 w-full h-[44rem]">
                <div className="flex items-center justify-around h-10 border border-black">
                    <div
                        className={`border-black h-full border-r w-1/2 flex justify-center items-center ${
                            searchToggle && "bg-red-500"
                        }`}
                        onClick={setSearchToggle}>
                        POST's
                    </div>
                    <div
                        className={`w-1/2 h-full flex justify-center items-center ${
                            !searchToggle && "bg-red-500"
                        }`}
                        onClick={setSearchToggle}>
                        USER's
                    </div>
                </div>
                {children}
            </div>
        </section>
    );
}

export default layout;
