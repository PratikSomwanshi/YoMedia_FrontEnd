"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { FaGithub, FaGoogle } from "react-icons/fa";

type Inputs = {
    email: string;
    mobile: string;
    password: string;
    conformPassword: string;
};

function Login() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

    return (
        <section className="container flex justify-center items-center h-screen">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="px-4 py-2 h-[35rem] w-[30rem] max-w-full bg-slate-100 shadow-md">
                <div>
                    <Image
                        src="/logo.svg"
                        alt="logo"
                        width={200}
                        height={200}
                        className="text-center mx-auto !mt-8 !mb-8"
                    />
                </div>
                <div>
                    <Input
                        type="email"
                        className="h-12"
                        placeholder="Enter your email"
                        {...register("email", {
                            required: true,
                        })}
                    />
                    <div className="h-8 flex items-center text-red-500 px-2 !mb-1">
                        {errors.email && <span>Email is Required</span>}
                    </div>
                </div>
                <div>
                    <Input
                        type="password"
                        placeholder="Enter password ..."
                        className="h-12"
                        {...register("password", {
                            required: true,
                        })}
                    />
                    <div className="h-8 flex items-center text-red-500 px-2 !mb-1">
                        {errors.password && <span>Password is Required</span>}
                    </div>
                </div>
                <div>
                    <Input
                        type="password"
                        className="h-12"
                        placeholder="Conform password ..."
                        {...register("conformPassword", {
                            required: true,
                            validate: (value) =>
                                value === watch("password") ||
                                "The passwords do not match",
                        })}
                    />
                    <div className="h-8 flex items-center text-red-500 px-2 !mb-1">
                        {errors.conformPassword && (
                            <span>Password does not match</span>
                        )}
                    </div>
                </div>
                <div className="flex justify-between h-[4.6rem] !mt-1 flex-col items-center ">
                    <div>
                        <Link href="#">forgot password</Link> |{" "}
                        <Link href="#">Don't have account</Link>
                    </div>
                    <Button
                        type="submit"
                        className="bg-green-500 text-white px-4 py-2 w-[80%]">
                        Login
                    </Button>
                </div>

                <div className="flex w-full h-16 justify-around items-center mt-4">
                    <div className="flex">
                        <Link
                            href="#"
                            className="bg-white px-4 py-2 flex justify-between items-center gap-2 rounded-md">
                            <span>Github</span> <FaGithub />
                        </Link>
                    </div>
                    <div className="flex">
                        <Link
                            href="#"
                            className="bg-white px-4 py-2 flex justify-between items-center gap-2 rounded-md">
                            <span>Google</span> <FaGoogle />
                        </Link>
                    </div>
                </div>
            </form>
        </section>
    );
}

export default Login;
