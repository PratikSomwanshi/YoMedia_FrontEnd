"use client";
import CoverPhoto from "@/components/account/coverPhoto";
import UserEmailAndMobile from "@/components/account/userEmailAndMobile";
import UserIDEdit from "@/components/account/userIdEdit";
import UserNameEdit from "@/components/account/userNameEdit";
import { Button } from "@/components/ui/button";
import useStore from "@/store";

import React from "react";

function Account() {
    const { account } = useStore();

    return (
        <section className="flex justify-center items-center w-screen">
            <div className="h-[70%] w-[70%] bg-slate-50 rounded-lg">
                <CoverPhoto />
                <form className="px-4 py-4">
                    <UserNameEdit />
                    <UserIDEdit />
                    <UserEmailAndMobile />
                    <div className="w-full mt-10 flex justify-center">
                        <Button
                            type="submit"
                            className="w-3/4 bg-green-600 hover:bg-green-800"
                            onClick={(e) => {
                                e.preventDefault();
                                console.log(account);
                            }}>
                            UPDATE
                        </Button>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Account;
