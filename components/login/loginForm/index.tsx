"use client";
import { Input } from "@/components/ui/input";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import ResetAndRegisterLinks from "@/components/login/resetAndRegisterLinks";

type Inputs = {
    email: string;
    mobile: string;
    password: string;
    conformPassword: string;
};

function LoginForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
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
            <ResetAndRegisterLinks />
        </form>
    );
}

export default LoginForm;
