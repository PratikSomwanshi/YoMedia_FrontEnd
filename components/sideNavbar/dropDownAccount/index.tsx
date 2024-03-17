import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import Link from "next/link";
import Logout from "./logout";

function DropDownAccount() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <div className="min-w-[16rem] hover:bg-slate-100 px-6 p-6 text-lg border border-black   rounded-md flex gap-4 items-center mb-[0.5rem]">
                    <Image
                        src="/aapp.jpg"
                        alt="something"
                        width={40}
                        height={40}
                        className="rounded-full"
                    />
                    <h3>hello, user name</h3>
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[16rem] border-black rounded-md">
                <DropdownMenuGroup>
                    <Link href="/profile/user_id" className="cursor-pointer">
                        <DropdownMenuItem>
                            <DropdownMenuLabel>Account</DropdownMenuLabel>
                        </DropdownMenuItem>
                    </Link>
                    <DropdownMenuSeparator />
                    <Logout />
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

export default DropDownAccount;
