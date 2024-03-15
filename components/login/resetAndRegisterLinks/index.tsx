import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

function ResetAndRegisterLinks() {
    return (
        <div className="flex justify-between h-[4.6rem] !mt-1 flex-col items-center ">
            <div className="text-blue-500">
                <Link
                    href="#"
                    className="text-blue-500 underline underline-offset-2">
                    forgot password
                </Link>{" "}
                |{" "}
                <Link
                    href="/auth/register"
                    className="text-blue-500 underline underline-offset-2">
                    Don't have account
                </Link>
            </div>
            <Button
                type="submit"
                className="bg-green-500 text-white px-4 py-2 w-[80%]">
                Login
            </Button>
        </div>
    );
}

export default ResetAndRegisterLinks;
