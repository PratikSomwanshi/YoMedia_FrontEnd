import Link from "next/link";
import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";

function GoogleGithubButtons() {
    return (
        <div className="flex w-full h-16 justify-around items-center mt-4">
            <div className="flex border-2 rounded-md shadow-sm">
                <Link
                    href="#"
                    className="bg-white px-4 py-2 flex justify-between items-center gap-2 rounded-md">
                    <span>Github</span> <FaGithub />
                </Link>
            </div>
            <div className="flex border-2 rounded-md shadow-sm">
                <Link
                    href="#"
                    className="bg-white px-4 py-2 flex justify-between items-center gap-2 rounded-md">
                    <span>Google</span> <FaGoogle />
                </Link>
            </div>
        </div>
    );
}

export default GoogleGithubButtons;
