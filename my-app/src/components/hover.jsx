"use client";

import { useRef, useEffect } from "react";

export default function HoverSoundElement() {
    const audioRef = useRef(null);

    useEffect(() => {
        // Initialize audio when component mounts
        audioRef.current = new Audio("@/assets/SpyEng.m4a"); // Add your sound file to the public folder

        // Optional: Preload the audio file
        audioRef.current.preload = "auto";

        return () => {
            // Cleanup when component unmounts
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current = null;
            }
        };
    }, []);

    const playSound = () => {
        if (audioRef.current) {
            // Reset the audio to the beginning if it's already playing
            audioRef.current.currentTime = 0;
            audioRef.current.play().catch(e => {
                // Handle any play() failures (like if user hasn't interacted with page yet)
                console.log("Audio play failed:", e);
            });
        }
    };

    return (
        <h1
            className="text-4xl font-bold mb-2 cursor-pointer transition-opacity hover:opacity-80"
            onMouseOver={playSound}
        >
            Spy
        </h1>
    );
}