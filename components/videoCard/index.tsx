"use client";
import React, { useEffect, useRef, useState } from "react";
import { Waypoint } from "react-waypoint";
import { FaRegHeart, FaComment, FaRegBookmark } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { VscUnmute, VscMute } from "react-icons/vsc";
import useStore from "@/store";

function VideoCard() {
    const videoRef: any = useRef();
    const { isMute, mutter } = useStore();

    async function play() {
        await videoRef.current.play();
    }

    async function pause() {
        await videoRef.current.pause();
    }

    return (
        <div className="h-full snap-center shadow-md flex items-center">
            <div className="bg-slate-50 rounded-md shadow-md">
                <div className="flex justify-between  items-center h-10 px-2 py-2">
                    <div className="flex gap-2 items-center">
                        <div className="h-8 w-8 rounded-full bg-pink-500"></div>
                        <div>
                            <h3>user name</h3>
                        </div>
                    </div>
                    <div className="">
                        {isMute ? (
                            <VscMute size="1.2rem" />
                        ) : (
                            <VscUnmute size="1.2rem" />
                        )}
                    </div>
                </div>
                <div className="h-[560px]" onClick={mutter}>
                    <Waypoint onEnter={play} onLeave={pause}>
                        <video
                            loop
                            controlsList="nodownload"
                            muted={isMute}
                            className="h-full object-cover rounded-md pointer-events-none"
                            ref={videoRef}>
                            <source src="/food.mp4" />
                        </video>
                    </Waypoint>
                </div>
                <div className="flex justify-between h-14 p-4">
                    <div className="flex items-center gap-4">
                        <div>
                            <FaRegHeart size="1.6rem" />
                        </div>
                        <div>
                            <FaComment size="1.6rem" />
                        </div>
                        <div>
                            <IoIosSend size="1.6rem" />
                        </div>
                    </div>
                    <div className="flex items-center">
                        <FaRegBookmark size="1.6rem" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VideoCard;
