"use client";
import CoverPhoto from "@/components/account/coverPhoto";
import UserIDEdit from "@/components/account/userIdEdit";
import UserNameEdit from "@/components/account/userNameEdit";

import React from "react";
function Account() {
    return (
        <section className="flex justify-center items-center w-screen">
            <div className="h-[70%] w-[70%] bg-slate-50 rounded-lg">
                <CoverPhoto />
                <div className="px-4 py-4">
                    <UserNameEdit />
                    <UserIDEdit />
                </div>
            </div>
        </section>
    );
}

export default Account;
