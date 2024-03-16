import useStore from "@/store";
import Image from "next/image";
import React from "react";
import { FaEdit } from "react-icons/fa";

function ProfilePhoto() {
    const [buffers, setBuffers] = React.useState<string | ArrayBuffer | null>(
        ""
    );

    function base64(file: File) {
        return new Promise<string | ArrayBuffer | null>((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });
    }

    async function handleProfileChange(
        event: React.ChangeEvent<HTMLInputElement>
    ) {
        const files = event.target.files;
        if (!files) return;
        const file = files[0];
        if (file) {
            await base64(file).then((res) => setBuffers(res));
        }
    }

    const { setProfile } = useStore();

    return (
        <div className="bg-red-300 z-10 h-32 w-32 rounded-full  absolute top-[50%] right-[7%]">
            <Image
                src={buffers ? (buffers as string) : "/logo.svg"}
                alt="Profile"
                width={300}
                height={300}
                className="h-full rounded-full w-full object-cover overflow-hidden"
            />
            <span className="absolute top-[80%] right-[-10%]">
                <label
                    htmlFor="profile"
                    className="flex border-2 justify-center items-center px-2 py-1 rounded-md hover:bg-slate-100 bg-white cursor-pointer">
                    <input
                        type="file"
                        id="profile"
                        className="hidden"
                        onChange={(e) => {
                            handleProfileChange(e);
                            if (e.target.files && e.target.files[0])
                                setProfile(e.target.files[0]);
                        }}
                    />
                    <FaEdit />
                    <span>edit </span>
                </label>
            </span>
        </div>
    );
}

export default ProfilePhoto;
