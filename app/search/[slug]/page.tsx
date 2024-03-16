"use client";
import SearchPosts from "@/components/search/searchPosts";
import SearchUsers from "@/components/search/searchUsers";
import useStore from "@/store";
import React from "react";

function page({ params: { slug } }: { params: { slug: string } }) {
    const { searchToggle, setSearchToggle } = useStore();

    return (
        <section className="px-4 py-2">
            {searchToggle ? (
                <SearchPosts />
            ) : (
                <div className="h-20 m-auto w-3/4 bg-slate-50 rounded-md shadow-md flex justify-between items-center px-2">
                    <SearchUsers />
                </div>
            )}
        </section>
    );
}

export default page;
