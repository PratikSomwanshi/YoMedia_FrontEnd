import Image from "next/image";
import React from "react";

const arr = new Array(9).fill(0);

function SearchUsers() {
    return (
        <>
            <div className="flex gap-4 items-center">
                <div className="h-14 w-14 rounded-full bg-red-300">
                    <Image
                        src="/logo.svg"
                        alt="user"
                        width={100}
                        height={100}
                        className="h-full rounded-full w-full object-cover"
                    />
                </div>
                <div>
                    <span>User_Name</span>
                </div>
            </div>
            <div>
                <span>Followers : xxxx</span>
            </div>
        </>
    );
}

export default SearchUsers;
