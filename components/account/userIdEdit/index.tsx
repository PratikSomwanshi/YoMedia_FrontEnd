import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { FaEdit } from "react-icons/fa";
import useStore from "@/store";

function UserIDEdit() {
    const {
        account: { user_id },
        setID,
    } = useStore();
    const [openToEdit, setOpenToEdit] = React.useState(false);
    return (
        <div className="flex gap-2 items-end pr-8 pt-6 w-3/4">
            <div>
                <span className="text-lg font-medium ">User ID: </span>
                <Input
                    type="text"
                    disabled={openToEdit ? false : true}
                    value={user_id}
                    onChange={(e) => setID(e.target.value)}
                    className="mt-1 w-full"
                />
            </div>
            {!openToEdit && (
                <Button
                    className="flex border-2  gap-1 justify-center items-center  py-1 rounded-md cursor-pointer"
                    onClick={() => setOpenToEdit(true)}
                    variant="outline">
                    <FaEdit />
                    <span>edit</span>
                </Button>
            )}
        </div>
    );
}

export default UserIDEdit;
