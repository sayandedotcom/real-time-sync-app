"use client";

import { signIn } from "next-auth/react";

export default function LogIn() {
  return <button onClick={() => signIn("google")}></button>;
}
