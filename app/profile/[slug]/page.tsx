import SearchCard from "@/components/search/searchCard";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const arr = new Array(9).fill(0);

function page({ params: { slug } }: { params: { slug: string } }) {
    return (
        <section className="w-full px-8 py-4">
            <div className="bg-slate-200 w-full h-48 rounded-md relative">
                <Image
                    src="/logo.svg"
                    alt="Picture of the author"
                    className="bg-slate-100 h-full w-full object-cover"
                    width={500}
                    height={500}
                />
                <div className="h-40 w-40 absolute top-[40%] right-[5%]">
                    <Image
                        src="/logo.svg"
                        alt="Picture of the author"
                        width={500}
                        height={500}
                        className="bg-slate-200 h-full w-full object-cover rounded-full"
                    />
                </div>
            </div>
            <div className="px-8 py-4">
                <div className="flex gap-4">
                    <h1 className="text-3xl font-bold">{slug}</h1>
                    <div className="flex gap-2">
                        <Link href="/account">
                            <Button>Edit Profile</Button>
                        </Link>
                    </div>
                </div>
                <div className="flex mt-4 gap-10">
                    <div>
                        <h3>0 posts</h3>
                    </div>
                    <div>
                        <h3>0 followers</h3>
                    </div>
                    <div>
                        <h3>0 following</h3>
                    </div>
                </div>
                <div className="mt-4">
                    <h3 className="text-lg">user_name</h3>
                </div>
            </div>
            <div className="h-auto border-b">
                <div className=" w-full h-10 flex justify-center items-center">
                    <h3>POST's</h3>
                </div>
                <div className="flex justify-center">
                    <div className="flex flex-wrap gap-4 h-auto px-6 py-4">
                        {arr.map(() => {
                            return <SearchCard />;
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default page;
