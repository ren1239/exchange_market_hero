"use client";
import Hero from "./components/Hero";
import Scene from "./components/Scene";
import * as THREE from "three"; // Imports everything from Three.js

export default function Home() {
  return (
    <main className="h-screen w-screen relative overflow-hidden">
      <Hero />
      <Scene />
    </main>
  );
}
