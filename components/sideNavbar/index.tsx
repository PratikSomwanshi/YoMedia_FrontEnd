"use client";

import useStore from "@/store";
import Image from "next/image";
import Link from "next/link";

function SideNavbar() {
    const { toggle, toggler } = useStore();

    const hide =
        "hidden  h-[calc(100vh-4rem)] c900:flex flex-col justify-between";
    const unHide = " h-[calc(100vh-4rem)] flex flex-col justify-between";

    return (
        <section className={toggle ? hide : unHide}>
            <div className="flex flex-col gap-1 mt-[0.5rem]">
                <Link
                    href="/post"
                    className="underline underline-offset-2 font-medium ">
                    <div className="hover:bg-slate-100 px-6 p-6 text-lg border border-black border-t-0 rounded-md cursor-pointer">
                        POST
                    </div>
                </Link>
                <Link
                    href="/"
                    className="underline underline-offset-2 font-medium ">
                    <div className="hover:bg-slate-100 px-6 p-6 text-lg border border-black  border-t-0 rounded-md cursor-pointer">
                        Home
                    </div>
                </Link>
                <Link
                    href="/post"
                    className="underline underline-offset-2 font-medium ">
                    <div className="hover:bg-slate-100 px-6 p-6 text-lg border border-black  border-t-0 rounded-md cursor-pointer">
                        Messages
                    </div>
                </Link>
            </div>
            <Link href="/post">
                <div className="min-w-[16rem] hover:bg-slate-100 px-6 p-6 text-lg border border-black  border-t-0 rounded-md flex gap-4 items-center mb-[0.5rem]">
                    <Image
                        src="/aapp.jpg"
                        alt="something"
                        width={40}
                        height={40}
                        className="rounded-full"
                    />
                    <h3>hello, user name</h3>
                </div>
            </Link>
        </section>
    );
}

export default SideNavbar;
