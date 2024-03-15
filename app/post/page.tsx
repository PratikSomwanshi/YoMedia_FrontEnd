import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

function PostFile() {
    return (
        <section className="flex justify-center items-center w-full">
            <form className="border-2 rounded-md px-8 py-4">
                <div>
                    <label htmlFor="title">
                        <span>Title: </span>
                        <Input type="text" id="title" placeholder="Title" />
                    </label>
                </div>
                <div>
                    <label htmlFor="thumbnail">
                        <span>Thumbnail: </span>
                        <Input type="thumbnail" />
                    </label>
                </div>
                <div>
                    <label htmlFor="file">
                        <span>File Upload: </span>
                        <Input type="file" id="file" />
                    </label>
                </div>
                <div className="w-full">
                    <Button type="submit">Upload</Button>
                </div>
            </form>
        </section>
    );
}

export default PostFile;
