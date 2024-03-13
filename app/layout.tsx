import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { getSession } from "@/actions/userActions";
import NavbarMain from "@/components/navbarMain";
import SideNavbar from "@/components/sideNavbar";
import { permanentRedirect, redirect, usePathname } from "next/navigation";
import Layout from "@/components/layoutSub";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Layout children={children} />
            </body>
        </html>
    );
}
