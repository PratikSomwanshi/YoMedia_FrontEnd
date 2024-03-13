"use client";
import useStore from "@/app/store";
import React, { useState } from "react";

function Toggler() {
    const { toggle, toggler } = useStore();

    console.log(toggle);
    return (
        <>
            <h1 onClick={() => toggler()}>ham</h1>
        </>
    );
}

export default Toggler;
