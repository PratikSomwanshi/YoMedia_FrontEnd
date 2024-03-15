import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { FaEdit } from "react-icons/fa";

function UserNameEdit() {
    const [openToEdit, setOpenToEdit] = React.useState(false);
    return (
        <div className="flex gap-2 items-end  w-3/4">
            <div>
                <span className="text-lg font-medium ">User Name: </span>
                <Input
                    type="text"
                    disabled={openToEdit ? false : true}
                    value="xxuser_namexx"
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

export default UserNameEdit;
