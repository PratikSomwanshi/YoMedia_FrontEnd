import Image from "next/image";
import React from "react";

function Loading() {
    return (
        <div className="flex justify-center items-center h-screen animate-pulse">
            <Image src="/logo.svg" alt="loading" width={200} height={200} />
        </div>
    );
}

export default Loading;
