import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

function AccountPresentLink() {
    return (
        <div className="h-20 flex flex-col items-center w-full justify-between">
            <div className="text-center">
                <Link
                    href="/auth/login"
                    className="text-blue-500 underline underline-offset-2">
                    Already have account? just login
                </Link>
            </div>
            <Button
                type="submit"
                className="bg-green-500 text-white px-4 py-2 w-[80%]">
                Register
            </Button>
        </div>
    );
}

export default AccountPresentLink;
