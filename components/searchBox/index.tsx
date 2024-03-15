import React from "react";
import { CiSearch } from "react-icons/ci";

import { Input } from "../ui/input";
import { Button } from "../ui/button";

function SearchBox() {
    return (
        <div className="flex w-full justify-center items-center gap-2">
            <Input
                type="text"
                placeholder="search people, post, feeds"
                className="w-[90%] c400:w-[75%] outline-none"
            />
            <span>
                <Button type="submit" className=" ">
                    <CiSearch size="1.6rem" />
                </Button>
            </span>
        </div>
    );
}

export default SearchBox;
