import SearchBox from "@/components/searchBox";
import React from "react";

function layout({ children }: { children: React.ReactNode }) {
    return (
        <section className="w-full">
            <div className="w-full mobile:w-3/4  m-auto h-16 flex justify-center items-center border-b">
                <SearchBox />
            </div>
            {children}
        </section>
    );
}

export default layout;
