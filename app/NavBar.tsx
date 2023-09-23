"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  const { status, data: session } = useSession();

  const handleLoginStatus = () => {
    if (status === "loading") return null;
    else if (status === "unauthenticated")
      return <Link href="/api/auth/signin">Login</Link>;
    else return <div>{session!.user!.name}</div>;
  };

  return (
    <div className="flex bg-slate-200 p-5 space-x-5">
      <Link href="/">Next.js</Link>
      <Link href="/users">Users</Link>
      {handleLoginStatus()}
    </div>
  );
};

export default NavBar;
