import SearchCard from "@/components/search/searchCard";
import VideoCard from "@/components/videoCard";
import React from "react";

const arr = new Array(9).fill(0);

function page({ params: { slug } }: { params: { slug: string } }) {
    return (
        <section className="w-full container">
            <div className="flex justify-center mt-4">
                <div className="w-[360px] h-[calc(100vh-6rem)] overflow-hidden">
                    <VideoCard />
                </div>
            </div>
            <div className="py-8">
                <h3 className="text-lg font-medium py-4">Most Popular Now::</h3>
                <div className="flex flex-wrap gap-4">
                    {arr.map(() => {
                        return <SearchCard />;
                    })}
                </div>
            </div>
        </section>
    );
}

export default page;
