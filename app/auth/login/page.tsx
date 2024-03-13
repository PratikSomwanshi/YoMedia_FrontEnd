import { Input } from "@/components/ui/input";
import React from "react";

function Login() {
    return (
        <section>
            <form action="">
                <div>
                    <Input type="email" placeholder="Enter your email" />
                </div>
                <div>
                    <Input type="password" />
                </div>
                <div>
                    <Input type="password" />
                </div>
            </form>
        </section>
    );
}

export default Login;
