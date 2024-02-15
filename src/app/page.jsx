"use client"

import { useTheme } from "next-themes";

export default function Home() {
  const {theme} = useTheme()
  return (
    <main className={`h-screen ${theme === 'dark' ? "main-bg-dark" : "main-bg-light"}`}>

    </main>
  );
}
