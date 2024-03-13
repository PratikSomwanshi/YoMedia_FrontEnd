"use client";

import VideoCard from "@/components/videoCard";

function page() {
    return (
        <div className="flex justify-center items-center w-full">
            <div className="w-[360px] h-[calc(100vh-6rem)] space-y-4 overflow-y-scroll snap-y snap-mandatory example m-4">
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
            </div>
        </div>
    );
}

export default page;
