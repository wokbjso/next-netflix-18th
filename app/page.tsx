"use client";
import { useEffect } from "react";
import LandingNetflix from "./components/LandingNetflix";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/main");
    }, 3500);
  });
  return (
    <div className="w-full h-full bg-background-main flex justify-center items-center">
      <LandingNetflix />
    </div>
  );
}
