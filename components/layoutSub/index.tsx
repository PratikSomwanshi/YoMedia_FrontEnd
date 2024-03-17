"use client";
import React, { ReactNode } from "react";
import NavbarMain from "../navbarMain";
import SideNavbar from "../sideNavbar";
import { usePathname } from "next/navigation";
import Toggler from "../sideNavbarToggler";

function Layout({ children }: { children: ReactNode }) {
    const path = usePathname();

    if (path === "/auth/register" || path === "/auth/login") {
        return <>{children}</>;
    }

    return (
        <div className="">
            {/* <NavbarMain /> */}
            <section className="block c700:flex container gap-4 ">
                <div className=" ">
                    <div className="hidden c900:block px-6 py-5 text-lg rounded-md cursor-pointer">
                        YoMedia
                    </div>
                    <div className="c900:hidden px-6 py-5 text-lg rounded-md cursor-pointer bg-red-300 text-center">
                        <Toggler />
                    </div>
                    <div>
                        <SideNavbar />
                    </div>
                </div>
                {children}
            </section>
        </div>
    );
}

export default Layout;
