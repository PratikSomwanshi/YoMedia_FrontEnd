"use client";
import React, { useEffect, useRef, useState } from "react";
import { Waypoint } from "react-waypoint";

function VideoCard({ count }: { count: string }) {
    const videoRef: any = useRef();
    const [playing, setPlaying] = useState(false);
    // console.log(count, playing);

    async function play() {
        await videoRef.current.play();
        setPlaying(false);
        console.log("enter " + count);
    }

    async function pause() {
        await videoRef.current.pause();
        setPlaying(true);
        console.log("exit " + count);
    }

    return (
        <div className="h-full snap-center bg-green-300 flex items-center">
            <div className="bg-red-300 h-[560px]">
                <Waypoint
                    onEnter={async () => await play()}
                    onLeave={async () => await pause()}>
                    <video
                        // muted
                        controls
                        className="h-full object-cover rounded-md"
                        ref={videoRef}
                        onClick={play}>
                        <source src="/food.mp4" />
                    </video>
                </Waypoint>
            </div>
        </div>
    );
}

export default VideoCard;
