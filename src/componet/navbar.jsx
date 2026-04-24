"use client";

import Link from "next/link";

import { useSession } from "@/lib/auth-client";

const Navbar = () => {

    const { data, isPending } = useSession();
    if (isPending) {
        return <div> Loading... </div>
    }

    console.log(data)

    return (
        <nav className="bg-white shadow px-6 py-4 flex justify-between items-center">

            {/* Logo */}
            <Link href="/" className="text-xl font-bold">
                DevilApp
            </Link>

            {/* Menu */}
            <div className="flex gap-6">
                <Link href="/">Home</Link>
                <Link href="/task">Task</Link>
                <Link href="/about">About</Link>
            </div>

            {/* Auth */}
            <div className="flex gap-4">
                <Link href="/login">Login</Link>
                <Link href="/signup">Sign Up</Link>
            </div>

        </nav>
    );
};

export default Navbar;