"use client";

import { CheckCircle } from "lucide-react";
import { useState, useEffect } from "react";

export default function TimeDisplay() {
    const [greeting, setGreeting] = useState("track by time");

    let check_greeting;

    useEffect(() => {
        // Function to update greeting based on current time

        const updateGreeting = () => {
            const currentHour = new Date().getHours();

            if (currentHour >= 5 && currentHour < 12) {
                setGreeting("Good morning 🫧🌤️☁");
                check_greeting = "morning";
            } else if (currentHour >= 12 && currentHour < 17) {
                setGreeting("Good afternoon 🌯🍱🍜");
                check_greeting = "afternoon";
            } else if (currentHour >= 17 && currentHour < 21) {
                setGreeting("Good evening 🎧🌿📖");
                check_greeting = "evening";
            } else {
                setGreeting("Good night 🌙✨🕯️");
                check_greeting = "night";
            }
        };

        // Update immediately when component mounts
        updateGreeting();

        // Set up interval to update every minute (60000ms)
        const intervalId = setInterval(updateGreeting, 60000);

        // Clean up interval on unmount
        return () => clearInterval(intervalId);
    }, []);

    if ({ check_greeting } == "evening") {
        console.log(check_greeting)
        return <div className="after:content-['\01F354'] ">{greeting}</div>;
    }
    return <div>{greeting}</div>;
}