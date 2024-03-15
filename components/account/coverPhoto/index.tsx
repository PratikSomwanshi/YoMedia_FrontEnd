"use client";
import Image from "next/image";
import React from "react";
import { FaEdit } from "react-icons/fa";

import ProfilePhoto from "../profilePhoto";

function CoverPhoto() {
    function base64(file: File) {
        return new Promise<string | ArrayBuffer | null>((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });
    }

    const [buffer, setBuffer] = React.useState<string | ArrayBuffer | null>("");

    async function handleFileChange(
        event: React.ChangeEvent<HTMLInputElement>
    ) {
        const files = event.target.files;
        if (!files) return;
        const file = files[0];
        if (file) {
            return await base64(file).then((res) => setBuffer(res));
        }
    }

    return (
        <div className="h-36 relative">
            <div className="h-full">
                <Image
                    src={buffer ? (buffer as string) : "/logo.svg"}
                    alt="cover_photo"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover rounded-md p-2 border-2 shadow-sm"
                />
                <span className="absolute top-[5%] right-[1%]">
                    <label
                        htmlFor="cover"
                        className="flex border-2 justify-center items-center px-2 py-1 rounded-md hover:bg-slate-100 bg-white cursor-pointer">
                        <input
                            type="file"
                            id="cover"
                            className="hidden"
                            onChange={handleFileChange}
                        />
                        <FaEdit />
                        <span>edit </span>
                    </label>
                </span>
            </div>

            <ProfilePhoto />
        </div>
    );
}

export default CoverPhoto;
