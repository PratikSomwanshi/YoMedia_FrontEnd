import LoginForm from "@/components/login/loginForm";
import GoogleGithubButtons from "@/components/register/gooleGithubButton";
import Image from "next/image";
import React from "react";

function page() {
    return (
        <section className="container flex justify-center items-center h-screen">
            <div className="px-4 py-2 h-[35rem] w-[30rem] max-w-full bg-slate-100 shadow-md">
                <div>
                    <Image
                        src="/logo.svg"
                        alt="logo"
                        width={200}
                        height={200}
                        className="text-center mx-auto !mt-8 !mb-8"
                    />
                </div>
                <LoginForm />
                <GoogleGithubButtons />
            </div>
        </section>
    );
}

export default page;
