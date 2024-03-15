"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    title: string;
    thumbnail: string;
    file: string;
};

const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

function AddPost() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="border-2 rounded-md px-8 py-4">
            <div>
                <label htmlFor="title">
                    <span>Title: </span>
                    <Input
                        type="text"
                        id="title"
                        placeholder="Title"
                        {...register("title", {
                            required: true,
                        })}
                    />
                </label>
                <div className="h-8 px-2 py-1 text-red-500">
                    {errors.title && <span>Tittle is required</span>}
                </div>
            </div>
            <div>
                <label htmlFor="thumbnail">
                    <span>Thumbnail: </span>
                    <Input
                        type="file"
                        id="thumbnail"
                        {...register("thumbnail", {
                            required: true,
                        })}
                    />
                </label>
                <div className="h-8 px-2 py-1 text-red-500">
                    {errors.thumbnail && <span>Thumbnail is required</span>}
                </div>
            </div>
            <div>
                <label htmlFor="file">
                    <span>File Upload: </span>
                    <Input
                        type="file"
                        id="file"
                        {...register("file", {
                            required: true,
                        })}
                    />
                </label>
                <div className="h-8 px-2 py-1 text-red-500">
                    {errors.file && <span>video is required</span>}
                </div>
            </div>
            <div className="w-full !mt-6">
                <Button type="submit" className="w-full bg-green-600">
                    Upload
                </Button>
            </div>
        </form>
    );
}

export default AddPost;
