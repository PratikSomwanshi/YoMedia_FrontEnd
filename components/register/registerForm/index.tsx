"use client";
import { Input } from "@/components/ui/input";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import ResetAndRegisterLinks from "@/components/login/resetAndRegisterLinks";
import AccountPresentLink from "../accountPresentLink";

type Inputs = {
    email: string;
    mobile: string;
    password: string;
    conformPassword: string;
};

function RegisterForm() {
    const {
        register,
        handleSubmit,
        watch,
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
            <AccountPresentLink />
        </form>
    );
}

export default RegisterForm;
