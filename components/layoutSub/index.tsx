import React, { ReactNode } from "react";
import NavbarMain from "../navbarMain";
import SideNavbar from "../sideNavbar";
import { getSession } from "@/actions/userActions";

async function Layout({ children }: { children: ReactNode }) {
    const session = await getSession();

    if (!session.isLoggedIn) {
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
