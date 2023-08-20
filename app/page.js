"use client";
import LoginPage from "./login/page";

import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const { user } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (user !== null) router.push("/dashboard");
  }, [user]);
  return (
    <main className="main_page flex-center">
      <LoginPage />
    </main>
  );
}
