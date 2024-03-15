"use client";
import React, { ReactNode } from "react";
import NavbarMain from "../navbarMain";
import SideNavbar from "../sideNavbar";
import { usePathname } from "next/navigation";

function Layout({ children }: { children: ReactNode }) {
    const path = usePathname();

    if (path === "/auth/register" || path === "/auth/login") {
        return <>{children}</>;
    }

    return (
        <>
            <NavbarMain />
            <section className="block c700:flex container gap-4">
                <SideNavbar />
                {children}
            </section>
        </>
    );
}

export default Layout;
