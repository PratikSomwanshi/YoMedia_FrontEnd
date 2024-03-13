import React from "react";

import { Input } from "@/components/ui/input";
import Toggler from "@/components/sideNavbarToggler";

function NavbarMain() {
    return (
        <section className="mobile:h-16 shadow-md ">
            <nav className="flex h-16 container tablet:justify-between items-center">
                <div className="hidden c900:block mobile:w-28 underline underline-offset-2 m-auto ">
                    <h1>YoMedia</h1>
                </div>
                <div className="c900:hidden underline underline-offset-2 m-auto">
                    <Toggler />
                </div>
                <div className="hidden  tablet:w-1/2 w-[75%] mobile:flex justify-center">
                    <Input
                        type="text"
                        placeholder="search people, post, feeds"
                        className="min-w-[10rem]"
                    />
                </div>
            </nav>
            <div className="mobile:hidden flex justify-center items-center  h-16  shadow-md">
                <Input
                    type="text"
                    placeholder="search people, post, feeds"
                    className="w-[90%] c400:w-[75%]"
                />
            </div>
        </section>
    );
}

export default NavbarMain;
