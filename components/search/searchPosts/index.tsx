import React from "react";
import SearchCard from "../searchCard";
import { Button } from "@/components/ui/button";
import useStore from "@/store";

const arr = new Array(9).fill(0);

function SearchPosts() {
    const { searchToggle, setSearchToggle } = useStore();
    return (
        <>
            <div className="flex flex-wrap gap-4">
                <SearchCard />
                {arr.map(() => {
                    return <SearchCard />;
                })}
            </div>
            <div className="flex justify-center items-center h-24">
                <Button variant="link" className="text-lg">
                    Load More ...
                </Button>
            </div>
        </>
    );
}

export default SearchPosts;
