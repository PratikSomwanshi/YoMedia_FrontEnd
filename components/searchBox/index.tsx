import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";

import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

function SearchBox() {
    const router = useRouter();

    const [search, setSearch] = useState("");

    return (
        <div className="flex w-full justify-center items-center gap-2">
            <Input
                type="text"
                value={search}
                onChange={(e) => {
                    setSearch(e.target.value);
                }}
                placeholder="search people, post, feeds"
                className="w-[90%] c400:w-[75%] outline-none"
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        router.push(`/search/${search}`);
                    }
                }}
            />
            <span
                onClick={() => {
                    router.push(`/search/${search}`);
                }}>
                <Button type="submit" className="">
                    <CiSearch size="1.6rem" />
                </Button>
            </span>
        </div>
    );
}

export default SearchBox;
