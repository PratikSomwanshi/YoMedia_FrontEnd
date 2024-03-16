import {
    DropdownMenuItem,
    DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import React from "react";

function Logout() {
    return (
        <div onClick={() => console.log("logout")}>
            <DropdownMenuItem>
                <DropdownMenuLabel>Logout</DropdownMenuLabel>
            </DropdownMenuItem>
        </div>
    );
}

export default Logout;
