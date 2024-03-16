import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useStore from "@/store";
import React from "react";
import { FaEdit } from "react-icons/fa";

function UserEmailAndMobile() {
    const {
        account: { user_mobile, user_email },
        setEmail,
        setMobile,
    } = useStore();
    const [openToEdit, setOpenToEdit] = React.useState(false);
    const [openEmailToEdit, setOpenEmailToEdit] = React.useState(false);

    return (
        <section className="flex">
            <div className="flex gap-2 items-end pr-8 pt-6 w-3/4 ">
                <div>
                    <span className="text-lg font-medium ">User Mobile: </span>
                    <Input
                        type="text"
                        disabled={openToEdit ? false : true}
                        value={user_mobile}
                        onChange={(e) => setMobile(e.target.value)}
                        className="mt-1 w-full"
                    />
                </div>
                {!openToEdit && (
                    <Button
                        className="flex border-2  gap-1 justify-center items-center py-1 rounded-md cursor-pointer"
                        onClick={() => setOpenToEdit(true)}
                        variant="outline">
                        <FaEdit />
                        <span>edit</span>
                    </Button>
                )}
            </div>
            <div className="flex gap-2 items-end pr-8 pt-6 w-3/4 ">
                <div>
                    <span className="text-lg font-medium ">User Email: </span>
                    <Input
                        type="text"
                        disabled={openEmailToEdit ? false : true}
                        value={user_email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="mt-1 w-full"
                    />
                </div>
                {!openEmailToEdit && (
                    <Button
                        className="flex border-2  gap-1 justify-center items-center  py-1 rounded-md cursor-pointer"
                        onClick={() => setOpenEmailToEdit(true)}
                        variant="outline">
                        <FaEdit />
                        <span>edit</span>
                    </Button>
                )}
            </div>
        </section>
    );
}

export default UserEmailAndMobile;
